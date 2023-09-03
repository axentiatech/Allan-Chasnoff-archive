import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette:{
    primary:{
      main:"#fff"
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
      xs: 0,
      sm: 600,
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