import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';
import PropTypes from 'prop-types';

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
            disabled={props.purchasable}
            onClick={props.ordered}
        >ORDER NOW</button>
    </div>
);

BuildControls.propTypes = {
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.object.isRequired,
    addIngredient: PropTypes.func.isRequired,
    removeIngredient: PropTypes.func.isRequired,
    disabled: PropTypes.object.isRequired,
    purchasable: PropTypes.bool.isRequired,
    ordered: PropTypes.func.isRequired
}

export default BuildControls;