import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './checkout.module.css';

function Checkout({ text }) {
  return (
    <div className={`${styles.checkout} mt-10 mr-4 pb-4`}>
      <div className={`${styles.price} mr-4`}>
        <p className="text text_type_digits-medium mr-1">610</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="medium">
        {text}
      </Button>
    </div>
  );
}

export default Checkout;
