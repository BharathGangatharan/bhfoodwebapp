import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { FaArrowCircleUp } from "react-icons/fa";
import './Modal.css';



const ScrollT = () => {

    const[visible,setVisible] = useState(false);
      
    useEffect(()=>{
      window.addEventListener('scroll',function(){
        if(this.window.scrollY > 300) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      })
    })
    const scrollTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    }

    return (
      <>
        {visible && (
          <div className="bottomtotop">
            <FaArrowCircleUp className="bottomtotopicon" onClick={scrollTop} />
          </div>
        )}
      </>
    );
}

export default ScrollT;
