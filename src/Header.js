import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Header() {
    const [{basket,user},dispatch]=useStateValue();
    const handleAuthentication=()=>{
        if(user){
            auth.signOut();
        }
        else{

        }
    }
  return (
    <div className='header'>
    <Link to='/'>
    <img  className='header_logo'
    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'></img>
    </Link>
    <div className='header_search'>
    <input className='header_searchinput' type='text'></input>
    <SearchIcon className='header_searchicon' />
    </div>
    <div className='header_nav'>
    <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className='header_option'>
        <span className='header_optionlineone'>
            {user ? `Hello ${user.email} `: 'Hello Guest'}
        </span>
        <span className='header_optionlinetwo'>
            {user ? 'Sign Out' : 'Sign In'} 
        </span>
        </div>
    </Link>
    <Link to='/orders'>
    <div className='header_option'>
    <span className='header_optionlineone'>
        Returns
    </span>
    <span className='header_optionlinetwo'>
        &orders
    </span>
    </div>
    </Link>
    <div className='header_option'>
    <span className='header_optionlineone'>
        Your
    </span>
    <span className='header_optionlinetwo'>
        Prime
    </span>
    </div>
    <Link to='/checkout'>
    <div className='header_optionbasket'>
    <ShoppingCartIcon />
    <span className='header_basketcount header_optionlinetwo'>{basket?.length}</span>
    </div>
    </Link>
    

    </div>
    </div>
  )
}

export default Header
