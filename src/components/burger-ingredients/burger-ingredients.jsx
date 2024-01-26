import { useContext, useEffect, useState, useMemo } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import IngredientDetails from '../ingredient-details/ingredient-details';
import IngredientGroup from '../ingredient-group/ingredient-group';
import CustomTabPanel from '../custom-tab-panel/custom-tab-panel';
import LoadingScreen from '../loading-screen/loading-screen';
import useWindowSize from '../../hooks/useWindowSize';
import { DataContext } from '../../utils/dataContext';
import { groupByType } from '../../utils/functions';
import Modal from '../modal/modal';
import api from '../../utils/api';

import styles from './burger-ingredients.module.css';

function BurgerIngredients() {
  const [width] = useWindowSize();
  const [tabContent, setTabContent] = useState(0);
  const [setLoadingStatus, loadingStatus, setData, data] =
    useContext(DataContext);
  const [visibleModal, setVisibleModal] = useState(false);
  const [currentIngredientInModal, setCurrentIngredientInModal] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getItems()
      .then((res) => {
        setData(res.data);
        setLoadingStatus('loaded');
      })
      .catch((err) => {
        setError(err);
        setLoadingStatus('error');
      });
  }, [setData, setLoadingStatus]);

  if (error) {
    throw error;
  }

  const groupedData = useMemo(() => groupByType(data), [data]);

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

  return loadingStatus === 'loading' ? (
    <LoadingScreen />
  ) : (
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
          {groupedData.bun && (
            <IngredientGroup
              onIngredientClick={handleOpenModal}
              group={groupedData.bun}
            />
          )}
        </CustomTabPanel>
        <CustomTabPanel value={tabContent} index={1}>
          {groupedData.sauce && (
            <IngredientGroup
              onIngredientClick={handleOpenModal}
              group={groupedData.sauce}
            />
          )}
        </CustomTabPanel>
        <CustomTabPanel value={tabContent} index={2}>
          {groupedData.main && (
            <IngredientGroup
              onIngredientClick={handleOpenModal}
              group={groupedData.main}
            />
          )}
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
