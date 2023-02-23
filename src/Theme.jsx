import { createTheme } from "@mui/material";



const theme = createTheme({
  palette: {
    primary: {
      main: '#B62000',
    },
    secondary: {
      main: '#B62000',
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
