import {useState, useEffect} from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemoveHandler = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    document.addEventListener('mousemove', mousemoveHandler);

    return () => {
      document.removeEventListener('mousemove', mousemoveHandler);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
