import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const MultiButton = () => {
  const output = [];

  output.push(
    <IconButton key="cart" color="primary" aria-label="add to shopping cart">
      <AddShoppingCartIcon />
    </IconButton>
  );
  output.push(
    <IconButton key="delete" color="primary" aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
  output.push(
    <IconButton key="alarm" color="primary" aria-label="add an alarm">
      <AlarmIcon />
    </IconButton>
  );

  return <div>{output}</div>;
};

export default MultiButton;

