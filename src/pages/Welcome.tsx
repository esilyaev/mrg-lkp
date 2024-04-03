import AcUnitIcon from "@mui/icons-material/AcUnit";
import { IconButton } from "@mui/material";
import { MRSidebar } from "../comps/MRSidebar";

export const Welcome = () => {
  return (
    <div>
      <MRSidebar/>
      <IconButton>
        <AcUnitIcon />
      </IconButton>
      Welcome
    </div>
  );
};
