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
          <Link to="/pizza">Order</Link>
      </nav>

      
      <Switch>
       <Route path="/pizza">
          <OrderForm />
        </Route>

        <Route path="/thankyou">
          <Thankyou />
        </Route>

        <Route path="/">
         <Home />
        </Route>

      </Switch>
    </Router>
    </>
  );
};
export default App;
