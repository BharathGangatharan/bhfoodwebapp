import React from 'react';
import './Home.css';
import EmptyPic from '../assets/images/empty-pizza2.png';
import { Link } from 'react-router-dom';

const EmptyItem = () => {
    return (
        <div className="no-item">
            <div className="no-item-img-block"> 
                <img src={EmptyPic} className="no-saved-itms"/>
                <h3>No Saved Items</h3>
            </div>

            <div className="go-to-food">
                <Link to="/foods"><h5>Click to save</h5></Link>
            </div>
        </div>
    )
}

export default EmptyItem;
