import { createTheme } from "@mui/material";



const theme = createTheme({
  palette: {
    primary: {
      main: '#00695C',
    },
    secondary: {
      main: '#4DB6AC',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});


export default theme
