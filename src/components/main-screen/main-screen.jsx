import DesktopLayout from '../desktop-layout/desktop-layout';
import MobileLayout from '../mobile-layout/mobile-layout';
import useResponsive from '../../hooks/useResponsive';

import styles from './main-screen.module.css';

function MainScreen({ data }) {
  const { isDesktop, isMobile } = useResponsive();

  return (
    <>
      {isMobile && <MobileLayout data={data} />}
      {isDesktop && <DesktopLayout data={data} />}
    </>
  );
}

export default MainScreen;
