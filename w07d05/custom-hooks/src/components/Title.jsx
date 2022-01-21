import {useState} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Title = () => {
  const [title, setTitle] = useState('');

  useDocumentTitle(title);

  return (
    <div>
      <h2>The is the Title Component</h2>
      <label>Type a new title:</label>
      <input 
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
    </div> 
  );
};

export default Title;
