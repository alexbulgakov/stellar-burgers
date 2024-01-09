import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import useWindowSize from '../../hooks/useWindowSize';
import Checkout from '../checkout/checkout';

import styles from './burger-constructor.module.css';

function BurgerConstructor({ data }) {
  const [width] = useWindowSize();

  const topBun = data.find((item) => item._id === '60666c42cc7b410027a1a9b1');

  const bottomBun = data.find(
    (item) => item._id === '60666c42cc7b410027a1a9b1',
  );

  const selectedIngredients = data.filter(
    (item) => item.type === 'main' || item.type === 'sauce',
  );

  return (
    <section
      className={`${styles.burgerConstructor} pr-2 mt-25 ${
        width < 1248 ? 'ml-4' : 'ml-10'
      }`}
    >
      <div className={`${styles.bun} ml-8 mb-4`}>
        <ConstructorElement
          text={`${topBun.name} (top)`}
          thumbnail={topBun.image}
          price={topBun.price}
          type="top"
          isLocked
        />
      </div>

      <div className={`${styles.movableIngredients} pr-2`}>
        {selectedIngredients.map((ingredient) => (
          <div className={styles.ingredient} key={ingredient._id}>
            <DragIcon type="primary" />
            <ConstructorElement
              thumbnail={ingredient.image}
              price={ingredient.price}
              text={ingredient.name}
            />
          </div>
        ))}
      </div>
      <div className={`${styles.bun} ml-8 mb-4 mt-4`}>
        <ConstructorElement
          text={`${bottomBun.name} (bottom)`}
          thumbnail={bottomBun.image}
          price={bottomBun.price}
          type="bottom"
          isLocked
        />
      </div>

      <Checkout text="Place an order" />
    </section>
  );
}

export default BurgerConstructor;
