import React from 'react';
import styles from './Toolbar.module.css';

const Toolbar = props => (
    <header className={styles.Toolbar}>
        <div>Logo</div>
        <div>Menu button</div>
        <nav>
            ...
        </nav>
    </header>
);

export default Toolbar;