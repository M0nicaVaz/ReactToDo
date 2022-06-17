import { FiXSquare, FiSquare, FiCheckSquare } from 'react-icons/fi';

export function ListItem({ item, handleDelete, handleCheck, itemId }) {
  item.id = itemId;

  return (
    <li className={item.done ? 'item-done' : ''}>
      <button
        onClick={() => {
          handleCheck(item);
        }}
      >
        {item.done ? <FiCheckSquare size={20} /> : <FiSquare size={20} />}
      </button>

      {item.description}

      <button
        onClick={() => {
          handleDelete(item);
        }}
      >
        <FiXSquare size={20} />
      </button>
    </li>
  );
}
