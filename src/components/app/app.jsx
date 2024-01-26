import { useState } from 'react';

import ErrorBoundary from '../error-boundary/error-boundary';
import { DataContext } from '../../utils/dataContext';
import MainScreen from '../main-screen/main-screen';

function App() {
  const [data, setData] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState('loading');

  const dataState = [setLoadingStatus, loadingStatus, setData, data];

  return (
    <DataContext.Provider value={dataState}>
      <ErrorBoundary>
        <MainScreen />
      </ErrorBoundary>
    </DataContext.Provider>
  );
}

export default App;
