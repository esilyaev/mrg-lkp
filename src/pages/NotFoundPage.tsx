import { Box, Typography } from '@mui/material'
import { MRHeader } from '../comps/MRHeader'
// COMPONENTS
// MUI

export const NotFoundPage = () => {
  return (
    <>
      <MRHeader title="Страница не найдена" select="Все проекты" />

      <Box
        sx={{
          position: 'relative',
          background: 'rgba(239, 238, 255, 1)',
          padding: '16px 0 16px 40px',
          borderRadius: '5px',
          borderLeft: '5px solid rgba(180, 180, 249, 1)',
          '&::before': {
            content: '"i"',
            position: 'absolute',
            width: '20px',
            height: '20px',
            background: 'rgba(117, 75, 233, 1)',
            top: '15px',
            left: '12px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '11px',
            fontWeight: '700',
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '500',
          }}
        >
          В разработке
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
          }}
        >
          Страница временно недоступна
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: '150px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img src="/public/img/notfound.svg" alt="Не найдено" />
      </Box>
    </>
  )
}
