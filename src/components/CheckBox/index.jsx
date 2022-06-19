import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, Paper } from '@mui/material';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import { useState } from 'react';
import SnackButton from '../SnackButton';

export default function CheckboxExample({
  item,
  handleDelete,
  handleCheck,
  itemId,
}) {
  item.id = itemId;
  const [checked, setChecked] = useState(true);

  return (
    <Paper component="li">
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<FiSquare size="20" />}
            checkedIcon={<FiCheckSquare size="20" />}
            onChange={(e) => {
              setChecked(e.target.checked), handleCheck(item);
            }}
            inputProps={{ 'arial-label': 'secondary checkbox' }}
            color="success"
          />
        }
        label={item.description}
      />
      <SnackButton item={item} handleDelete={handleDelete} />
    </Paper>
  );
}
