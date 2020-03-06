import React from 'react';
import styles from './NavBar.module.css';
import NavItem from './NavItem/NavItem';

const NavBar = props => (
    <nav>
        <ul className={styles.NavBar}>
            <NavItem link="/" active>Burger Builder</NavItem>
            <NavItem link="/">Checkout</NavItem>
        </ul>
    </nav>
);

export default NavBar;