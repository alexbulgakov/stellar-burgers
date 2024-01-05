import {
  ProfileIcon,
  BurgerIcon,
  CloseIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './menu.module.css';

function Menu({ toggleMenu }) {
  return (
    <div className={`${styles.menu}`}>
      <div className={`${styles.header} m-4`}>
        <p className="text text_type_main-large ">Menu</p>
        <button className={styles.close} onClick={toggleMenu}>
          <div className={styles.icon}>
            <CloseIcon type="primary" />
          </div>
        </button>
      </div>
      <nav className={`${styles.nav} ml-4`}>
        <ul className={styles.list}>
          <li>
            <a className={`${styles.navItem}`} href="#">
              <ProfileIcon type="primary" />
              <p className="text text_type_main-default ml-2">Your profile</p>
            </a>
          </li>
          <li className="mt-8">
            <a className={`${styles.navItem}`} href="#">
              <BurgerIcon type="secondary" />
              <p className="text text_type_main-default ml-2 text_color_inactive">
                Constructor
              </p>
            </a>
          </li>
          <li className="mt-8">
            <a className={`${styles.navItem}`} href="#">
              <ListIcon type="secondary" />
              <p className="text text_type_main-default ml-2 text_color_inactive">
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
