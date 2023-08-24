import React from 'react'
import './checkoutproduct.css'
import { useStateValue } from './StateProvider'
import reducer from './reducer'

function CheckoutProduct({id,image,title,price,rating,hidebutton}) {
  const[{basket},dispath]=useStateValue()
  const removefrombasket=()=>{
    dispath({
      type:'Remove_From_Basket',
      id:id
    })
  }
  return (
    <div className='checkoutproduct'>
      <img className='checkoutproduct_image' src={image} />
      <div className='checkoutproduct_info'>
        <p className='checkoutproduct_title'>{title}</p>
        <p className='checkoutproduct_price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className='checkoutproduct_rating'>
            {Array(rating)
            .fill()
            .map((_,i)=>(
                <p>⭐️</p>
            ))
            }
        </div>
        {!hidebutton && <button onClick={removefrombasket}>Remove from Basket</button>}
        
      </div>
    </div>
  )
}

export default CheckoutProduct
