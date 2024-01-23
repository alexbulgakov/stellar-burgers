import { useEffect, useState } from 'react';

import LoadingScreen from '../loading-screen/loading-screen';
import ErrorScreen from '../error-screen/error-screen';
import MainScreen from '../main-screen/main-screen';
import api from '../../utils/api';

import styles from './app.module.css';

//TODO:improve mobile layout(toggle order) using redux and reusing header

/**
 * Renders the content based on the loading status.
 *
 * @return {ReactElement} The rendered content.
 */
function App() {
  const [data, setData] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState('loading');

  useEffect(() => {
    //TODO: use error boundary
    api
      .getItems()
      .then((res) => {
        setData(res.data);
        setLoadingStatus('loaded');
      })
      .catch((err) => {
        setLoadingStatus('error');
      });
  }, []);

  //TODO: HOC?

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
