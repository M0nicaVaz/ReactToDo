import { ListItem } from '../ListItem';

export function List({ items, handleDelete, handleCheck }) {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem
          key={String(index)}
          itemId={index}
          item={item}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ))}
    </ul>
  );
}
