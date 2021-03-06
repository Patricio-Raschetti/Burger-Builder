import React from 'react';
import styles from './Logo.module.css';
import burgerLogo from '../../assets/images/logo.png';

const Logo = props => (
    <div className={styles.Logo}>
        <img src={burgerLogo} alt="BurgerApp" />
    </div>
);

export default Logo;