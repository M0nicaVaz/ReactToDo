import { useState } from 'react';

export function Form({ onAddItem }) {
  const [text, setText] = useState('');

  function handleInput(e) {
    let inputValue = e.target.value;
    setText(inputValue);
  }

  function handleAdd(e) {
    e.preventDefault();
    if (text) {
      onAddItem(text);
      setText('');
    }
  }

  return (
    <form>
      <input onChange={handleInput} type="text" value={text} />
      <button onClick={handleAdd}>Add</button>
    </form>
  );
}
