import React, { Component } from 'react'


const TicketContext = React.createContext()


class TicketProvider extends Component{
    state={
       
        username:null,
        ticketsSale:[],
        isPurchase:false,
        modalOpen:false
    }
     handlePurchase= async(id)=>{
        console.log("inside purchase"+id)
      //  this.setState({isPurchase:true})
       // const response = await fetch(`http://localhost:5000/purchase/${id}`,{
         //     method:"PUT",
       //       headers:{"Content-Type":"application/text"},
       //       body:"true"


      //  }

      //  )
    
    }
    async componentDidMount(){
       

        try{
        const response = await fetch('http://localhost:5000/sale')
        const jsonData = await response.json()
        console.log(jsonData)
        var clone = JSON.parse(JSON.stringify(jsonData));
       this.setState({ticketsSale:clone})
        }
        catch(e){
            console.log(e)
        }
       
        
    }

    render(){
        return(
            <TicketContext.Provider value={{
                ...this.state,
                ticketsSale:this.state.ticketsSale,
                handlePurchase:this.handlePurchase

            }}>
                {this.props.children}
            </TicketContext.Provider>
        )
    }
}
const TicketConsumer = TicketContext.Consumer;
export{TicketProvider,TicketConsumer}