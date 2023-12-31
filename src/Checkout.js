import React from 'react'
import './checkout.css'
import Subtotal from './Subtotal.js'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <div >
            <h3>Hello, {user?.email}</h3>
            <h2 className='checkout_title'>Your Shopping Cart</h2>
            {basket.map(item=>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))}
        </div>
      </div>
      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
