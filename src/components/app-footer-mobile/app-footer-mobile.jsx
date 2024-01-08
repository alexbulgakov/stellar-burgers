import Checkout from '../checkout/checkout';

import styles from './app-footer-mobile.module.css';

function AppFooterMobile() {
  return (
    <footer className={`${styles.footer} pb-2 pt-2`}>
      <Checkout text="View order" />
    </footer>
  );
}

export default AppFooterMobile;
