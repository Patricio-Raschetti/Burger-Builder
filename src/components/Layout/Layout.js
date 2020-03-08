import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = { showSideDrawer: true };

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    render() {
        return (
            <>
                <Toolbar />
                <SideDrawer opened={this.state.showSideDrawer} close={this.sideDrawerCloseHandler} />
                <main className={styles.Content}>{this.props.children}</main>
            </>
        );
    }
}

export default Layout;