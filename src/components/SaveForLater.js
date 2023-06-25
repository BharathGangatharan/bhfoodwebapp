import React,{useState,useEffect,useContext} from 'react';
import './saveForLater.css';
import {CartCont} from './context';

const SaveForLater = () => {
    const {cart,setCart} = useContext(CartCont);

    const [finalSave, setFinalSave] = useState([]);
    
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('myItems')) == '[]'){
            localStorage.removeItem('myItems')
        } else {
            setFinalSave(JSON.parse(localStorage.getItem('myItems')) || []);
        }
      }, []);

    return (
        <>
        <h1 className="savedHeader">Saved Items</h1>
        {
            finalSave.map((eachOne,key)=> (
                <div className="savedItmBlockContainer" key={eachOne.id}>
                    <div className="savedItmBlock">
                        <div className="savedItmImgBlock">
                            <img src={eachOne.image01} className="savedImg" />
                        </div>
                        <div className="savedDesc"> 
                            <h2>{eachOne.title}</h2>
                            <p>{eachOne.desc}</p>
                            <h5 className="category">{eachOne.category}</h5>
                            <p className="price">${eachOne.price}</p>
                            {
                                cart.includes(eachOne)?<a className="btn btn-primary" onClick={()=>{setCart(cart.filter((c)=>c.id !== eachOne.id))}}>Remove from Cart</a>:<a className="btn btn-primary" onClick={()=>{setCart([...cart, eachOne])}}>Add To Cart</a>
                            }
                        </div>       
                    </div>
                </div>
            ))
        }
        </>
    )
}

export default SaveForLater;
