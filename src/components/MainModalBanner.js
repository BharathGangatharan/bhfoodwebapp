import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { GrClose } from "react-icons/gr";
import ModalImg from '../assets/images/pizzzaSearchBg.jpg'
import './Modal.css'


const MainModalBanner = (props) => {

    return (
        <>
        <Modal show={props.setVisibleModal} className="MainModalContainer" size="lg" centered>
        <GrClose className="modalHeadClose" onClick={props.closeVisibleModal}/>
        <Modal.Body>
          <img src={ModalImg}/>
          <div className="content-wrapper">
            <h1>Perfect <span className="h1-red">Slice..!</span></h1>
            <div>
              <h2>Perfect <span className="h1-red">Price!!</span></h2>
            </div>
          </div>
        </Modal.Body>
      </Modal>
        </>
    )
}

export default MainModalBanner;
