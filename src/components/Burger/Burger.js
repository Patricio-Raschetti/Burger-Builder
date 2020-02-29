import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';

const Burger = props => {
    const transformedIngredients = [];
    for (const ingredient in props.ingredients) {
        for (let i = 1; i <= props.ingredients[ingredient]; i++) {
            transformedIngredients.push(<BurgerIngredient type={ingredient} key={ingredient + i} />);
        };
    };
    console.log(transformedIngredients);

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default Burger;