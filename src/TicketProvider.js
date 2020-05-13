import React, { Component } from "react";

export const TicketContext = React.createContext();

class TicketProvider extends Component {
  temp = null;
  state = {
    username: null,
    password: null,
    ticketsSale: [],
    isPurchase: false,
    modalOpen: false,
    isValidUserPass: null,
    sale_id: "noa",
  };

  handleSale = async (email, description, price) => {
    console.log("handle saleeee");
    console.log(description);
    try {
      var max_id;
      const maxResponse = await fetch("http://localhost:5000/max");
      const jsonData = await maxResponse.json();
      var max = await JSON.parse(JSON.stringify(jsonData));
      max_id = max[0].max;
      const response = await fetch("http://localhost:5000/sale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, description, price, max_id }),
      });

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  handlePurchaseSaleId = async (ticketId) => {
    this.setState({ isPurchase: true });
    try {
      await fetch(`http://localhost:5000/purchase/${ticketId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/text" },
        body: "false",
      });
    } catch (e) {
      console.log(e);
    }
  };

  handlePurchase = async (username, password, ticketId) => {
    try {
      const response = await fetch("http://localhost:5000/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, username, ticketId }),
      });

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  getPurchase = async (username, sale_id) => {
    var arr = [];
    const response = await fetch(`http://localhost:5000/purchase/${username}`);
    const jsonData = await response.json();
    var clone = await JSON.parse(JSON.stringify(jsonData));
    clone.map(async (value) => {
      const ticket = await fetch(
        `http://localhost:5000/tickets/${value.sale_id}`
      );
      const ticketJson = await ticket.json();
      this.temp = await JSON.parse(JSON.stringify(ticketJson));
      await arr.push({
        price: this.temp[0].price,
        purchase: this.temp[0].purchase,
        sale_id: this.temp[0].sale_id,
        description: this.temp[0].description,
      });
    });

    this.setState({ sale_id: arr });
  };

  handleLogin = async (username, password) => {
    let usernameDB;
    const response = await fetch(`http://localhost:5000/login/${password}`);
    const jsonData = await response.json();
    var clone = JSON.parse(JSON.stringify(jsonData));
    if (clone.length === 0) {
      console.log("password dont exisit");
      this.setState({ isValidUserPass: false });
    } else {
      clone.map((value) => {
        if (value.email) {
          usernameDB = value.email;
        }
      });
      if (usernameDB === username) {
        this.setState({ isValidUserPass: true });
        this.setState({ password });
        this.setState({ username });
        this.getPurchase(username, this.state.sale_id);
      } else {
        this.setState({ isValidUserPass: false });
      }
    }
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:5000/sale");
      const jsonData = await response.json();
      var clone = JSON.parse(JSON.stringify(jsonData));
      this.setState({ ticketsSale: clone });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <TicketContext.Provider
        value={{
          ...this.state,
          ticketsSale: this.state.ticketsSale,
          handlePurchase: this.handlePurchase,
          handleLogin: this.handleLogin,
          getPurchase: this.getPurchase,
          handlePurchaseSaleId: this.handlePurchaseSaleId,
          handleSale: this.handleSale,
        }}
      >
        {this.props.children}
      </TicketContext.Provider>
    );
  }
}
const TicketConsumer = TicketContext.Consumer;
export { TicketProvider, TicketConsumer };
