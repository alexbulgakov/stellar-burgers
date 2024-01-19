import { useEffect, useState } from 'react';

import LoadingScreen from '../loading-screen/loading-screen';
import ErrorScreen from '../error-screen/error-screen';
import MainScreen from '../main-screen/main-screen';
import api from '../../utils/api';

import styles from './app.module.css';

/**
 * Top-level component that implements conditional rendering
 * based on screen width.
 */

//TODO:improve mobile layout(toggle order) using redux and reusing header

function App() {
  const [data, setData] = useState([]);
  const [loadingStatus, setloadingStatus] = useState('loading');

  useEffect(() => {
    api
      .getItems()
      .then((res) => {
        setData(res.data);
        setloadingStatus('loaded');
      })
      .catch((err) => {
        setloadingStatus('error');
      });
  }, []);

  function renderContent() {
    switch (loadingStatus) {
      case 'loading':
        return <LoadingScreen />;
      case 'loaded':
        return <MainScreen data={data} />;
      case 'error':
        return <ErrorScreen />;
      default:
        return null;
    }
  }

  return renderContent();
}

export default App;
