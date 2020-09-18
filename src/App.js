import React, { useState, useEffect } from 'react'
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
import Axios from 'axios'


  //-----------------------------------//
  //         Initial Values            //
  //-----------------------------------//
const initialFormValues = 
{
  name:'',
  pizzaSize:'',
  // toppings:{
    cheese:false,
    pepperoni:false,
    mushrooms:false,
    pineapple:false,
    canadianBacon:false,
    jalapenos:false,
  // },
  instructions:'',
}

const initialOrders=[]
const initialDisabled=true

const initialFormErrors = 
{
  name:'',
  pizzaSize:'',
  toppings:'',
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

  const  postNewOrder= newOrder => {

    Axios.post('https://reqres.in/api/pizza',newOrder)
      .then(res => {
        //console.log(res.data)
        setOrders([...orders, res.data])

      })

      .catch(err => {
        debugger
        console.log("Axios Error:",err)
      })
      .finally(()=>{
        setFormValues(initialFormValues)
        // document.getElementById("orderForm").reset()
        // console.log('User submitted the form:', newOrder)
        console.log("Pizza Orders: ",orders)
      })

  }

  const validate = (name, value) => {
    yup
      //schema needs to be linked
      .reach(schema, name)

      //this is the yup validate function
      //not referring to one of my funtions
      .validate(value)

      //clears errros from formErrors state if valid
      .then(valid => {
        setFormErrors({...formErrors, [name]: ""})
      })

      //sets errors to formErrors state
      .catch(err => {
        setFormErrors({...formErrors,[name]: err.errors[0]})
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
      // toppings:{
        cheese:formValues.cheese,
        pepperoni:formValues.pepperoni,
        mushrooms:formValues.mushrooms,
        pineapple:formValues.pineapple,
        canadianBacon:formValues.canadianBacon,
        jalapenos:formValues.jalapenos,
      // },
      instructions:formValues.instructions.trim(),
    }

    //test submit
    // console.log('User submitted the form:', newOrder)

    //Update completed order to state
    //[!] remove this if posting to server
    // setOrders([...orders,newOrder])
    postNewOrder(newOrder)
  }

  //-----------------------------------//
  //          Side Effects             //
  //-----------------------------------//

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])


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
            formErrors={formErrors}
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
