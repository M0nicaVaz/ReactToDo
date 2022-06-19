// import { ListItem } from '../ListItem';
import Stack from '@mui/material/Stack';
import CheckBox from '../CheckBox';

export function List({ items, handleDelete, handleCheck }) {
  return (
    <Stack spacing={2}>
      {items.map((item, index) => (
        <CheckBox
          key={String(index)}
          itemId={index}
          item={item}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ))}
    </Stack>
  );
}
