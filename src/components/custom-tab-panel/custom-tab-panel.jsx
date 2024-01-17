import Box from '@mui/material/Box';

import styles from './custom-tab-panel.module.css';

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      id={`simple-tabpanel-${index}`}
      hidden={value !== index}
      role="tabpanel"
      {...other}
    >
      {value === index && (
        <Box>
          <div className={styles.ingredientsList}>
            <div className={styles.groupedIngredients}>{children}</div>
          </div>
        </Box>
      )}
    </div>
  );
}

export default CustomTabPanel;
