import React, { useState, useEffect,useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import "./Modal.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import {CartCont} from './context';

const SpecificFoodModal = (props) => {
  
  const {cart,setCart} = useContext(CartCont);

  const [increaseq, setIncreaseq] = useState(0);
  const [largeincreaseq, setLargeIncreaseq] = useState(0);
  const [currentImg, setCurrentImg] = useState(props.getPrd.itm.image01);
  const [isActive, setIsActive] = useState("one");

  const increaseHandler = () => {
    setIncreaseq(increaseq + 1);
  };

  const decreaseHandler = () => {
    if (increaseq < 1) {
      return;
    }
    setIncreaseq(increaseq - 1);
  };

  const largeIncreaseHandler = () => {
    setLargeIncreaseq(largeincreaseq + 1);
  };

  const largeDecreaseHandler = () => {
    if (largeincreaseq < 1) {
      return;
    }
    setLargeIncreaseq(largeincreaseq - 1);
  };

  var smallQ = increaseq * 20;
  var largeQ = largeincreaseq * 40;
  var subTotNew = smallQ + largeQ;
  var discount = 15.5;
  var GrandtotNew;

  if (subTotNew <= 0) {
    discount = 0;
    GrandtotNew = 0;
  } else {
    GrandtotNew = subTotNew + discount;
  }

  var modStat = props.getPrd.mod;
  var checkedItms = props.getPrd.itm;

  const imageOne = (reciveImg1, id) => {
    setCurrentImg(reciveImg1);

    if (id === "one") {
      setIsActive("one");
    } else if (id === "two") {
      setIsActive("two");
    } else {
      setIsActive("three");
    }
  };


  return (
    <Modal
      show={modStat}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className="CustomModal"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="selectedTit">
          {checkedItms.title}
        </Modal.Title>
        <GrClose className="modalHeadClose" onClick={props.onHide} />
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col sm={12} md={7}>
              <div className="selectedContentContainer">
                <div className="selectedContentBlock">
                  <img src={currentImg} className="selectedImg" />
                </div>
              </div>
              <Row>
                <div className="chooseImageContainer">
                  <div className="image-block">
                    <img
                      src={checkedItms.image01}
                      className={isActive === "one" ? "changeBorderColor" : ""}
                      onClick={(e) => {
                        imageOne(checkedItms.image01, "one");
                      }}
                    />
                  </div>
                  <div className="image-block">
                    <img
                      src={checkedItms.image02}
                      className={isActive === "two" ? "changeBorderColor" : ""}
                      onClick={(e) => {
                        imageOne(checkedItms.image02, "two");
                      }}
                    />
                  </div>
                  <div className="image-block">
                    <img
                      src={checkedItms.image03}
                      className={
                        isActive === "three" ? "changeBorderColor" : ""
                      }
                      onClick={(e) => {
                        imageOne(checkedItms.image03, "three");
                      }}
                    />
                  </div>
                </div>
              </Row>
              <p className="selectedPara">{checkedItms.desc}</p>
            </Col>
            <Col sm={12} md={5}>
              <div className="tot-block">
                <h4>Quantity</h4>
                <div className="size-block">
                  <div className="small-block-container">
                    <div className="small-block">
                      <h5>Small</h5>
                      <p>${smallQ}</p>
                    </div>
                    <div className="icon-block">
                      <FaMinus
                        className="decreaseIcon"
                        onClick={decreaseHandler}
                      />
                      <span className="icon-block-span">{increaseq}</span>
                      <FaPlus
                        className="increaseIcon"
                        onClick={increaseHandler}
                      />
                    </div>
                  </div>
                  <div className="large-block-container">
                    <div className="large-block">
                      <h5>Large</h5>
                      <p>${largeQ}</p>
                    </div>
                    <div className="icon-block">
                      <FaMinus
                        className="decreaseIcon"
                        onClick={largeDecreaseHandler}
                      />

                      <span className="icon-block-span">{largeincreaseq}</span>
                      <FaPlus
                        className="increaseIcon"
                        onClick={largeIncreaseHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="Grand-tot-block">
                <div className="subtot-block">
                  <h5>Sub Total</h5>
                  <h5>${subTotNew}</h5>
                </div>
                <div className="tax-block">
                  <h5>Tax</h5>
                  <h5>${discount}</h5>
                </div>
                <div className="GrandTotal-block">
                  <h5>Grand Total</h5>
                  <h5>${GrandtotNew}</h5>
                </div>
              </div>
              <div className="Adc-modal">
              {
                cart.includes(checkedItms)?<a className="btn btn-primary" onClick={()=>{setCart(cart.filter((c)=>c.id !== checkedItms.id))}}>Remove Cart</a>:<a className="btn btn-primary" onClick={()=>{setCart([...cart, checkedItms])}}>Add To Cart</a>
              }
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SpecificFoodModal;
