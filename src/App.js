import React, { useState } from 'react'
import Home from './Home'
import OrderForm from './OrderForm'
import Thankyou from './Thankyou'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom"


  //-----------------------------------//
  //         Initial Values            //
  //-----------------------------------//
const initialFormValues = 
{
  name:'',
  pizzaSize:'',
  cheeseTopping:false,
  pepperoniTopping:false,
  mushroomsTopping:false,
  pineappleTopping:false,
  canadianBaconTopping:false,
  jalapenosTopping:false,
  instructions:'',
}

const App = () => {
  //-----------------------------------//
  //         States                    //
  //-----------------------------------//
  const [ formValues, setFormValues ] = useState(initialFormValues)

  //-----------------------------------//
  //          Event Handlers           //
  //-----------------------------------//

  const change = (name, value) => {

    //validate
    // [!] add this

    //send to formValues state
    setFormValues({...formValues, [name]:value})

  }

  return (
    <>
    <Router>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
      </nav>

      
      <Switch>
       <Route path="/pizza">
          <OrderForm 
            formValues={formValues}
            change={change}
          />
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
