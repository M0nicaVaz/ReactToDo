import { useState, useEffect } from 'react';
import { List } from '../components/List';
import { Form } from '../components/Form';
import { Item } from '../configs/item';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto';
import { Container } from '@mui/material';

export default function ToDo() {
  const savedList = JSON.parse(localStorage.getItem('@savedList'));
  const [items, setItems] = useState(savedList || []);

  useEffect(() => {
    localStorage.setItem('@savedList', JSON.stringify(items));
  }, [items]);

  function addItem(text) {
    let item = new Item(text);

    setItems([...items, item]);
  }

  function deleteItem(selectedItem) {
    let filteredItems = items.filter((item) => item.id != selectedItem.id);

    setItems(filteredItems);
  }

  function checkItem(selectedItem) {
    let updatedItems = items.map((item) => {
      if (item.id === selectedItem.id) {
        item.done = !item.done;
      }
      return item;
    });

    setItems(updatedItems);
  }

  return (
    <Container maxWidth="md" sx={{ paddingBlock: '50px', textAlign: 'center' }}>
      <Typography variant="h1">LISTA DE TAREFAS</Typography>
      <Form addItem={addItem} />
      <List handleDelete={deleteItem} handleCheck={checkItem} items={items} />
    </Container>
  );
}
