import { useState, useEffect } from 'react';
import { List } from '../components/List';
import { Form } from '../components/Form';
import { Item } from '../configs/item';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto';

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
    console.log(selectedItem);

    let updatedItems = items.map((item) => {
      if (item.id === selectedItem.id) {
        item.done = !item.done;
      }
      return item;
    });

    setItems(updatedItems);
  }

  return (
    <main className="container">
      <Typography variant="h1">Welcome to MUI</Typography>
      <Form addItem={addItem} />
      <List handleDelete={deleteItem} handleCheck={checkItem} items={items} />
    </main>
  );
}
