import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';

const Burger = props => {
    let transformedIngredients = [];

    for (const ingredient in props.ingredients) {
        for (let i = 1; i <= props.ingredients[ingredient]; i++) {
            transformedIngredients.push(<BurgerIngredient type={ingredient} key={ingredient + i} />);
        };
    };

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default Burger;

/**
 *  - .reduce((oldArr, el) => oldArr.concat(el), []);
        const transformedIngredients = Object.keys(props.ingredients)
            .map(igKey => [...Array(props.ingredients[igKey])]
                .map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />)
            ).reduce((arr, el) => arr.concat(el), []);;
        - Another example:
            Object.entries(props.ingredients)
        .reduce((acc, curr) => {
            while(curr[1] > 0) {
                acc.push(
                    <BurgerIngredient type={curr[0]} key={curr[0] + curr[1]} />
                )
                curr[1] --;
            }
            return acc;
        }, []);

    - With ES6:
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => [...Array(props.ingredients[igKey])]
        .map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />)
        ).reduce((arr, el) => [...arr, ...el], []);;

    - .flat();
        const transformedIngredients = Object.keys(props.ingredients)
            .map(igKey => [...Array(props.ingredients[igKey])]
                .map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />)
            ).flat();

    - Just avoid multidimentional arrays:
        const transformedIngredients = [];
            for (const ingredient in props.ingredients) {
                for (let i = 1; i <= props.ingredients[ingredient]; i++) {
                    transformedIngredients.push(<BurgerIngredient type={ingredient} key={ingredient + i} />);
                };
            };

    - Using Object.entries:
        let transformedIngredients = Object.entries(props.ingredients)
            .map(([ingredeint, count]) => {
            return Array(count).fill(ingredeint);
            })
            .flat()
            .map((ingredeint, i) => {
                return <BurgerIngredient key={i+1} type={ingredeint}/>;
        });
 */