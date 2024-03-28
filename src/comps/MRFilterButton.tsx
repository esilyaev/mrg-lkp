import DoneIcon from '@mui/icons-material/Done';
import { Button } from "@mui/material";
import { PropsComp } from "../pages/PropsComp";

export const MRFilterButton = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        display: 'flex',
        gap: '5px',
        padding: '10px 12px',
        color: '#fff',

        outline: 'none',
        border: 'none',
        '&:hover': {
          background: 'rgb(27, 26, 29)',
          outline: 'none',
          border: 'none',
        },
      }}
    >
      <DoneIcon />
      <span>
        <PropsComp title="Все проекты" />
      </span>
    </Button>
  );
};
