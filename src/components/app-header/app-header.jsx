import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import NavItem from '../nav-item/nav-item';

function AppHeader() {
    return (
        <header className={`${styles.header} mt-4 mb-4`}>
            <nav className={styles.menu}>
                <NavItem icon={<BurgerIcon type="primary" />} addMargin='mr-2'>Constructor</NavItem>
                <NavItem icon={<ListIcon type="primary" />}>Orders</NavItem>
            </nav>
            <Logo />
            <nav>
                <NavItem icon={<ProfileIcon type="primary" />}>Your profile</NavItem>
            </nav>
        </header>
    );
}

export default AppHeader;