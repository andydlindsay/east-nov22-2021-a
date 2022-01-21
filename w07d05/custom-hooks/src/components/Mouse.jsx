import useMousePosition from "../hooks/useMousePosition";
import useDocumentTitle from '../hooks/useDocumentTitle';

const Mouse = () => {
  const mousePosition = useMousePosition();
  useDocumentTitle(`x: ${mousePosition.x}, y: ${mousePosition.y}`);

  const style = {
    fontSize: `${mousePosition.y / 5}px`,
    color: `rgb(${mousePosition.x / 4}, ${mousePosition.y / 4}, 0)`,
    backgroundColor: `rgb(0, ${mousePosition.x / 4}, ${mousePosition.y / 4})`,
    padding: '10px',
    border: `10px dotted rgb(${mousePosition.y / 4}, 0, ${mousePosition.x / 4})` 
  };

  return (
    <div>
      <h2 style={style}>The is the mouse component</h2>
      <h2>X: {mousePosition.x}, Y: {mousePosition.y}</h2>
    </div>
  );
};

export default Mouse;
