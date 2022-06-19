import { styled, Paper, FormControlLabel } from '@mui/material';

export const Item = styled(FormControlLabel)`
  display: flex;
  width: 100%;
  gap: 1.5rem;

  span {
    font-size: clamp(1rem, 1rem + 0.5vw, 1.25rem);
  }
`;

export const Container = styled(Paper)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;

  padding: 0.5rem 1.5rem;
  justify-content: space-between;
  align-items: center;
`;
