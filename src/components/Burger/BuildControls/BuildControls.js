import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const BuildControls = props => (
    <div className={styles.BuildControls}>
        {Object.keys(props.ingredients).map(ingredient => {
            const capitalizedIngredient = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
            return <BuildControl
                key={capitalizedIngredient}
                label={capitalizedIngredient}
                added={props.addIngredient.bind(null, ingredient)}
            />
        })}
    </div>
);

export default BuildControls;