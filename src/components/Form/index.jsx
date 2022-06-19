import { useState } from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { Button } from '../Button';

export function Form({ addItem }) {
  const [text, setText] = useState('');

  function handleInput(e) {
    let inputValue = e.target.value;
    setText(inputValue);
  }

  function handleAdd(e) {
    e.preventDefault();
    if (text) {
      addItem(text);
      setText('');
    }
  }

  return (
    <form>
      <input onChange={handleInput} type="text" value={text} />

      <Button onClick={handleAdd} type="submit" icon={FiPlusSquare} />
    </form>
  );
}
