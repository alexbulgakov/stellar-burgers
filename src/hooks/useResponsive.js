import { useEffect, useState } from 'react';

const useResponsive = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width < 1024;
  const isDesktop = width >= 1024;

  return { isDesktop, isMobile };
};

export default useResponsive;
