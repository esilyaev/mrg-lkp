import Button from '@mui/material/Button';
import TimelineIcon from '@mui/icons-material/Timeline';
// import WysiwygIcon from '@mui/icons-material/Wysiwyg';
// import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
// import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
// import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
// import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
<TimelineIcon />
export const FilterButton = (props: { title: string, startIcon: React.ReactNode }) => {
  return (
    <Button
      sx={{
        background: "white",
        fontSize: "13px",
        padding: "6px 12px",
        textTransform: "none",
        margin: "0px 8px 0px 0px",
        borderColor: "none",
        borderRadius: "4px",
        color: "#2A292E",
        boxShadow: "none",
		'&:hover': {
			backgroundColor: '#e4eaff',
			boxShadow: 'none',
		},
		'&:active': {
			backgroundColor: '#2a292e',
			boxShadow: 'none',
			color: '#FFFFFF',
		},
      }}
      startIcon={props.startIcon}
      variant="contained">
      {props.title}
    </Button>
  );
};
