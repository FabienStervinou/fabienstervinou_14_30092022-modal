import React, { useEffect } from "react";
import "./Modal.scss";

export interface ModalProps {
  title: string;
  text: string;
}

const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  const target = e.target as Element
  const modalTarget = target.closest('.modal') as HTMLElement | null;

  if (modalTarget) {
    modalTarget.style.display = 'none'
  }
};

const Modal = (props: ModalProps) => {
  return (
    <div className='modal'>
      <div className="modalContainer">
      <div className="modalContent">
        <button className="modalContent-close" onClick={closeModal}>
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
    </div>
  )
};

export default Modal;