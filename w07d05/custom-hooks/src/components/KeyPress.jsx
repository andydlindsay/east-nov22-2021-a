import useKeyPress from "../hooks/useKeyPress";

const KeyPress = () => {
  const hPressed = useKeyPress('h');
  const sPressed = useKeyPress('s');
  const pPressed = useKeyPress('p');

  return (
    <div>
      <h2>Using useKeyPress</h2>

      { hPressed && <h2>😀</h2> }
      { sPressed && <h2>😢</h2> }
      { pPressed && <h2>🍕</h2> }
    </div>
  );
};

export default KeyPress;
