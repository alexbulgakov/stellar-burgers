import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import AppHeaderMobile from '../app-header-mobile/app-header-mobile';
import useWindowSize from '../../hooks/useWindowSize';
import AppHeader from '../app-header/app-header';
import Checkout from '../checkout/checkout';
import { data } from '../../utils/data';

import styles from './app.module.css';

function App() {
  const [width] = useWindowSize();

  return width < 1024 ? (
    <>
      <AppHeaderMobile />
      <main className={styles.mainMobile}>
        <BurgerIngredients data={data} />
        <Checkout text="View Order" />
      </main>
    </>
  ) : (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </>
  );
}

export default App;
