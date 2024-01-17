import { useState } from 'react';

import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import OrderDetails from '../order-details/order-details';
import useWindowSize from '../../hooks/useWindowSize';
import Checkout from '../checkout/checkout';
import Modal from '../modal/modal';

import styles from './burger-constructor.module.css';

function BurgerConstructor({ data }) {
  const [width] = useWindowSize();
  const [visibleModal, setVisibleModal] = useState(false);

  const handleOpenModal = () => {
    setVisibleModal(true);
  };

  const handleCloseModal = () => {
    setVisibleModal(false);
  };

  const topBun = data.find((item) => item.type === 'bun');

  const bottomBun = data.find((item) => item.type === 'bun');

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

      <Checkout onClick={handleOpenModal} text="Place an order" />
      {visibleModal && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
