import React from 'react'
import OrderForm from './OrderForm'
import Navbar from './Navbar'
import Thankyou from './Thankyou'

const App = () => {
  return (
    <>
      <Navbar />
      <h1>Lambda Eats</h1>
      <p>Delivering food to hungry coders</p>

      <OrderForm />
      <Thankyou />
    </>
  );
};
export default App;
