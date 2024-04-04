import Button from '@mui/material/Button'

export const ManageFilterButton = (props: { title: string; startIcon: React.ReactNode }) => {
  return (
    <Button
      sx={{
        background: 'white',
		height: '40px',
        fontSize: '13px',
        padding: '6px 14px',
        textTransform: 'none',
        margin: '0px 8px 0px 0px',
        borderColor: 'none',
        borderRadius: '4px',
        color: '#2A292E',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: '#e4eaff',
          boxShadow: 'none',
        },
        '&:active': {
          backgroundColor: '#2a292e',
          boxShadow: 'none',
          color: '#FFFFFF',
        },
        '.MuiButton-icon svg': {
          color: 'primary.main',
          width: '16px',
          height: '16px',
        },
      }}
      startIcon={props.startIcon}
      variant="contained"
    >
      {props.title}
    </Button>
  )
}
