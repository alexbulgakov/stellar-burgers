import { useState } from 'react';

import {
  CurrencyIcon,
  Counter,
  Tab,
} from '@ya.praktikum/react-developer-burger-ui-components';

import useWindowSize from '../../hooks/useWindowSize';

import styles from './burger-ingredients.module.css';

function BurgerIngredients({ data }) {
  const [current, setCurrent] = useState('one');
  const [width] = useWindowSize();

  const groupByType = (ingredients) =>
    ingredients.reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);
      return acc;
    }, {});

  const groupedData = groupByType(data);

  const renderGroup = (group) =>
    group.map((ingredient) => (
      <div className={styles.ingredient} key={ingredient._id}>
        {ingredient._id === '60666c42cc7b410027a1a9b1' && (
          <Counter extraClass="m-1" size="default" count={1} />
        )}
        <img
          className={width < 1248 ? '' : 'pl-4 pr-4'}
          alt={`${ingredient.type}`}
          src={ingredient.image}
        />
        <div className={`${styles.currency} mt-1 mb-1`}>
          <p className="text text_type_digits-default mr-1">
            {ingredient.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`text text_type_main-small ${styles.ingredientName}`}>
          {ingredient.name}
        </p>
      </div>
    ));

  return (
    <section
      className={`${styles.chooseIngredients} ${width < 614 ? '' : 'pl-2'}`}
    >
      <p className="text text_type_main-large mt-10 mb-5">Choose ingredients</p>
      <div className={styles.tab}>
        <Tab active={current === 'one'} onClick={setCurrent} value="one">
          Buns
        </Tab>
        <Tab active={current === 'two'} onClick={setCurrent} value="two">
          Sauces
        </Tab>
        <Tab active={current === 'three'} onClick={setCurrent} value="three">
          Filling
        </Tab>
      </div>
      <div className={styles.ingredientsList}>
        <div className="mt-10">
          <p
            className={`${
              width < 1248 ? 'ml-4' : ''
            } text text_type_main-medium`}
          >
            Buns
          </p>
          <div className={`${styles.groupedIngredients} mt-6`}>
            {groupedData.bun && renderGroup(groupedData.bun)}
          </div>
        </div>
        <div className="mt-10">
          <p
            className={`${
              width < 1248 ? 'ml-4' : ''
            } text text_type_main-medium`}
          >
            Sauces
          </p>
          <div className={`${styles.groupedIngredients} mt-6`}>
            {groupedData.sauce && renderGroup(groupedData.sauce)}
          </div>
        </div>
        <div className="mt-10">
          <p
            className={`${
              width < 1248 ? 'ml-4' : ''
            } text text_type_main-medium`}
          >
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
