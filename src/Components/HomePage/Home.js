import React, { Component } from 'react'
import {TicketConsumer, TicketProvider} from '../../TicketProvider'
import TicketList from '../PurchasePage/TicketList/TicketList'
import classes from './HomePage.module.css'

class Home extends Component{
    render(){
        return(
            <React.Fragment>
            <h1 className={classes.title}>Ticket for sale</h1> 
            <div className={classes.container}>
              <TicketConsumer>
                {(value)=>{
                  const {ticketsSale,handlePurchase,isPurchase,username,password,handlePurchaseSaleId} = value
                  return ticketsSale.map((ticket)=>{
                   
                   return(
                              
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
                   )
               })
                return(
                    <div>
                    </div>
                   
                )
        }}
        </TicketConsumer>
        
        </div>
        </React.Fragment>
                            
                        

            
        )
    }
}

export default Home