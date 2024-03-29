// import { Button } from "@mui/material";

import { Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const MRHeader = (props: { title: string, select: string, }) => {
  return (

    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '32px',
        }}>
        <Typography sx={{ fontSize: '38px', fontWeight: '400', }} variant="h1">{props.title}</Typography>



        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          padding: '16px',
          background: '#fff',
          width: '720px',
          borderRadius: '5px',
          fontSize: '13px',
          lineHeight: '16px',
          color: 'rgba(156, 154, 165, 1)',
        }}>
          <span>{props.select}</span>
          <ArrowDropDownIcon />
        </Box>

      </Box >
    </>

  );
};
