import { useState, useEffect, useContext } from "react";
import products from "../assets/fake-data/products";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./Header.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../General.css';
import {CartCont} from './context';

const DisplayFood = (props) => {

  const {cart,setCart} = useContext(CartCont);

  const [savelater, setSaveLater] = useState([]);
  const [sndToCart, setSndToCart] = useState([]);


  const displayGetFood = props.passFood;

  const previousItmColord = (saveItm) => {
    saveItm.isSelected = !saveItm.isSelected;
    if(saveItm.isSelected){
      toast.success(<span><span className="Toaster-title">{saveItm.title} </span> - Item Saved!</span>,{
      })
    } else {
      toast.error(<span><span className="Toaster-title-removed">{saveItm.title} </span> - Item Removed</span>)
    }

    
    var checkDup = [...savelater];
    var newCheckDup = [];

    checkDup.map((eachItm) => {
      if (eachItm.id != saveItm.id) {
        setSaveLater([...savelater, saveItm]);
      } else {
        newCheckDup.push(saveItm);
      }
    });

    if (newCheckDup.length > 0) {
      var concItem = checkDup.concat(newCheckDup);
      const concId = concItem.map((eId) => eId.id);
      const filterDuplicate = concItem.filter(
        ({ id }, i) => !concId.includes(id, i + 1)
      );

      checkDup = [...filterDuplicate]
      setSaveLater(checkDup);
      localStorage.setItem("myItems", JSON.stringify([...filterDuplicate]));
    }

    if (newCheckDup == "") {
      localStorage.setItem("myItems", JSON.stringify([...savelater, saveItm]));
    }


    if(saveItm.isSelected == false){
      var checkLocLikedItm = JSON.parse(localStorage.getItem("myItems"))
      var removeLikedItm = checkLocLikedItm.filter((removeLike)=> removeLike.id != saveItm.id)
      setSaveLater(removeLikedItm);
      localStorage.setItem("myItems", JSON.stringify(removeLikedItm));
    }

    setSaveLater([...savelater, saveItm]);
  };



  useEffect(() => {

    setSaveLater(JSON.parse(localStorage.getItem("myItems")) || []);
    setSndToCart(JSON.parse(localStorage.getItem("sndToCart")) || []);

  }, []);



  return (
    <>
      <Container className="foodListContainer">
        
        {
        products
          .filter((food) => {
            if (displayGetFood === "") {
              return food;
            } else if (
              food.title.toLowerCase().includes(displayGetFood.toLowerCase())
            ) {
              return food;
            }
          })
          .map((foodItm, key) => {

            var updateLiked = JSON.parse(localStorage.getItem("myItems"))
            if(updateLiked != null) {
              updateLiked.filter((eachUp)=>{
                if(eachUp.id == foodItm.id){
                  foodItm.isSelected =  eachUp.isSelected
                }
              })
            }
            return (
              <Col sm={12} md={4}>
                <Card key={foodItm.id} className="cardLike-block">
                  <div onClick={() => previousItmColord(foodItm)}>
                    <ToastContainer 
                      position={"top-right"}
                      passOnFocusLoss={false}
                      toastStyle={{height:"10px"}}
                      autoClose={1700}                   
                    />
                  {
                   foodItm.isSelected ? <AiFillHeart className="heartLike" /> : <AiOutlineHeart className="heartLike" />
                  }
                  </div>
                  <Card.Img
                    variant="top"
                    src={foodItm.image01}
                    alt={foodItm.title}
                    className="foodsImg"
                  />
                  <Card.Body>
                    <Card.Title>{foodItm.title}</Card.Title>
                    <Card.Text>Category: {foodItm.category}</Card.Text>
                    <Card.Text>Price: ${foodItm.price}</Card.Text>
                    <Button variant="primary" key={foodItm.id}>
                      {
                        cart.includes(foodItm)?<a onClick={()=>{setCart(cart.filter((c)=>c.id !== foodItm.id))}}>Remove Cart</a>:<a onClick={()=>{setCart([...cart, foodItm])}}>Add To Cart</a>
                      }
  
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Container>
    </>
  );
};

export default DisplayFood;
