// import DoneIcon from '@mui/icons-material/Done'
import { Button } from '@mui/material'

export const MRFilterButton = (props: { name: string; startIcon: React.ReactNode }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        display: 'flex',
        gap: '5px',
        padding: '10px 12px',
        color: '#cacaca',
        width: '100%',
        outline: 'none',
        border: 'none',
        '&:hover': {
          // background: 'rgb(27, 26, 29)',
          outline: 'none',
          border: 'none',
        },
      }}
      startIcon={props.startIcon}
    >
      {/* <DoneIcon /> */}

      <span>{props.name}</span>
    </Button>
  )
}
