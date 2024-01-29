import { useContext, useState } from 'react';

import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import OrderDetails from '../order-details/order-details';
import useWindowSize from '../../hooks/useWindowSize';
import { DataContext } from '../../utils/dataContext';
import Checkout from '../checkout/checkout';
import Modal from '../modal/modal';
import api from '../../utils/api';

import styles from './burger-constructor.module.css';

function BurgerConstructor() {
  const [, , , data] = useContext(DataContext);
  const [width] = useWindowSize();
  const [visibleModal, setVisibleModal] = useState(false);
  const topBun = data.find((item) => item.type === 'bun'); //TODO: remove hardcode
  const [error, setError] = useState(null);
  const [order, setOrder] = useState({});
  const bottomBun = data.find((item) => item.type === 'bun'); //TODO: remove hardcode
  const selectedIngredients = data.filter(
    (item) => item.type === 'main' || item.type === 'sauce',
  ); //TODO: remove hardcode

  function handleOpenModal() {
    const ingredientIds = selectedIngredients.map((item) => item._id);

    api
      .postOrder(ingredientIds)
      .then((res) => {
        setOrder(res.order);
        setVisibleModal(true);
      })
      .catch((err) => {
        setError(err);
      });
  }

  function handleCloseModal() {
    setVisibleModal(false);
  }

  if (error) {
    throw error;
  }

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
          <OrderDetails order={order} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
