import Button from '@mui/material/Button'

export const MRButton = (props: { title: string }) => {
  return (
    <Button
      variant="contained"
      sx={{
        marginLeft: '8px',
        borderRadius: '100px',
        fontSize: '14px',
        textTransform: 'none',
        padding: '10px 24px',
        height: '40px',
      }}
    >
      {props.title}
    </Button>
  )
}
