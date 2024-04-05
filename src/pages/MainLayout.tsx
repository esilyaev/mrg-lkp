import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { MRSidebar } from 'widgets/MRSidebar'

export const MainLayout = () => {
  return (
    <>
      <MRSidebar />
      <Box
        sx={{
          paddingTop: '34px',
          paddingBottom: '34px',
          paddingRight: '24px',
          margin: '0 auto',
          background: 'rgba(245, 245, 245, 1)',
          color: 'rgba(42, 41, 46, 1)',
        }}
      >
        <Outlet />
      </Box>
    </>
  )
}
