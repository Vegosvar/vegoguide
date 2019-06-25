import { useEffect, useState } from 'react';

const getScreenProperties = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});

export default () => {
  const [screenProperties, setScreenProperties] = useState(
    getScreenProperties()
  );

  useEffect(() => {
    const onResize = () => {
      setScreenProperties(getScreenProperties());
    };

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return screenProperties;
};
