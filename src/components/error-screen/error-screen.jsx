import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';

import styles from './error-screen.module.css';

function ErrorScreen() {
  return (
    <div className={styles.error}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>Loading failed
      </Alert>
    </div>
  );
}

export default ErrorScreen;
