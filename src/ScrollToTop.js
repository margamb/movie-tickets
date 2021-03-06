import { useEffect } from 'react';

function ScrollToTopOnMount() {
  console.log('scroll');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTopOnMount;
