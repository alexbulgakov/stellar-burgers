import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import img from '../../images/graphics.svg';

import styles from './order-details.module.css';

function OrderDetails() {
  return (
    <div className={`${styles.orderDetails} mt-2 mr-10 ml-10`}>
      <p className={`${styles.id} text text_type_digits-large`}>034536</p>
      <p className="text text_type_main-medium mt-8">order id</p>
      <div className={`${styles.icon} mt-15`}>
        <img className={styles.iconBackground} src={img} alt="img" />
        <CheckMarkIcon type="primary" />
      </div>
      <div className={`${styles.instructions} mt-15 mb-30`}>
        <p className="text text_type_main-small">Order is being prepared</p>
        <p className="text text_type_main-default text_color_inactive mt-2">
          Please wait for it to be ready at the orbital station
        </p>
      </div>
    </div>
  );
}

export default OrderDetails;
