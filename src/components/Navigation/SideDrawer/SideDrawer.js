import React from 'react';
import Logo from '../../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './SideDrawer.module.css';

const SideDrawer = props => (
    <>
        <Backdrop show={props.opened} clicked={props.close} />
        <div className={`${styles.SideDrawer} ${props.opened ? styles.Open : styles.Close}`}>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav>
                <NavBar />
            </nav>
        </div>
    </>
);

export default SideDrawer;