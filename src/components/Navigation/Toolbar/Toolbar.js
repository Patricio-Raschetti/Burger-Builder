import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = props => (
    <header className={styles.Toolbar}>
        <div className={styles.Logo}>
            <Logo />
        </div>
        <DrawerToggle clicked={props.drawerToggler} />
        <nav className={styles.DesktopOnly}>
            <NavBar />
        </nav>
    </header>
);

export default Toolbar;