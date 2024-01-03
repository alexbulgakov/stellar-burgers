import { useState } from 'react';
import styles from './burger-ingredients.module.css';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import useWindowSize from '../hooks/useWindowSize';

function BurgerIngredients({ data }) {
    const [current, setCurrent] = useState('one');
    const [width, height] = useWindowSize();

    const groupByType = (data) => {
        return data.reduce((acc, item) => {
            if (!acc[item.type]) {
                acc[item.type] = [];
            }
            acc[item.type].push(item);
            return acc;
        }, {});
    };

    const groupedData = groupByType(data);

    const renderGroup = (group) => (
        group.map(ingredient => (
            <div key={ingredient._id} className={styles.ingredient}>
                {ingredient._id === '60666c42cc7b410027a1a9b1' &&
                    <Counter count={1} size="default" extraClass="m-1" />
                }
                <img src={ingredient.image} className={width < 1248 ? '' : 'pl-4 pr-4'} alt={`${ingredient.type} image`} />
                <div className={`${styles.currency} mt-1 mb-1`}>
                    <p className="text text_type_digits-default mr-1">{ingredient.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`text text_type_main-small ${styles.ingredientName}`}>
                    {ingredient.name}
                </p>
            </div>
        ))
    );

    return (
        <section className={`${styles.chooseIngredients} ${width < 614 ? '' : 'pl-2'}`}>
            <p className="text text_type_main-large mt-10 mb-5">
                Choose ingredients
            </p>
            <div className={styles.tab}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Buns
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Sauces
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Filling
                </Tab>
            </div>
            <div className={styles.ingredientsList}>
                <div className='mt-10'>
                    <p className={`${width < 1248 ? 'ml-4' : ''} text text_type_main-medium`} >
                        Buns
                    </p>
                    <div className={`${styles.groupedIngredients} mt-6`}>
                        {groupedData.bun && renderGroup(groupedData.bun)}
                    </div>
                </div>
                <div className='mt-10'>
                    <p className={`${width < 1248 ? 'ml-4' : ''} text text_type_main-medium`}>
                        Sauces
                    </p>
                    <div className={`${styles.groupedIngredients} mt-6`}>
                        {groupedData.sauce && renderGroup(groupedData.sauce)}
                    </div>
                </div>
                <div className='mt-10'>
                    <p className={`${width < 1248 ? 'ml-4' : ''} text text_type_main-medium`}>
                        Filling
                    </p>
                    <div className={`${styles.groupedIngredients} mt-6`}>
                        {groupedData.main && renderGroup(groupedData.main)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BurgerIngredients;