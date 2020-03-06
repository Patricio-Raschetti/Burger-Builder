import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavBar from '../NavBar/NavBar';

const Toolbar = props => (
    <header className={styles.Toolbar}>
        <div>Menu</div>
        <Logo />
        <NavBar />
    </header>
);

export default Toolbar;