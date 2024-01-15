import { useEffect, useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import AppHeaderMobile from '../app-header-mobile/app-header-mobile';
import AppFooterMobile from '../app-footer-mobile/app-footer-mobile';
import useWindowSize from '../../hooks/useWindowSize';
import AppHeader from '../app-header/app-header';

import styles from './app.module.css';

/**
 * Top-level component that implements conditional rendering
 * based on screen width.
 */

//TODO:improve mobile layout(toggle order) using redux and reusing header

function App() {
  const DATA_URL = 'https://norma.nomoreparties.space/api/ingredients';
  const [data, setData] = useState([]);
  const [loadingStatus, setloadingStatus] = useState('loading');
  const [width] = useWindowSize();

  function renderPage() {
    if (loadingStatus === 'loading') {
      return (
        <div className={styles.notification}>
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        </div>
      );
    }

    if (loadingStatus === 'loaded') {
      return width < 1024 ? (
        <>
          <AppHeaderMobile />
          <main className={styles.mainMobile}>
            <BurgerIngredients data={data} />
          </main>
          <AppFooterMobile>
            <BurgerConstructor data={data} />
          </AppFooterMobile>
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

    return (
      <div className={styles.notification}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>Loading failed
        </Alert>
      </div>
    );
  }

  useEffect(() => {
    fetch(DATA_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error occured!');
        }
        return res.json();
      })
      .then((res) => {
        setData(res.data);
        setloadingStatus('loaded');
      })
      .catch((err) => {
        setloadingStatus('error');
      });
  }, []);

  return renderPage();
}

export default App;
