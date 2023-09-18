import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette:{
    primary:{
      main:"#5c9ff9"
    },
    background:{
      default:"#fff"
    },
    text:{
      default:"#fff"
    }
  },
  breakpoints: {
    values: {
      xs: 600,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', 
  },
})

export default responsiveFontSizes(theme);