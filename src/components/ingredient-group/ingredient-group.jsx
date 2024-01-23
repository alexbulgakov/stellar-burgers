import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import useWindowSize from '../../hooks/useWindowSize';

import styles from './ingredient-group.module.css';

function IngredientGroup({ onIngredientClick, group }) {
  const [width] = useWindowSize();

  return group.map((ingredient) => (
    <div
      onClick={() => {
        onIngredientClick(ingredient);
      }}
      className={styles.ingredient}
      key={ingredient._id}
    >
      {/* {ingredient.type === 'bun' && (
            <Counter extraClass="m-1" size="default" count={1} />
          )} */}
      <img
        className={width < 1248 ? '' : 'pl-4 pr-4'}
        alt={`${ingredient.type}`}
        src={ingredient.image}
      />
      <div className={`${styles.currency} mt-1 mb-1`}>
        <p className="text text_type_digits-default mr-1">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-small ${styles.ingredientName}`}>
        {ingredient.name}
      </p>
    </div>
  ));
}

export default IngredientGroup;
