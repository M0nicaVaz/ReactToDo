/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import SnackButton from '../SnackButton';
import { Item } from './styles';
import { Button } from '../Button';

export function ListItem({ item, handleDelete, handleCheck, itemId }) {
  item.id = itemId;

  const greenButton = css({
    color: 'green',
  });

  return (
    <Item className={item.done ? 'item-done' : ''}>
      <Button
        onClick={() => {
          handleCheck(item);
        }}
        css={item.done && greenButton}
        icon={item.done ? FiCheckSquare : FiSquare}
      />

      {item.description}

      <SnackButton item={item} handleDelete={handleDelete} />
    </Item>
  );
}
