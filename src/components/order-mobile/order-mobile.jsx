import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './order-mobile.module.css';

function OrderMobile({ toggleOrder, children }) {
  return (
    <div className={`${styles.order}`}>
      <div className={`${styles.header} pl-4 pr-4 pb-2 pt-2`}>
        <p className="text text_type_main-large ">Order</p>
        <button className={styles.close} onClick={toggleOrder}>
          <CloseIcon type="primary" />
        </button>
      </div>
      {children}
    </div>
  );
}

export default OrderMobile;
