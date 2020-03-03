import React from 'react';
import styles from './BuildControl.module.css';

const BuildControl = props => (
    <div className={styles.BuildControl}>
        <label className={styles.Label}>{props.label}</label>
        <button
            className={styles.Less}
            onClick={props.removed}
            disabled={props.disabled}
        >
            Less
        </button>
        <button
            className={styles.More}
            onClick={props.added}
        >
            More
        </button>
    </div>
);

export default BuildControl;