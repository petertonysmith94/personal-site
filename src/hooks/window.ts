import { useEffect, useState } from "react";

/**
 * Reactive window hook
 * 
 * @returns {[number, number]} [window.innerWidth, window.innerHeight]
 */
export const useWindow = (): [number, number] => {
  const [[width, height], setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return [width, height]
}