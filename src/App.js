import React from 'react'
import Home from './Home'
import OrderForm from './OrderForm'
import Thankyou from './Thankyou'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom"


const App = () => {
  return (
    <>
    <Router>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/order">Order</Link>
      </nav>

      
      <Home />
      <OrderForm />
      <Thankyou />
    </Router>
    </>
  );
};
export default App;
