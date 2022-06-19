import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import SnackButton from '../SnackButton';
import { Button } from '../Button';
import Paper from '@mui/material/Paper';

export function ListItem({ item, handleDelete, handleCheck, itemId }) {
  item.id = itemId;
  // className={item.done ? 'item-done' : ''}
  return (
    <Paper component="li">
      <Button
        onClick={() => {
          handleCheck(item);
        }}
        icon={item.done ? FiCheckSquare : FiSquare}
      />

      {item.description}

      <SnackButton item={item} handleDelete={handleDelete} />
    </Paper>
  );
}
