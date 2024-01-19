import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from './loading-screen.module.css';

function LoadingScreen() {
  return (
    <div className={styles.loading}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  );
}

export default LoadingScreen;
