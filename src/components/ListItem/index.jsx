import Checkbox from '@mui/material/Checkbox';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import { useState } from 'react';
import { Container, Item } from './styles';
import SnackButton from '../SnackButton';
import Typography from '@mui/material/Typography';

export function ListItem({ item, handleDelete, handleCheck, itemId }) {
  item.id = itemId;
  const [checked, setChecked] = useState(false);

  return (
    <Container elevation={6} component="li">
      <Item
        control={
          <Checkbox
            checked={checked}
            icon={<FiSquare size="26" />}
            checkedIcon={<FiCheckSquare size="26" />}
            onChange={(e) => {
              setChecked(e.target.checked), handleCheck(item);
            }}
            inputProps={{ 'arial-label': 'secondary checkbox' }}
            color="success"
          />
        }
        label={
          <Typography
            sx={
              item.done && {
                textDecoration: 'line-through',
                filter: 'brightness(0.5)',
              }
            }
            variant="label"
          >
            {item.description}
          </Typography>
        }
      />
      <SnackButton item={item} handleDelete={handleDelete} />
    </Container>
  );
}
