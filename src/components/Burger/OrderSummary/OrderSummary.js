import React from 'react';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .filter(ingredient => props.ingredients[ingredient] > 0)
        .map(ingredient => {
            return (
                <li key={ingredient}>
                    <span style={{ textTransform: "capitalize" }}>{ingredient}</span>: x{props.ingredients[ingredient]}
                </li>
            );
        });

    return (
        <>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button
                btnType='Danger'
                clicked={props.purchaseCancelled}
            >CANCEL
            </Button>
            <Button
                btnType='Success'
                clicked={props.purchaseContinued}
            >CONTINUE
            </Button>
        </>
    );
};

OrderSummary.propTypes = {
    ingredients: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    purchaseCancelled: PropTypes.func.isRequired,
    purchaseContinued: PropTypes.func.isRequired
}

export default OrderSummary; 