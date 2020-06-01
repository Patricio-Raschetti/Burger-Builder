import React, { Component } from 'react';

import axios from '../../axios-orders';

import BurgerPreview from '../../components/Burger/BurgerPreview/BurgerPreview';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';


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
        totalPrice: 4,          // I should calculate the price inside of the server and not in the front-end.
        purchasable: false,
        purchasing: false,
        loading: false
    };

    updatePurchaseState() {
        const isPurchasable = Object.values(this.state.ingredients).some(value => value > 0);
        // if (this.state.purchasable === isPurchasable) {
        //     return null;
        // };
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

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    };

    purchaseContinueHandler = () => {
        this.setState({ loading: true });

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,            // Remember to calculate the price in the server for a real app.
            customer: {                             // Dummy data just to create the Firebase Collection.
                name: 'Dummy Customer',
                address: {
                    street: 'Teststreet 123',
                    zipCode: '4567',
                    country: 'Dummyland'
                },
                email: 'dummyemail@testing.com'
            },
            deliveryMethod: 'fatest'
        }

        axios.post('/orders.json', order)
            .then(response => this.setState({ loading: false, purchasing: false }))
            .catch(error => this.setState({ loading: false, purchasing: false }));
    };

    render() {
        // Disable 'Less' btns logic.
        const disabledInfo = { ...this.state.ingredients };
        for (const ingredient in disabledInfo) {
            disabledInfo[ingredient] = disabledInfo[ingredient] <= 0;
        };

        // Render the Modal content (OrderSummary or Spinner)
        let orderSummary = <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
        />

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <>
                <BurgerPreview ingredients={this.state.ingredients} />
                <BuildControls
                    ingredients={this.state.ingredients}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={!this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                />
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                >
                    {orderSummary}
                </Modal>
            </>
        );
    };
};

export default BurgerBuilder;