import DoneIcon from '@mui/icons-material/Done';
import { Button } from "@mui/material";

export const MRFilterButton = (props: { name: string }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        display: 'flex',
        gap: '5px',
        padding: '10px 12px',
        color: '#cacaca',

        outline: 'none',
        border: 'none',
        '&:hover': {
          // background: 'rgb(27, 26, 29)',
          outline: 'none',
          border: 'none',
        },
      }}
    >
      <DoneIcon />

      <span>{props.name}</span>

    </Button>

  );
};
