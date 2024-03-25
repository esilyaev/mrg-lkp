import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import { Router } from "./pages/Router";

const theme = createTheme({
  palette: {
    primary: {
      main: "#754BE9",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
