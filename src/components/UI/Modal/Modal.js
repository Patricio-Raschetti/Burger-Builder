import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import PropTypes from 'prop-types';

const showOrChildrenAreEqual = (prev, next) => {
    return prev.show === next.show && prev.children === next.children;
}

const Modal = props => {
    // useEffect(() => {
    //     console.log('Modal rendered');
    // });

    return (
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
};

Modal.propTypes = {
    modelClosed: PropTypes.func
}

export default React.memo(Modal, showOrChildrenAreEqual);