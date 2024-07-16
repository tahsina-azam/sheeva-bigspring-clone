import { useState, useEffect } from 'react';

const useDelay = (delay) => {
  const [isDelayOver, setIsDelayOver] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayOver(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isDelayOver;
};

export default useDelay;
