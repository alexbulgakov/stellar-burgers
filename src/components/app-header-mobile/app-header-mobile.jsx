import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import { Logo, MenuIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header-mobile.module.css';
import logo from '../../images/logo.png'
import Menu from '../menu/menu';

function AppHeaderMobile() {
    const [isOpen, setIsOpen] = useState(false);
    const [width, height] = useWindowSize();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`${styles.header} p-4`}>
            {width < 425 ?
                <img src={logo} alt='logo' /> :
                <Logo />
            }
            <button className={styles.burger} onClick={toggleMenu}>
                <MenuIcon type="primary" />
            </button>
            {isOpen && <Menu toggleMenu={toggleMenu} />}
        </header>
    );
}

export default AppHeaderMobile;