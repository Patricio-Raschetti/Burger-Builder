import React from 'react';
import styles from './NavItem.module.css';
import PropTypes from 'prop-types';

const NavItem = props => (
    <li className={styles.NavItem}>
        <a href={props.link} className={props.active ? styles.active : null}>{props.children}</a>
    </li>
);

NavItem.propTypes = {
    active: PropTypes.bool,
    link: PropTypes.string.isRequired,
}

export default NavItem;
