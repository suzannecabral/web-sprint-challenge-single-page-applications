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
import * as yup from 'yup'
import schema from './formSchema'


  //-----------------------------------//
  //         Initial Values            //
  //-----------------------------------//
const initialFormValues = 
{
  name:'',
  pizzaSize:'Small',
  cheeseTopping:false,
  pepperoniTopping:false,
  mushroomsTopping:false,
  pineappleTopping:false,
  canadianBaconTopping:false,
  jalapenosTopping:false,
  instructions:'',
}

const initialOrders=[]
const initialDisabled=true

const initialFormErrors = 
{
  name:'',
  pizzaSize:'',
  cheeseTopping:'',
  pepperoniTopping:'',
  mushroomsTopping:'',
  pineappleTopping:'',
  canadianBaconTopping:'',
  jalapenosTopping:'',
  instructions:'',
}

const App = () => {
  //-----------------------------------//
  //         States                    //
  //-----------------------------------//
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ orders, setOrders ] = useState(initialOrders)
  const [ disabled, setDisabled ] = useState(initialDisabled)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)

  //-----------------------------------//
  //          Helpers                  //
  //-----------------------------------//

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({...formErrors, [name]: ""})
      })
      .catch(err => {
        // debugger
        setFormErrors({...formErrors,[name]: err.errors[0]})
        // console.log(err)
      })
  }

  //-----------------------------------//
  //          Event Handlers           //
  //-----------------------------------//

  const change = (name, value) => {

    //validate
    validate(name,value)

    //send to formValues state
    setFormValues({...formValues, [name]:value})
  }

  const submit = () => {

    //gather validated order info
    //and trim whitespace
    const newOrder = {
      name:formValues.name.trim(),
      pizzaSize:formValues.pizzaSize,
      cheeseTopping:formValues.cheeseTopping,
      pepperoniTopping:formValues.pepperoniTopping,
      mushroomsTopping:formValues.mushroomsTopping,
      pineappleTopping:formValues.pineappleTopping,
      canadianBaconTopping:formValues.canadianBaconTopping,
      jalapenosTopping:formValues.jalapenosTopping,
      instructions:formValues.instructions.trim(),
    }

    //test submit
    console.log('User submitted the form:', newOrder)

    //Update completed order to state
    //[!] remove this if posting to server
    setOrders([...orders,newOrder])

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
            orders={orders}
            submit={submit}
            disabled={disabled}
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
