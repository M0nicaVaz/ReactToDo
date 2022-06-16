import { useState } from 'react';
import { List } from '../components/List';
import { Form } from '../components/Form';
import { Item } from '../configs/item';

export default function ToDo() {
  const [items, setItems] = useState([]);

  function onAddItem(text) {
    let item = new Item(text);

    setItems([...items, item]);
  }

  function onDeleteItem(selectedItem) {
    let filteredItems = items.filter((item) => item.id != selectedItem.id);

    setItems(filteredItems);
  }

  function onCheckItem(selectedItem) {
    let updatedItems = items.map((item) => {
      if (item.id === selectedItem.id) {
        item.done = !item.done;
      }
      return item;
    });

    setItems(updatedItems);
  }

  return (
    <div className="container">
      <h1>ToDo List</h1>

      <Form onAddItem={onAddItem} />

      <List
        handleDelete={onDeleteItem}
        handleCheck={onCheckItem}
        items={items}
      />
    </div>
  );
}
