import { Button } from "@mui/base";
import TimelineIcon from "@mui/icons-material/Timeline";

export const FilterButton = (props: { startIcon: React.Component }) => {
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
        "&:hover": {
          backgroundColor: "#e4eaff",
          boxShadow: "none",
        },
        "&:active": {
          backgroundColor: "#2a292e",
          boxShadow: "none",
          color: "#FFFFFF",
        },
      }}
      startIcon={props.startIcon}
      variant="contained"
    >
      График освоения
    </Button>
  );
};