import React from 'react';

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
            <p>Continue to Checkout?</p>
        </>
    );
};

export default OrderSummary; 