import { Box, IconButton, ToggleButton } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import Button from '@mui/material/Button'
import React from 'react'

export const FavoriteButton = () => {
  const [selected, setSelected] = React.useState(false)
  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected)
      }}
      sx={{
        border: 'none',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: 'rgba(239, 238, 255, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '.3s ease',
        '&:hover': {
          background: 'rgba(239, 238, 255, 1)',
        },
      }}
    >
      <StarIcon
        sx={{
          fill: '#CDCAD5',
        }}
      />
    </ToggleButton>
  )
}
