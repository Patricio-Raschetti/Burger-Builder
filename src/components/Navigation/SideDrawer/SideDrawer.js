import React from 'react';
import Logo from '../../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import styles from './SideDrawer.module.css';

const SideDrawer = props => {

    return (
        <div className={styles.SideDrawer}>
            <div className={styles.Logo}>
                <Logo />
            </div>
            <nav>
                <NavBar />
            </nav>
        </div>
    );
};

export default SideDrawer;