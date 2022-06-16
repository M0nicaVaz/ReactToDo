import { FiXSquare } from 'react-icons/fi';

export function List({ items, handleDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.description}

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
