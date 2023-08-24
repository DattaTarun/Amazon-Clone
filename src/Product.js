import React from 'react'
import './product.css'
import { useStateValue } from './StateProvider'
import reducer from './reducer'

function Product({id,title,image,price,rating}) {
  const [{basket},dispatch]=useStateValue()
  const addtobasket=()=>{
    dispatch({
      type:'Add_to_Basket',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
      }
    })
  }
  return (
    <div className='product'>
      <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating)
          .fill()
          .map((_,i)=>(
            <p>⭐️</p>
          ))
          }
        </div>
      </div>
      <img src={image}></img>
      <button onClick={addtobasket}>Add to Basket</button>
    </div>
  )
}

export default Product
