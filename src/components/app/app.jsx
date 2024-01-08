import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import AppHeaderMobile from '../app-header-mobile/app-header-mobile';
import AppFooterMobile from '../app-footer-mobile/app-footer-mobile';
import useWindowSize from '../../hooks/useWindowSize';
import AppHeader from '../app-header/app-header';
import Checkout from '../checkout/checkout';
import { data } from '../../utils/data';

import styles from './app.module.css';

/**
 * Top-level component that implements conditional rendering
 * based on screen width.
 */

//TODO: add view order handler and menu-like order page

function App() {
  const [width] = useWindowSize();

  return width < 1024 ? (
    <>
      <AppHeaderMobile />
      <main className={styles.mainMobile}>
        <BurgerIngredients data={data} />
        {width >= 514 ? <Checkout text="View order" /> : ''}
      </main>
      {width < 514 ? <AppFooterMobile /> : ''}
    </>
  ) : (
    <>
      <AppHeader />
      <main className={`${styles.main} pb-2`}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </>
  );
}

export default App;
