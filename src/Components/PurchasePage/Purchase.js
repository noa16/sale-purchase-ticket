import React, { Component } from 'react'
import {TicketConsumer} from '../../TicketProvider'
import {TicketList} from '../PurchasePage/TicketList/TicketList'

class Purchase extends Component{

    render(){
    return(
        <TicketConsumer>
            {(value)=>{
                return(
                    <div>
                        
                        
                    </div>
                   
                )
                
                
        
        }}
        </TicketConsumer>
    )

}
}

export default Purchase