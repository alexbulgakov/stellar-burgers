import DesktopLayout from '../desktop-layout/desktop-layout';
// import MobileLayout from '../mobile-layout/mobile-layout';
// import useResponsive from '../../hooks/useResponsive';

// import styles from './main-screen.module.css';

function MainScreen() {
  // const { isDesktop, isMobile } = useResponsive();

  return (
    <>
      {/* {isMobile && <MobileLayout data={data} />} */}
      {/* {isDesktop && <DesktopLayout />} */}
      <DesktopLayout />
    </>
  );
}

export default MainScreen;
