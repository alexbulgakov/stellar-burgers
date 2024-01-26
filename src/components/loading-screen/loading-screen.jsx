import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from './loading-screen.module.css';

function LoadingScreen() {
  return (
    <section className={styles.loading}>
      <CircularProgress />
    </section>
  );
}

export default LoadingScreen;
