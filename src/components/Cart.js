import React, { useState, useEffect,useContext } from "react";
import "./Cart.css";
import { AiFillStar,AiOutlineStar } from "react-icons/ai";
import Badge from 'react-bootstrap/Badge';
import EmptyCart from './NoCartItems';
import {CartCont} from './context';

const Cart = (props) => {

  const {cart,setCart} = useContext(CartCont);

  const [isquantity, setQuantity] = useState(cart.quantity);
  const [totalCart, setTotalCart] = useState();


  const quantityChanger = (e) => {
    e.itm.quantity = e.value
    setQuantity(e.itm.quantity); 
  };



  useEffect(()=>{
    setTotalCart(cart.reduce((accum,cv)=>accum + (cv.price*cv.quantity),0))
  },[isquantity,cart])


  return (
    <div className="container cart-container-main">
      {cart.map((eachCartItm,key) => {

      let golden = [];
      for(var i = 0; i < eachCartItm.rating; i++) {
        golden.push(<AiFillStar className="Gold-star"/>)
      }
      let white = [];
      for(var i = 0; i < (5-eachCartItm.rating); i++) {
        white.push(<AiOutlineStar />)
      }

        return (
          <>
            <div className="Cart-Container-block" key={eachCartItm.id}>
              <div className="CartContainer">
                <div className="cart-item-block">
                  <div className="cart-img-block">
                    <img src={eachCartItm.image01} />
                  </div>
                  <div className="cart-content-block">
                    <h2>{eachCartItm.title}</h2>
                    <p>Category : <Badge bg="success">{eachCartItm.category}</Badge></p>
                    <p>{
                      golden
                    }{white.map((i)=><span> {i} </span>)}
                    </p>
                   
                    <h5 className="cart-price">${eachCartItm.price}</h5>
                     <div>
                      <select
                        className="select-container"
                        value={eachCartItm.quantity}
                        onChange={(e)=>{quantityChanger({
                            itm:eachCartItm,
                            value:e.target.value
                        })}}
                      >
                        <option value="1">
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                      <a className="btn btn-primary" onClick={()=>{setCart(cart.filter((c)=>c.id !== eachCartItm.id))}}>Remove</a>
                    </div>
                  </div>
                </div>
                <div className="cart-amt-block">
                  <h3>Price:${eachCartItm.quantity*eachCartItm.price}</h3>
                </div>
              </div>
            </div>
          </>
        );
      })}
      
      <div className="GrandTot">
        {
          Cart.length > 0 ?<h3>Grand Total: ${totalCart}</h3>:<EmptyCart/>
        }
        
      </div>
    </div>

  );
};

export default Cart;
