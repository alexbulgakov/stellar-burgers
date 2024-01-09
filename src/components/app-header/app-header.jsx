import {
  ProfileIcon,
  BurgerIcon,
  ListIcon,
  Logo,
} from '@ya.praktikum/react-developer-burger-ui-components';

import NavItem from '../nav-item/nav-item';

import styles from './app-header.module.css';

/**
 * Component implementing the rendering of a header with navigation.
 */

function AppHeader() {
  return (
    <header className={`${styles.header} pt-4 pb-4`}>
      <nav className={styles.menu}>
        <NavItem
          icon={<BurgerIcon type="primary" />}
          addMargin="mr-2"
          isActive={true}
        >
          Constructor
        </NavItem>
        <NavItem icon={<ListIcon type="secondary" />} isActive={false}>
          Orders
        </NavItem>
      </nav>
      <Logo />
      <nav>
        <NavItem icon={<ProfileIcon type="secondary" />} isActive={false}>
          Your profile
        </NavItem>
      </nav>
    </header>
  );
}

export default AppHeader;
