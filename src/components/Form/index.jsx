/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
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

  const addButton = css({
    color: 'grey',
  });

  return (
    <form>
      <input
        onChange={handleInput}
        type="text"
        value={text}
        css={css`
          color: #1a2027;
          border: none;
          border-bottom: 1px solid;
          width: 80%;
          &:hover {
            color: hotpink;
          }
        `}
      />

      <Button
        css={addButton}
        onClick={handleAdd}
        type="submit"
        icon={FiPlusSquare}
      />
    </form>
  );
}
