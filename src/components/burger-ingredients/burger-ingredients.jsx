import { useState } from 'react';

import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import useWindowSize from '../../hooks/useWindowSize';

import styles from './burger-ingredients.module.css';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      aria-labelledby={`simple-tab-${index}`}
      id={`simple-tabpanel-${index}`}
      hidden={value !== index}
      role="tabpanel"
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function BurgerIngredients({ data }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [width] = useWindowSize();

  const groupByType = (ingredients) =>
    ingredients.reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);
      return acc;
    }, {});

  const groupedData = groupByType(data);

  const renderGroup = (group) =>
    group.map((ingredient) => (
      <div className={styles.ingredient} key={ingredient._id}>
        {ingredient._id === '60666c42cc7b410027a1a9b1' && (
          <Counter extraClass="m-1" size="default" count={1} />
        )}
        <img
          className={width < 1248 ? '' : 'pl-4 pr-4'}
          alt={`${ingredient.type}`}
          src={ingredient.image}
        />
        <div className={`${styles.currency} mt-1 mb-1`}>
          <p className="text text_type_digits-default mr-1">
            {ingredient.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`text text_type_main-small ${styles.ingredientName}`}>
          {ingredient.name}
        </p>
      </div>
    ));

  function a11yProps(index) {
    return {
      'aria-controls': `simple-tabpanel-${index}`,
      id: `simple-tab-${index}`,
    };
  }

  return (
    <section className={styles.chooseIngredients}>
      <p
        className={`text text_type_main-large  ${
          width < 1024 ? 'mt-2 mb-2 ml-2' : 'mt-10 mb-5'
        } ${
          width < 514 ? 'mt-6 text_type_main-medium' : 'text_type_main-large'
        } ${styles.description}`}
      >
        Choose ingredients
      </p>
      <Box>
        <Box>
          <Tabs
            aria-label="basic tabs example"
            onChange={handleChange}
            variant="fullWidth"
            textColor="inherit"
            value={value}
          >
            <Tab label="Buns" {...a11yProps(0)} />
            <Tab label="Sauces" {...a11yProps(1)} />
            <Tab label="Filling" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className={styles.ingredientsList}>
            <div className={styles.groupedIngredients}>
              {groupedData.bun && renderGroup(groupedData.bun)}
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className={styles.ingredientsList}>
            <div className={styles.groupedIngredients}>
              {groupedData.sauce && renderGroup(groupedData.sauce)}
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className={styles.ingredientsList}>
            <div className={styles.groupedIngredients}>
              {groupedData.main && renderGroup(groupedData.main)}
            </div>
          </div>
        </CustomTabPanel>
      </Box>
    </section>
  );
}

export default BurgerIngredients;
