import React, { Component } from "react";
import { TicketConsumer, TicketProvider } from "../../TicketProvider";
import TicketList from "../PurchasePage/TicketList/TicketList";
import classes from "./HomePage.module.css";
import contact from "../../images/communications.png";
import Form from "../../FormSubmit/Form";
import facebook from "../../images/facebook.png";
import whatsapp from "../../images/whatsapp.png";
import twitter from "../../images/twitter.png";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1 className={classes.title}>Ticket for sale</h1>
        </header>
        <div className={classes.contentdivider}></div>
        <section className={classes.clearfix}>
          <article className={classes.info}>
            <p>
              <h4>contact</h4>
              On this site you can purchase second hand tickets In addition, you
              can offer your own tickets for sale that you do not use, for
              example if you purchased a football or basketball game and you
              have purchased too many tickets or cannot reach the game, then you
              can offer the ticket for sale on the site
            </p>
            <img src={contact} className={classes.image} />
          </article>
          <article className={classes.info}>
            <p>
              <h4>Info</h4>
              On this site you can purchase second hand tickets In addition, you
              can offer your own tickets for sale that you do not use, for
              example if you purchased a football or basketball game and you
              have purchased too many tickets or cannot reach the game, then you
              can offer the ticket for sale on the site
            </p>
          </article>
          <article className={classes.info}>
            <p>
              <h4>Contact</h4>
              On this site you can purchase second hand tickets In addition, you
              can offer your own tickets for sale that you do not use, for
              example if you purchased a football or basketball game and you
              have purchased too many tickets or cannot reach the game, then you
              can offer the ticket for sale on the site
            </p>
          </article>
        </section>
        <h3>ticket you can purchase</h3>
        <div className={classes.container}>
          <TicketConsumer>
            {(value) => {
              const {
                ticketsSale,
                handlePurchase,
                isPurchase,
                username,
                password,
                handlePurchaseSaleId,
              } = value;
              return ticketsSale.map((ticket) => {
                return (
                  <article className={classes.tickets}>
                    <TicketList
                      handlePurchaseSaleId={handlePurchaseSaleId}
                      key={ticket.sale_id}
                      sale_id={ticket.sale_id}
                      isPurchase={isPurchase}
                      handlePurchase={handlePurchase}
                      description={ticket.description}
                      price={ticket.price}
                      username={username}
                      password={password}
                    />
                  </article>
                );
              });
              return <div></div>;
            }}
          </TicketConsumer>
        </div>
        <section className={classes.footer}>
          <h3 className={classes.contactTitle}>contact</h3>
          <p className={classes.contactpah}>
            you can contact with us in any trouble on facebook instgram{" "}
          </p>
          <article className={classes.socialMedia}>
            <img className={classes.imgIcon} src={facebook} />
            <img className={classes.imgIcon} src={whatsapp} />
            <img className={classes.imgIcon} src={twitter} />
          </article>
          <Form />
        </section>
        <footer></footer>
      </React.Fragment>
    );
  }
}

export default Home;
