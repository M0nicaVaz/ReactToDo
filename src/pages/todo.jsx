import { useState } from 'react';

export default function ToDo() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  function handleInput(e) {
    let inputValue = e.target.value;
    setText(inputValue);
  }

  function handleAdd(e) {
    e.preventDefault();
    if (text) {
      setItems([...items, text]);
      setText('');
    }
  }

  return (
    <div className="container">
      <h1>TODO</h1>

      <form>
        <input onChange={handleInput} type="text" value={text} />
        <button onClick={handleAdd}>Add</button>
      </form>

      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
