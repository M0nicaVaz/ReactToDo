import Paper from '@mui/material/Paper';
import styled from '@emotion/styled';

export const Item = styled(Paper)`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1.625rem;
  align-items: center;
  color: #1a2027;
  background-color: #ddd;

  font-size: clamp(0.875rem, 0.875rem + 0.5vw, 1.125rem);
`;
