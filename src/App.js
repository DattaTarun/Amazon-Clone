import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home.js';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import Payment from './Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders.js';

const promise=loadStripe('pk_test_51NTiVHSBfN5I5yfE0BuVYc8in5g5fweAvaUGLtFRE9gGVkWWTlIGHKC2Ak7Bw47Uybv1YvOkTuCaNuU32lxwKUPi00drdPuFeQ')



function App() {
  const[{},dispatch]=useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log('the user is ->', authUser)
      if(authUser){
        //user just logged in or was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        //user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
   <Router>
     <div className="App">
     <Routes>
     <Route path='/orders' element={<><Header /><Orders /></>}></Route>
     <Route path='/payment' element={<><Header /><Elements stripe={promise}><Payment /></Elements></>}></Route>
     <Route path='/login' element={<Login />}></Route>
     <Route path='/checkout' element={<><Header /><Checkout /></>}>
     </Route>
     <Route path='/' element={<><Header /><Home /></>}>
     </Route>

     </Routes>
    </div>
   </Router>
  );
}

export default App;
