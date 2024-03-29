import "../assets/sidebar.css"


import HomeIcon from '@mui/icons-material/Home';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import LabelIcon from '@mui/icons-material/Label';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import InboxIcon from '@mui/icons-material/Inbox';







export const MRSidebar = () => {
  return (
    <>

      <div className="sidebar">

        <ul className="sidebar__list">

          <li className="sidebar__list-item">

            <HomeIcon 
            sx={{
              fill: 'rgba(190, 187, 201, 1)',
            }}
            />

          </li>
          <li className="sidebar__list-item">

            <MapsHomeWorkIcon 
            sx={{
              fill: 'rgba(190, 187, 201, 1)',
            }}
            />

          </li>
          <li className="sidebar__list-item">

            <LabelIcon 
            sx={{
              fill: 'rgba(190, 187, 201, 1)',
            }}
            />

          </li>
          <li className="sidebar__list-item">

            <AssignmentIcon 
            sx={{
              fill: 'rgba(190, 187, 201, 1)',
            }}
            />

          </li>
          <li className="sidebar__list-item">

            <SpaceDashboardIcon 
            sx={{
              fill: 'rgba(190, 187, 201, 1)',
            }}
            />

          </li>
          <li className="sidebar__list-item">

            <InboxIcon 
            sx={{
              fill: 'rgba(190, 187, 201, 1)',
            }}
            />

          </li>

        </ul>

      </div>

    </>
  );
};
