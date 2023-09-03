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
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', 
  },
})

export default responsiveFontSizes(theme);