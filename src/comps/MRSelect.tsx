import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function MRSelect() {
  const [age, setAge] = React.useState('')

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setAge(event.target.value)
  }

  return (
    <Box
      sx={{
        background: '#fff',
        width: '720px',
        borderRadius: '5px',
        fontSize: '13px',
        lineHeight: '16px',
        color: 'rgba(156, 154, 165, 1)',
        transition: '.3s ease',
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Выбрать</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Выбрать"
          onChange={handleChange}
        >
          <MenuItem value={10}>Все проекты</MenuItem>
          <MenuItem value={20}>Согласование</MenuItem>
          <MenuItem value={30}>Контроль</MenuItem>
          <MenuItem value={40}>Закрыт</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
