import React from "react";
import Modal from "react-modal";

const CustomModal = ({ isOpen, closeModal, title, onSubmit, children }) => {
  const customStyles = {
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark gray color with transparency
      },
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={title}
      style={customStyles}
      className="custom-modal"
    >
      <div className="d-flex justify-content-between">
        <h2 className="modal-title">{title}</h2>
        <button className="close-btn font-bold" onClick={closeModal}>X</button>
      </div>
      

      <form onSubmit={onSubmit} className="modal-form my-3">
        {children}
        <div className="modal-buttons my-3">
          <button className="btn btn-prime mr-4" type="submit">
            Submit
          </button>
          <button className="btn btn-secondary" onClick={closeModal}>
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CustomModal;
