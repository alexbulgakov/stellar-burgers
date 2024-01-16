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
    <>
      <header className={`${styles.header} pl-4 pr-4 pb-2 pt-2`}>
        {width < 425 ? <img alt="logo" src={logo} /> : <Logo />}
        <button onClick={toggleMenu} aria-label="menu" type="button">
          <MenuIcon type="primary" />
        </button>
      </header>
      {isOpen && <Menu toggleMenu={toggleMenu} />}
    </>
  );
}

export default AppHeaderMobile;
