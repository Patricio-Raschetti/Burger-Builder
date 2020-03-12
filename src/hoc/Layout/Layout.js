import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import PropTypes from 'prop-types';

class Layout extends Component {
    state = { showSideDrawer: false };

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sideDrawerToggleHandler = () => {
        this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }))
    };

    render() {
        return (
            <>
                <Toolbar drawerToggler={this.sideDrawerToggleHandler} />
                <SideDrawer opened={this.state.showSideDrawer} close={this.sideDrawerCloseHandler} />
                <main className={styles.Content}>{this.props.children}</main>
            </>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.element.isRequired
}

export default Layout;