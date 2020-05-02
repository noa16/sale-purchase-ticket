import React from 'react'
import classes from './Modal.module.css'
import  {TicketConsumer, TicketProvider} from '../TicketProvider'



const Modal = ()=>{
    return(
      
        <div className={classes.modalContainer}>
        <TicketConsumer>
            {
                (value)=>{
                    const{modalOpen} = value
                    return(
                        <div className={classes.modal_inner}>

                        </div>
                    )
                }
            }
        </TicketConsumer>
         </div>
        
            

      
        
    )
}
export default Modal