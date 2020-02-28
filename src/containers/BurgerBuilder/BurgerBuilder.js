import React, { Component } from 'react';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';

class BurgerBuilder extends Component {

    render() {
        return (
            <>
                <BurgerIngredient type='bread-top' />
                <BurgerIngredient type='cheese' />
                <BurgerIngredient type='meat' />
                <BurgerIngredient type='bread-bottom' />
                <div>
                    Placeholder: Build controls.
                </div>
            </>
        );
    };
};

export default BurgerBuilder;