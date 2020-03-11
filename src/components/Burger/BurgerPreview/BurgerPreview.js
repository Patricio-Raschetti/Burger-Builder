import React from 'react';
import styles from './BurgerPreview.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import PropTypes from 'prop-types';

const Burger = props => {
    let transformedIngredients = [];
    for (const ingredient in props.ingredients) {
        for (let i = 1; i <= props.ingredients[ingredient]; i++) {
            transformedIngredients.push(<BurgerIngredient type={ingredient} key={ingredient + i} />);
        };
    };

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    };

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

Burger.propTypes = {
    ingredients: PropTypes.object.isRequired
}

export default Burger;

