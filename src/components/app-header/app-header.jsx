import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import NavItem from '../nav-item/nav-item';

function AppHeader() {
    return (
        <header className={`${styles.header} pt-4 pb-4`}>
            <nav className={styles.menu}>
                <NavItem icon={<BurgerIcon type="primary" />} addMargin='mr-2' isActive={true}>Constructor</NavItem>
                <NavItem icon={<ListIcon type="secondary" />} isActive={false}>Orders</NavItem>
            </nav>
            <Logo />
            <nav>
                <NavItem icon={<ProfileIcon type="secondary" />} isActive={false}>Your profile</NavItem>
            </nav>
        </header>
    );
}

export default AppHeader;