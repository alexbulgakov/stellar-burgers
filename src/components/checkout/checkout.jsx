import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import useWindowSize from '../../hooks/useWindowSize';

import styles from './checkout.module.css';

function Checkout({ toggleOrder, text }) {
  const [width] = useWindowSize();

  return (
    <div className={`${styles.checkout} mr-4`}>
      <div className={`${styles.price} mr-4`}>
        <p
          className={`text mr-1 ${
            width < 324 ? 'text_type_digits-default' : 'text_type_digits-medium'
          }`}
        >
          610
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        onClick={toggleOrder}
        htmlType="button"
        type="primary"
        size="medium"
      >
        {text}
      </Button>
    </div>
  );
}

export default Checkout;
