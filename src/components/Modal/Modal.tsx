import React from "react";
import "./Modal.scss";

export interface ModalProps {
  title: string;
  text: string;
  isVisible: Boolean;
}

const closeModal = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  const target = e.target as Element
  const modalTarget = target.closest('.modal') as HTMLElement | null;

  if (modalTarget) {
    modalTarget.classList.remove('isVisible')
  }
};

export const Modal = (props: ModalProps) => {
  return (
    <div className={`modal ${props.isVisible ? " isVisible" : ""}`} aria-modal="true" role="dialog" aria-label="Interactive modal" tabIndex={-1}>
      <div className="modalContainer">
        <div className="modalContent">
          <button className="modalContent-close" onClick={closeModal} tabIndex={1}>
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
