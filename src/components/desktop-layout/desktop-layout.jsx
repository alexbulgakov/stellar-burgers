import { useContext } from 'react';

import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import { DataContext } from '../../utils/dataContext';
import AppHeader from '../app-header/app-header';

import styles from './desktop-layout.module.css';

function DesktopLayout() {
  const [setLoadingStatus, loadingStatus, setData, data] =
    useContext(DataContext);
  return (
    <>
      <AppHeader />
      <main className={`${styles.main} pb-2`}>
        <BurgerIngredients />
        {loadingStatus === 'loaded' && <BurgerConstructor />}
      </main>
    </>
  );
}

export default DesktopLayout;
