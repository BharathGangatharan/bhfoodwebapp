import React from 'react';
import ReactDom from 'react-dom';

const ModalOverlay = (props)=> {
    return (
        <div>
            {props.children}
        </div>
    )
}

const modalOverlayId= document.getElementById('overlay');

const MainModal = (props) => {
    return (
        <React.Fragment>
            {
                ReactDom.createPortal(
                    <ModalOverlay>{props.children}</ModalOverlay>,
                    modalOverlayId
                )
            }
        </React.Fragment>
    )
}

export default MainModal;
