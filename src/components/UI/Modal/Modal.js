import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import PropTypes from 'prop-types';

const Modal = props => (
    <>
        <Backdrop
            show={props.show}
            clicked={props.modalClosed}
        />
        <div
            className={styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? 1 : 0
            }}
        >
            {props.children}
        </div>
    </>
);

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    modelClosed: PropTypes.func,
    children: PropTypes.element.isRequired
}

export default Modal;