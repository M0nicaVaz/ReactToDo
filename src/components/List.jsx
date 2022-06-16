import { FiXSquare, FiSquare, FiCheckSquare } from 'react-icons/fi';

export function List({ items, handleDelete, handleCheck }) {
  return (
    <ul>
      {items.map((item) => (
        <li className={item.done ? 'item-done' : ''} key={item.id}>
          {item.description}
          <button
            onClick={() => {
              handleCheck(item);
            }}
          >
            {item.done ? <FiSquare size={20} /> : <FiCheckSquare size={20} />}
          </button>
          <button
            onClick={() => {
              handleDelete(item);
            }}
          >
            <FiXSquare size={20} />
          </button>
        </li>
      ))}
    </ul>
  );
}
