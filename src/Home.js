import React from 'react'
import {
    Link 
  } from "react-router-dom"
  import OrderForm from './OrderForm'

export default function Home(props){
    return(
        <div id="home">
            <h1>Lambda Eats</h1>
            <p>Delivering food to hungry coders</p>

            <Link to="/pizza">
                <button>Order Now</button>
            </Link>

        </div>
    )
}