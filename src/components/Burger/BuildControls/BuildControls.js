import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const BuildControls = props => (
    <div className={styles.BuildControls}>
        <BuildControl />
        <BuildControl />
    </div>
);

export default BuildControls;