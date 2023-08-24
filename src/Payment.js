import React, { useEffect } from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import './payment.css'
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';
import axios from './axios';
import { useNavigate } from 'react-router-dom';
import Orders from './Orders'
import { db } from './firebase';

function Payment() {
    const Navigate=useNavigate();
    const[{basket,user},dispatch]=useStateValue();
    const [error,seterror]=useState(null);
    const [disabled,setdisabled]=useState(true);
    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState('');
    const [clientSecret,setClientSecret]=useState(true);
    const stripe=useStripe();
    const elements=useElements();
    
    useEffect(()=>{
        const getClientSecret=async ()=>{
            const response =await axios({
                method:'post',
                url:`/payments/create?total=${getBasketTotal(basket)*100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])
    console.log('The secret key is',clientSecret);
    const handlesubmit=async(e)=>{
        e.preventDefault();
        setProcessing(true);
        const payload= await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket:basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            })


            setSucceeded(true)
            seterror(null)
            setProcessing(false)
            dispatch({
                type:'EMPTY_BASKET'
            })
            Navigate('/orders',{replace:true})
        })
    }
    const handlechange=e=>{
        setdisabled(e.empty);
        seterror(e.error?e.error.message:'')
    }
  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout(<Link to='/Checkout'>{basket.length} items</Link>)
            </h1>
        {/* delivery Address*/}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Delhi</p>
                </div>
            </div>
        {/*review items*/}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment_items'>
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
        {/*paymentmethod*/}
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                    <form onSubmit={handlesubmit}>
                        <CardElement onChange={handlechange}></CardElement>
                        <div className='payment_pricecontainer'>
                        <CurrencyFormat 
                            renderText={(value)=>(
                                <h3>Order Total:{value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'₹'}
                        />
                        <button disabled={processing||disabled||succeeded} >
                            <span>{processing?<p>Processing</p>:'Buy Now'}</span>
                        </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment
