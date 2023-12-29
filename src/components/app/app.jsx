import AppHeader from '../app-header/app-header';
import styles from './app.module.css';
import { data } from '../../utils/data';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function App() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} />
      </main>
    </>
  );
}

export default App;
