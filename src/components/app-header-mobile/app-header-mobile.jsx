import { useState } from 'react';

import {
  MenuIcon,
  Logo,
} from '@ya.praktikum/react-developer-burger-ui-components';

import useWindowSize from '../../hooks/useWindowSize';
import logo from '../../images/logo.png';
import Menu from '../menu/menu';

import styles from './app-header-mobile.module.css';

function AppHeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [width] = useWindowSize();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${styles.header} p-4`}>
      {width < 425 ? <img alt="logo" src={logo} /> : <Logo />}
      <button
        className={styles.burger}
        onClick={toggleMenu}
        aria-label="menu"
        type="button"
      >
        <MenuIcon type="primary" />
      </button>
      {isOpen && <Menu toggleMenu={toggleMenu} />}
    </header>
  );
}

export default AppHeaderMobile;
