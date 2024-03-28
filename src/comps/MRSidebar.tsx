import "../assets/sidebar.css"


import HomeIcon from '@mui/icons-material/Home';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LabelIcon from '@mui/icons-material/Label';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import InboxIcon from '@mui/icons-material/Inbox';


// import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Button } from "@mui/material";

import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';





export const MRSidebar = () => {
  return (
    <>

      <div className="sidebar">

        <div className="sidebar__top">
          <a className="sidebar__logo" href="##">
            <img src="/img/mr-logo.svg" width={48} height={21} alt="##" />
          </a>

          <ul className="sidebar__list">

            <li className="sidebar__list-item">

              <Button
                onClick={function () { }}
                sx={{
                  minWidth: '48px',
                  height: '100%',
                }}
              >
                <HomeIcon
                  sx={{
                    fill: 'rgba(117, 75, 233, 1)',
                  }}
                />
              </Button>

            </li>
            <li className="sidebar__list-item">

              <Button
                onClick={function () { }}
                sx={{
                  minWidth: '48px',
                  height: '100%',
                }}
              >
                <MapsHomeWorkIcon
                  sx={{
                    fill: 'rgba(117, 75, 233, 1)',
                  }}
                />
              </Button>



            </li>
            <li className="sidebar__list-item">

              <Button
                onClick={function () { }}
                sx={{
                  minWidth: '48px',
                  height: '100%',
                }}
              >
                <LabelIcon
                  sx={{
                    fill: 'rgba(117, 75, 233, 1)',
                  }}
                />
              </Button>

            </li>
            <li className="sidebar__list-item">

              <Button
                onClick={function () { }}
                sx={{
                  minWidth: '48px',
                  height: '100%',
                }}
              >
                <AssignmentIcon
                  sx={{
                    fill: 'rgba(117, 75, 233, 1)',
                  }}
                />
              </Button>



            </li>
            <li className="sidebar__list-item">

              <Button
                onClick={function () { }}
                sx={{
                  minWidth: '48px',
                  height: '100%',
                }}
              >
                <SpaceDashboardIcon
                  sx={{
                    fill: 'rgba(117, 75, 233, 1)',
                  }}
                />
              </Button>



            </li>
            <li className="sidebar__list-item">

              <Button
                onClick={function () { }}
                sx={{
                  minWidth: '48px',
                  height: '100%',
                }}
              >
                <InboxIcon
                  sx={{
                    fill: 'rgba(117, 75, 233, 1)',
                  }}
                />
              </Button>



            </li>

          </ul>
        </div>

        <div className="sidebar__bottom">

          <div className="sidebar__notification">
            <Button
              onClick={function () { }}
              sx={{
                minWidth: '48px',
                height: '100%',
              }}
            >
              <NotificationsIcon
                sx={{
                  fill: 'rgba(117, 75, 233, 1)',
                }}
              />
            </Button>
          </div>

          <div className="sidebar__profile">

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

          </div>



        </div>

      </div>

    </>
  );
};
