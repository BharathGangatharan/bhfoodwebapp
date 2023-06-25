import React from 'react';
import Pizza from '../assets/images/pizzaBanner.jpg';
import './Home.css';

const PizzaBanner = () => {
    return (
        <div className="pizzaBannerContainer">
            <img src={Pizza} />
            <div className="heading">
                <h1><sup>"</sup>Life is not about<br/> finding yourself.<br/>It's about finding <span className="pizza-head-change">Pizza</span><sup>"</sup></h1>
            </div>
        </div>
    )
}

export default PizzaBanner;
