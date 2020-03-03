import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const BuildControls = props => (
    <div className={styles.BuildControls}>
        <p>Current price: <strong>${props.price}</strong></p>
        {Object.keys(props.ingredients).map(ingredient => {
            const capitalizedIngredient = ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
            return <BuildControl
                key={capitalizedIngredient}
                label={capitalizedIngredient}
                added={props.addIngredient.bind(null, ingredient)}
                removed={props.removeIngredient.bind(null, ingredient)}
                disabled={props.disabled[ingredient]}
            />
        })}
        <button
            className={styles.OrderButton}
            disabled={!props.purchasable}
        >ORDER NOW</button>
    </div>
);

export default BuildControls;