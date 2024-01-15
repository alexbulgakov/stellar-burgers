import { useState } from 'react';

import {
  ArrowDownIcon,
  ProfileIcon,
  ArrowUpIcon,
  BurgerIcon,
  CloseIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './menu.module.css';

function Menu({ toggleMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.menu}`}>
      <div className={`${styles.menuHeader} pl-4 pr-4 pb-2 pt-2`}>
        <p className="text text_type_main-large ">Menu</p>
        <button className={styles.close} onClick={toggleMenu}>
          <CloseIcon type="primary" />
        </button>
      </div>
      <nav className={`${styles.nav} ml-4`}>
        <ul className={styles.list}>
          <li>
            <button className={styles.profileMenu} onClick={toggleProfileMenu}>
              <div className={`${styles.navItem}`}>
                <ProfileIcon type="primary" />
                <p className="text text_type_main-medium ml-2 mr-10">
                  Your profile
                </p>
                {isOpen ? (
                  <ArrowUpIcon type="primary" />
                ) : (
                  <ArrowDownIcon type="primary" />
                )}
              </div>
            </button>
            {isOpen ? (
              <div className="ml-8 mt-6">
                <p className="text text_type_main-medium">Profile</p>
                <p className="text text_type_main-medium mt-6 text_color_inactive">
                  Order history
                </p>
                <p className="text text_type_main-medium mt-6 text_color_inactive">
                  Exit
                </p>
              </div>
            ) : (
              ''
            )}
          </li>
          <li className="mt-8">
            <a className={`${styles.navItem}`} href="#">
              <BurgerIcon type="secondary" />
              <p className="text text_type_main-medium ml-2 text_color_inactive">
                Constructor
              </p>
            </a>
          </li>
          <li className="mt-8">
            <a className={`${styles.navItem}`} href="#">
              <ListIcon type="secondary" />
              <p className="text text_type_main-medium ml-2 text_color_inactive">
                Orders
              </p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
