import React, { Component } from 'react';
import BurgerPreview from '../../components/Burger/BurgerPreview/BurgerPreview';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    };

    addIngredientHandler = type => {
        this.setState(prevState => {
            return {
                ingredients: {
                    ...prevState.ingredients,
                    [type]: ++prevState.ingredients[type]
                },
                totalPrice: parseFloat((prevState.totalPrice + INGREDIENT_PRICES[type]).toFixed(2))
            };
        });
    };

    removeIngredientHandler = type => {
        if (this.state.ingredients[type] <= 0) {
            return;
        };

        this.setState(prevState => {
            return {
                ingredients: {
                    ...prevState.ingredients,
                    [type]: --prevState.ingredients[type]
                },
                totalPrice: parseFloat((prevState.totalPrice - INGREDIENT_PRICES[type]).toFixed(2))
            };
        });
    };

    render() {
        // Disable 'Less' btns logic.
        const disabledInfo = { ...this.state.ingredients };
        for (const ingredient in disabledInfo) {
            disabledInfo[ingredient] = disabledInfo[ingredient] <= 0;
        };

        return (
            <>
                <BurgerPreview ingredients={this.state.ingredients} />
                <BuildControls
                    ingredients={this.state.ingredients}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                />
            </>
        );
    };
};

export default BurgerBuilder;