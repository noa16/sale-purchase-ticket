import React, { Component } from 'react'
import {TicketConsumer} from '../../TicketProvider'
import {TicketList} from '../PurchasePage/TicketList/TicketList'
import classes from './Purchase.module.css'

class Purchase extends Component{

   
    
    render(){
    return(
    <React.Fragment>
        <TicketConsumer>
        
            {(value)=>{
                const {sale_id} = value
                console.log("sale"+sale_id)
                return(
                    <React.Fragment>
                    <h1 className={classes.title}>My purchase</h1>
                    <div className={classes.container}>
                        
                        {
                            sale_id.map((ticket)=>{

                                return(
                                    <div className={classes.card} key={ticket.sale_id}> 
                                            <div> price:{ticket.price}</div>
                                            <div>description:{ticket.description}</div>
                                    </div>
                                )
                            })
                         }
                        
                            
                    
                       
                        
                        
                            
                            

                    </div>
                    </React.Fragment>
                   
                )
                
                
        
        }}
        </TicketConsumer>
    </React.Fragment>
    )

}
}

export default Purchase