import React from 'react';
import {Link} from 'react-router-dom';
import '../General.css';
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
    return (
        <section className="footer-container">
            <div className="footer-header"><h2>The Pizza Castle</h2></div>
            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/foods">Foods</Link>
                <Link to="/save-Later">Wish List</Link>
                <Link to="/personal-details">Profile</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/Contact">Contact</Link>
            </div>
            <div className="footer-bottom"><h5>Designed by Bharath<span><AiFillHeart /></span></h5></div>
        </section>
    )
}

export default Footer;
