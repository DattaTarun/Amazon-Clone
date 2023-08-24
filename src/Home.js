import React from 'react'
import './home.css'
import Product from './Product.js'
function Home() {
  return (
    <div className='home'>
    <div className='home_container'>
      <img className='home_image' src='https://m.media-amazon.com/images/I/71BSVVriQnL._SX3000_.jpg' alt=''></img>
      <div className='home_row'>
        <Product 
          id={1}
          title={'The lean startup'}
          image={'https://m.media-amazon.com/images/I/81vvgZqCskL.jpg'}
          price={499}
          rating={5}
        />
        <Product 
          id={2}
          title={'Samsung 138 cm (55 inches) Crystal iSmart 4K Ultra HD Smart LED TV UA55CUE60AKLXL (Black)'}
          image={'https://m.media-amazon.com/images/I/81+JXgPUDLL._SL1500_.jpg'}
          price={45990}
          rating={4}
        />
        
      </div>
      <div className='home_row'>
      <Product 
        id={3}
        title={'Apple iPhone 14 (128 GB) - Starlight'}
        image={'https://m.media-amazon.com/images/I/618Bb+QzCmL._SL1500_.jpg'}
        price={70999}
        rating={4}
      />
      <Product 
        id={4}
        title={'Oppo Enco Air3 Pro True Wireless in Ear Earbuds with Industry First Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra Low Latency,Fast Charge,BT 5.3 (White)'}
        image={'https://m.media-amazon.com/images/I/61hORBvpEzL._SL1500_.jpg'}
        price={4999}
        rating={3}
      />
      <Product 
        id={5}
        title={'Apple Watch SE (2nd Gen) [GPS 44 mm] Smart Watch w/Starlight Aluminium Case & Starllight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant'}
        image={'https://m.media-amazon.com/images/I/71XBcl6bNjL._SL1500_.jpg'}
        price={32900}
        rating={5}
      />
      </div>
      <div className='home_row'>
      <Product 
        id={1}
        title={'The lean startupSony SA-D40 4.1 Channel Multimedia Speaker System with Bluetooth (Black)'}
        image={'https://m.media-amazon.com/images/I/61EW1LZ2NHL._SL1282_.jpg'}
        price={10490}
        rating={4}
      />
      </div>
    </div>
    </div>
  )
}

export default Home
