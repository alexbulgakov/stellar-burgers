import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import AppHeader from '../app-header/app-header';

import styles from './desktop-layout.module.css';

function DesktopLayout({ data }) {
  return (
    <>
      <AppHeader />
      <main className={`${styles.main} pb-2`}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </>
  );
}

export default DesktopLayout;
