import IconButton from '@mui/material/IconButton';

export function Button({ onClick, icon: Icon, ...props }) {
  return (
    <IconButton onClick={onClick} {...props}>
      {Icon && <Icon size={26} />}
    </IconButton>
  );
}
