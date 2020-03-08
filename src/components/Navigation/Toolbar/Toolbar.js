import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavBar from '../NavBar/NavBar';

const Toolbar = props => (
    <header className={styles.Toolbar}>
        <div className={styles.Logo}>
            <Logo />
        </div>
        <div>Menu</div>
        <nav className={styles.DesktopOnly}>
            <NavBar />
        </nav>
    </header>
);

export default Toolbar;