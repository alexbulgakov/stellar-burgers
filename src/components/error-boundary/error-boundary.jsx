import React from 'react';

import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';

import styles from './error-boundary.module.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // using this method to change the component's state when an error occurs
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      // if there is an error, report it to the user in a special component
      return (
        <section className={styles.error}>
          <Alert severity="error">
            <AlertTitle>Error {this.state.error.message}</AlertTitle>An error
            has occurred in the application. Please reload the page.
          </Alert>
        </section>
      );
    }
    // if everything works properly, render the child components
    return this.props.children;
  }

  // log information about the error using this method
  componentDidCatch(error, info) {
    console.log('An error occurred', error, info);
  }
}

export default ErrorBoundary;
