import React,{Component} from 'react'
import {TicketConsumer} from '../../../TicketProvider'
import classes from './TicketList.module.css'
import Title from '../../../UI/Title'
import {Link} from 'react-router-dom'
 const TicketList=(props)=> {

  
    return(
        
          <div  className="col-9 mx-auto col-md-6 col-lg-3 my-3 ">
             <div className={classes.card}>
                <Title/>
                <div>price:{props.price}</div>
                 <div>location:</div>
                <div>description:{props.description}</div>
                <Link to="/modal">
                  <button 
                  onClick={()=>props.handlePurchase(props.sale_id)}
                  disabled={props.isPurchase}>
                    purchase
                  </button>
                </Link>
                
              

             </div>
          </div>

        
           
          
             
               

           
           
        )
    

}
export default TicketList
