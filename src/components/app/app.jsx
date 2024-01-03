import AppHeader from '../app-header/app-header';
import styles from './app.module.css';
import { data } from '../../utils/data';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import AppHeaderMobile from '../app-header-mobile/app-header-mobile';
import useWindowSize from '../hooks/useWindowSize';
import Checkout from '../checkout/checkout';

function App() {
  const [width, height] = useWindowSize();

  return (
    width < 1024 ?
      <>
        <AppHeaderMobile />
        <main className={styles.mainMobile}>
          <BurgerIngredients data={data} />
          <Checkout text='View Order' />
        </main>
      </> :
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
