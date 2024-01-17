import { useState } from 'react';

import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import IngredientDetails from '../ingredient-details/ingredient-details';
import CustomTabPanel from '../custom-tab-panel/custom-tab-panel';
import useWindowSize from '../../hooks/useWindowSize';
import Modal from '../modal/modal';

import styles from './burger-ingredients.module.css';

function BurgerIngredients({ data }) {
  const [width] = useWindowSize();
  const [tabContent, setTabContent] = useState(0);
  const [visibleModal, setVisibleModal] = useState(false);
  const [currentIngredientInModal, setCurrentIngredientInModal] = useState({});

  const groupedData = groupByType(data);

  function handleOpenModal(ingredient) {
    setVisibleModal(true);
    setCurrentIngredientInModal(ingredient);
  }

  function handleCloseModal() {
    setVisibleModal(false);
  }

  function handleChangeTabContent(event, newValue) {
    setTabContent(newValue);
  }

  function a11yProps(index) {
    return {
      'aria-controls': `simple-tabpanel-${index}`,
      id: `simple-tab-${index}`,
    };
  }

  function groupByType(ingredients) {
    return ingredients.reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);
      return acc;
    }, {});
  }

  function renderGroup(group) {
    return group.map((ingredient) => (
      <div
        onClick={() => {
          handleOpenModal(ingredient);
        }}
        className={styles.ingredient}
        key={ingredient._id}
      >
        {/* {ingredient.type === 'bun' && (
          <Counter extraClass="m-1" size="default" count={1} />
        )} */}
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
            onChange={handleChangeTabContent}
            aria-label="basic tabs example"
            variant="fullWidth"
            textColor="inherit"
            value={tabContent}
          >
            <Tab label="Buns" {...a11yProps(0)} />
            <Tab label="Sauces" {...a11yProps(1)} />
            <Tab label="Filling" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={tabContent} index={0}>
          {groupedData.bun && renderGroup(groupedData.bun)}
        </CustomTabPanel>
        <CustomTabPanel value={tabContent} index={1}>
          {groupedData.sauce && renderGroup(groupedData.sauce)}
        </CustomTabPanel>
        <CustomTabPanel value={tabContent} index={2}>
          {groupedData.main && renderGroup(groupedData.main)}
        </CustomTabPanel>
      </Box>
      {visibleModal && (
        <Modal header="Ingredient details" onClose={handleCloseModal}>
          <IngredientDetails ingredient={currentIngredientInModal} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerIngredients;
