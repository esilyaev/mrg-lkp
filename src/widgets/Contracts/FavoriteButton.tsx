import { ToggleButton, styled } from '@mui/material'
import MuiToggleButton from '@mui/material/ToggleButton'
import StarIcon from '@mui/icons-material/Star'
import React from 'react'

export const FavoriteButton = () => {
  const [selected, setSelected] = React.useState(false)

  const ToggleButton = styled(MuiToggleButton)({
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: 'red',
    },
  })

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
