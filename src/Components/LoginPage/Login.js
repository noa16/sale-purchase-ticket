import React, { useEffect, useState } from 'react'
import classes from './Login.module.css'
import {TicketConsumer, TicketProvider} from '../../TicketProvider'
import {Link} from 'react-router-dom'

const Login = ()=>{


const [userName,setUsername] = useState(null)
const [password,setPassword] = useState(null)



    return(
    <React.Fragment>
       
        <TicketConsumer>
            {
                (value)=>{
                    const {handleLogin, isValidUserPass} = value
                    return(
                        
                        <div className={classes.frame}>
                            <h1 className={classes.title}>Login</h1>
                        <div className={classes.login}>
                            username:<input id={classes.id} 
                            onChange={(event)=>setUsername(event.target.value)} 
                            placeholder="Enter email"
                            type="text" />
                            password:<input id={classes.password} 
                            type="password"
                            placeholder="Enter password"
                            onChange={(event)=>setPassword(event.target.value)}/>
                            {isValidUserPass===false ?
                            <div className={classes.error}>
                            username or password is incorrect
                            <button 
                            className={classes.loginButton}
                            onClick={ ()=>handleLogin(userName,password)
                                      }
                            >login</button>
                            </div>:isValidUserPass===null?
                             <button 
                             className={classes.loginButton}
                             onClick={ ()=>handleLogin(userName,password)}
                             >login</button>
                            :< Link to = "/" >
                            <button 
                            className={classes.loginButton}
                            onClick={ ()=>handleLogin(userName,password)}
                            >login</button>
                            </Link>}
                            
                        
                        </div>
                      </div>
                    )
                }
               
            }

        </TicketConsumer>
      
    </React.Fragment>
    )

}

export default Login