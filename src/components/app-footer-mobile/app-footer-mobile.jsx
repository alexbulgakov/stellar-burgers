import { useState } from 'react';

import OrderMobile from '../order-mobile/order-mobile';
import Checkout from '../checkout/checkout';

import styles from './app-footer-mobile.module.css';

function AppFooterMobile(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOrder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className={`${styles.footer} pb-2 pt-2`}>
      <Checkout toggleOrder={toggleOrder} text="View order" />
      {isOpen ? (
        <OrderMobile toggleOrder={toggleOrder}>{props.children}</OrderMobile>
      ) : (
        ''
      )}
    </footer>
  );
}

export default AppFooterMobile;
