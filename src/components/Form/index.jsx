import { useState } from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import { Button } from '../Button';
import { Container } from './styles';
import TextField from '@mui/material/TextField';

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
    <Container>
      <TextField
        sx={{
          width: '70%',
        }}
        inputProps={{ maxLength: 32 }}
        onChange={handleInput}
        type="text"
        value={text}
        label="Inserir tarefa"
        variant="standard"
        color="secondary"
      />

      <Button
        color="secondary"
        onClick={handleAdd}
        type="submit"
        icon={FiPlusSquare}
      />
    </Container>
  );
}
