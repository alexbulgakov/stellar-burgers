import { useState } from 'react';

import {
  MenuIcon,
  Logo,
} from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import OrderMobile from '../order-mobile/order-mobile';
import useWindowSize from '../../hooks/useWindowSize';
import Checkout from '../checkout/checkout';
import logo from '../../images/logo.png';
import Menu from '../menu/menu';

import styles from './mobile-layout.module.css';

function MobileLayout({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [width] = useWindowSize();
  const [isOpenOrder, setIsOpenOrder] = useState(false);

  const toggleOrder = () => {
    setIsOpenOrder(!isOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={`${styles.headerMobile} pl-4 pr-4 pb-2 pt-2`}>
        {width < 425 ? <img alt="logo" src={logo} /> : <Logo />}
        <button onClick={toggleMenu} aria-label="menu" type="button">
          <MenuIcon type="primary" />
        </button>
      </header>
      {isOpen && <Menu toggleMenu={toggleMenu} />}
      <main className={styles.mainMobile}>
        <BurgerIngredients data={data} />
      </main>
      <section className={`${styles.checkoutMobile} pb-2 pt-2`}>
        <Checkout toggleOrder={toggleOrder} text="View order" />
        {isOpenOrder ? (
          <OrderMobile toggleOrder={toggleOrder}>
            <BurgerConstructor data={data} />
          </OrderMobile>
        ) : (
          ''
        )}
      </section>
    </>
  );
}

export default MobileLayout;
