import React from 'react';
import styles from './NavBar.module.css';
import NavItem from '../NavItem/NavItem';

const NavBar = props => (
    <ul className={styles.NavBar}>
        <NavItem link="/" active>Burger Builder</NavItem>
        <NavItem link="/">Checkout</NavItem>
    </ul>
);

export default NavBar;