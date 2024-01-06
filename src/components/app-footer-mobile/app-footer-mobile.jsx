import Checkout from '../checkout/checkout';

import styles from './app-footer-mobile.module.css';

function AppFooterMobile() {
  return (
    <footer className={`${styles.footer} p-4`}>
      <Checkout text="View order" />
    </footer>
  );
}

export default AppFooterMobile;
