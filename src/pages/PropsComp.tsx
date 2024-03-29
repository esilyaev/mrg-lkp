import Button from '@mui/material/Button';
import TimelineIcon from '@mui/icons-material/Timeline';
// Filter



export const PropsComp = (props: { title: string }) => {
  return <div>{props.title}</div>;
};




export const ManageButtons = (props: { title: string}) => {
	return <Button 
	sx={{
		background: "white",
		fontSize: "13px",
		padding: "6px 12px",
		textTransform: "none",
		margin: "0px 8px 0px 0px",
		borderColor: "none",
		borderRadius: "4px",
		color: '#2A292E',
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
	  startIcon={		
		<TimelineIcon
		  sx={{
			color: "primary.main",
			width: '16px',
			height: '16px'
		  }}
		/>
	  }
	 variant="contained" >
		{props.title}
	</Button>;
  };
