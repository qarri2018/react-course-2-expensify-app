import React from 'react';
import Modal from 'react-modal';

const RemoveExpenseModal = (props) => (

    <Modal
        className="modal"
        contentLabel="Remove Confirmation"
        onRequestClose={props.onRemove}
        isOpen={props.showModal}
        closeTimeoutMS={200}
    >
        <h3 className="modal-title">Are you sure?</h3>
        <div className="modal__body">
            <button className="button remove-expense-modal__button-yes" onClick={props.onRemove}>Yes</button>
            <button className="button button--secondary remove-expense-modal__button-no" onClick={props.hideModal}>No</button>
        </div>


    </Modal>

);

export default RemoveExpenseModal;