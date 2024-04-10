import '../assets/sidebar.css'

import HomeIcon from '@mui/icons-material/Home'
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork'
import LabelIcon from '@mui/icons-material/Label'
import AssignmentIcon from '@mui/icons-material/Assignment'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import InboxIcon from '@mui/icons-material/Inbox'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

import { Box, Button, List, ListItem, SvgIcon } from '@mui/material'
import { Sidebar } from 'react-pro-sidebar'
import { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PersonIcon from '@mui/icons-material/Person'
import { useNavigate } from 'react-router-dom'

export const SidebarButton = (props: { title: string; icon: React.ReactNode; nav: () => void }) => {
  return (
    <ListItem
      className="sidebar-listitem"
      sx={{
        height: '48px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5px',
        padding: '0',
        '&:not(:last-child)': {
          marginBottom: '5px',
        },
      }}
    >
      <Button
        className="SidebarButton"
        onClick={props.nav}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          height: '100%',
          width: '100%',
          textTransform: 'none',
          color: '#090714',
          paddingLeft: '12px',
          '.MuiSvgIcon-root': {
            fill: 'rgba(190, 187, 201, 1)',
            minWidth: '24px',
          },
        }}
      >
        {props.icon}
        <Box sx={{ marginLeft: '8px' }} className="sidebar__menu-title">
          {props.title}
        </Box>
      </Button>
    </ListItem>
  )
}

export const MRSidebar = () => {
  const [SidebarStatus, setActive] = useState(false)
  const handleToggle = () => {
    setActive(!SidebarStatus)
  }
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        '.sidebar__logo': {
          display: 'flex',
          position: 'relative',
          margin: '14px 0px',
          textDecoration: 'none',
        },
        '.ps-sidebar-root': {
          width: '240px',
          minWidth: '240px',
          minHeight: '100vh',
          backgroundColor: '#ffffff',
          marginRight: '24px',
        },
        '.collapsed': {
          width: '64px!important',
          minWidth: '64px!important',
        },
        '.collapsed .sidebar__menu-title': {
          display: 'none',
        },
        '.collapsed .sidebar-listitem': {
          width: '48px',
          display: 'flex',
          justifyContent: 'center',
        },
        '.collapsed .SidebarButton': {
          width: '48px',
          minWidth: '48px',
          display: 'flex',
          justifyContent: 'flex-start',
        },
        '.sidebarTriggerOpen': {
          left: '228px',
          transition: '.3s',
        },
      }}
    >
      <Box
        className={`${SidebarStatus ? 'sidebarTriggerCollapsed' : 'sidebarTriggerOpen'}`}
        sx={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          top: '23px',
          left: '52px',
          zIndex: '4',
          padding: '0px',
          minWidth: '24px',
          height: '24px',
          borderRadius: '100%',
          background: 'rgba(117, 75, 233, 1)',
          cursor: 'pointer',
          transition: '.3s',
        }}
        onClick={handleToggle}
      >
        <SvgIcon
          sx={{
            fill: '#fff',
            width: '15px',
          }}
          component={ArrowForwardIosOutlinedIcon}
          inheritViewBox
        />
      </Box>
      <Sidebar className={`${SidebarStatus ? 'collapsed' : 'open'}`}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '10px 8px',
            width: '240px',
            height: '100%',
            zIndex: '10',
            transition: '.2s',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <a className="sidebar__logo" href="##">
              <img src="/img/mr-logo.svg" width={48} height={21} alt="##" />
              <Box
                sx={{
                  color: '#090714',
                  lineHeight: '1',
                  margin: '2px 0px 0px 8px',
                  fontSize: '10px',
                  div: {
                    color: '#754BE9',
                  },
                }}
              >
                Личный кабинет <div>подрядчика</div>
              </Box>
            </a>
            <List
              sx={{
                marginTop: '24px',
                '.sidebar__list-item:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
            >
              <SidebarButton
                icon={<HomeIcon />}
                nav={() => {
                  navigate('/')
                }}
                title={'Главная страница'}
              />
              <SidebarButton
                icon={<MapsHomeWorkIcon />}
                nav={() => {
                  navigate('/contracts')
                }}
                title={'Контракты'}
              />
              <SidebarButton
                icon={<LabelIcon />}
                nav={() => {
                  navigate('/manage')
                }}
                title={'Управление контрактом'}
              />
              <SidebarButton
                icon={<AssignmentIcon />}
                nav={() => {
                  navigate('/documentation')
                }}
                title={'Документация проекта'}
              />
              <SidebarButton
                icon={<SpaceDashboardIcon />}
                nav={() => {
                  navigate('/accounting')
                }}
                title={'Отчетность по СК'}
              />
              <SidebarButton
                icon={<InboxIcon />}
                nav={() => {
                  navigate('/cooperation')
                }}
                title={'Взаимодействие'}
              />
            </List>
          </Box>

          <Box
            className="sidebar-listitem"
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                borderRadius: '5px',
              }}
            >
              <Button
                className="SidebarButton"
                onClick={function () {}}
                sx={{
                  width: '220px',
                  height: '100%',
                  textTransform: 'none',
                  color: '#090714',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  paddingLeft: '8px',
                }}
              >
                <NotificationsIcon
                  sx={{
                    fill: 'rgba(9,7,20, 1)',
                    width: '28px',
                    height: '28px',
                  }}
                />
                <Box sx={{ marginLeft: '8px' }} className="sidebar__menu-title">
                  Уведомления
                </Box>
              </Button>
            </Box>

            <Box
              sx={{
                marginTop: '10px',
              }}
            >
              <Button
                className="SidebarButton"
                onClick={function () {}}
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-start',
                  textTransform: 'none',
                  color: '#090714',
                  paddingLeft: '8px',
                }}
              >
                <PersonIcon
                  sx={{
                    fill: '#fff',
                    minWidth: '32px',
                    height: '32px',
                    borderRadius: '100%',
                    background: 'rgba(216, 215, 255, 1)',
                  }}
                />
                <Box sx={{ marginLeft: '8px' }} className="sidebar__menu-title">
                  Фамилия Имя
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Sidebar>
    </Box>
  )
}
