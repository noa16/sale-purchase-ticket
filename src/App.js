import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Navbar from './UI/Navbar'
import Home from './Components/HomePage/Home'
import Purchase from './Components/PurchasePage/Purchase'
import Modal from './UI/Modal'
import Login from './Components/LoginPage/Login'
import './App.css';

function App() {
  return (
  <React.Fragment>
     <Navbar/>
     <div>
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route path='/purchase' component={Purchase}/>
         <Route path='/modal' component={Modal}/>
         <Route path='/login' component={Login}/> 

       </Switch>
       

     </div>
  </React.Fragment>
   
  
  );
}

export default App;
