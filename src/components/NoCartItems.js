import React from 'react';
import { Link } from 'react-router-dom';
import '../General.css';
import CartImage from '../assets/images/empty-cart-illustration-thumbnail.png'

const NoCartItems = () => {
    return (
        <div class="Empty-Cart-container">
            <h1>Your Cart is Empty!</h1>
            <img src={CartImage}/>
            <Link to='/foods'>Tap To Add Items</Link>
        </div>
    )
}

export default NoCartItems
