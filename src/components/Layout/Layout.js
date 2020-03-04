import React from 'react';
import styles from './Layout.module.css';

const Layout = props => (
    <>
        <div>Placeholder: Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </>
);

export default Layout;