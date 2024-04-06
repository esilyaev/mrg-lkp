import { ThemeProvider, createTheme } from '@mui/material'
import './App.css'
import { Router } from '../pages/Router'
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
        <Router />
      </ThemeProvider>
    </>
  )
}

export default App
