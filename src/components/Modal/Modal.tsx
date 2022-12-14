import React from "react";
import ReactDOM from "react-dom";
import "./Modal.scss";

export interface ModalProps {
  title: string;
  text: string;
  isVisible: Boolean;
  target: Element | DocumentFragment;
  hide: () => void;
}

const Modal = (props: ModalProps) => {
  return (
    props.isVisible === true 
    ? ReactDOM.createPortal(
        <div className={`modal ${props.isVisible === true ? " isVisible" : ""}`} aria-modal="true" role="dialog" aria-label="Interactive modal" tabIndex={-1}>
          <div className="modalContainer">
            <div className="modalContent">
              <button className="modalContent-close" onClick={props.hide} tabIndex={1}>
                &#9587;
              </button>
              <div className="modalContent-title">
                {props.title}
              </div>
              <div className="modalContent-text">
                {props.text}
              </div>
            </div>
          </div>
        </div>,
        props.target ? props.target : document.body
      )
    : null
  )
};

export default Modal;
