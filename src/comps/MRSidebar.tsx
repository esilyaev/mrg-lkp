import HomeIcon from '@mui/icons-material/Home';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LabelIcon from '@mui/icons-material/Label';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import InboxIcon from '@mui/icons-material/Inbox';


// import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Box, Button, List, ListItem } from "@mui/material";

import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

export const SidebarButton = (props: { icon: React.ReactNode }) => {
  return <ListItem
    sx={{
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '5px',
      background: 'rgb(219, 219, 219)',
      padding: '0',
      '&:not(:last-child)': {
        marginBottom: '5px',
      }
    }}
  >
    <Button onClick={function () { }}
      sx={{
        minWidth: '48px',
        height: '100%',
        ".MuiSvgIcon-root": {
          fill: 'rgba(190, 187, 201, 1)',
        }
      }}>
      {props.icon}
    </Button>
  </ListItem>;
};


export const MRSidebar = () => {
  return (
    <>

      <Box
        sx={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 0',
          width: '64px',
          height: '100%',
          top: '0',
          left: '0',
          background: '#f7f9fc',
          boxShadow: '0 0 10px #00000012',
          overflow: 'auto',
          zIndex: '10',
          transition: '.2s',
        }}
      >

        <div className="sidebar__top">
          <a className="sidebar__logo" href="##">
            <img src="/img/mr-logo.svg" width={48} height={21} alt="##" />
          </a>

          <List sx={{
            marginTop: '24px',
          }}>
            <SidebarButton icon={<HomeIcon />} />
            <SidebarButton icon={<MapsHomeWorkIcon />} />
            <SidebarButton icon={<LabelIcon />} />
            <SidebarButton icon={<AssignmentIcon />} />
            <SidebarButton icon={<SpaceDashboardIcon />} />
            <SidebarButton icon={<InboxIcon />} />
          </List>
        </div>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}
        >

          <Box
            sx={{
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '5px',
              background: 'rgb(219, 219, 219)',
            }}
          >

            <Button
              onClick={function () { }}
              sx={{
                minWidth: '48px',
                height: '100%',
              }}
            >
              <NotificationsIcon
                sx={{
                  fill: 'rgba(9,7,20, 1)',
                  width: '32px',
                  height: '32px',
                }}
              />
            </Button>

          </Box>

          <Box sx={{
            marginTop: '10px',

          }}>


            <Button
              onClick={function () { }}
              sx={{
                minWidth: '40px',
                height: '40px',
                borderRadius: '100%',
                background: 'rgba(216, 215, 255, 1)',
              }}
            >
              <PersonIcon
                sx={{
                  fill: '#fff',
                }}
              />
            </Button>

          </Box>

        </Box>

      </Box>

    </>
  );
};