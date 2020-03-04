import React, { Component } from 'react';
import BurgerPreview from '../../components/Burger/BurgerPreview/BurgerPreview';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';


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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    updatePurchaseState() {
        const isPurchasable = Object.values(this.state.ingredients).some(value => value > 0);
        this.setState({ purchasable: isPurchasable });
    };

    addIngredientHandler = type => {
        this.setState(prevState => {
            return {
                ingredients: {
                    ...prevState.ingredients,
                    [type]: prevState.ingredients[type] + 1
                },
                totalPrice: +((prevState.totalPrice + INGREDIENT_PRICES[type]).toFixed(2))
            };
        }, this.updatePurchaseState);
    };

    removeIngredientHandler = type => {
        if (this.state.ingredients[type] <= 0) {
            return;
        };
        this.setState(prevState => {
            return {
                ingredients: {
                    ...prevState.ingredients,
                    [type]: prevState.ingredients[type] - 1
                },
                totalPrice: +((prevState.totalPrice - INGREDIENT_PRICES[type]).toFixed(2))
            };
        }, this.updatePurchaseState);
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
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
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                />
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
            </>
        );
    };
};

export default BurgerBuilder;