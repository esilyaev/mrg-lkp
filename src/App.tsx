import { Box, ThemeProvider, createTheme } from '@mui/material'
import './App.css'
import { Router } from './pages/Router'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
  palette: {
    primary: {
      main: '#754BE9',
    },
  },
})

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            paddingTop: '34px',
            paddingBottom: '34px',
            paddingRight: '24px',
            margin: '0 auto',
            paddingLeft: '88px',
            background: 'rgba(245, 245, 245, 1)',
            color: 'rgba(42, 41, 46, 1)',
          }}
        >
          <Router />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App
