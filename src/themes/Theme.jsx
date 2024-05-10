import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#333",
    },
    secondary: {
      main: "#3343b1",
    },
    icons: {
      main: "#303030",
    },
    success: {
      main: "#4caf50",
    },
    warning: {
      main: "#ff9800",
    },
    error: {
      main: "#f44336",
    },
  },
  components: {
    MuiInput:{
      styleOverrides: {
        root: {
          border: 'none',
          padding: 2
        }
      }
    },
    MuiFormControl:{
      styleOverrides: {
        root: {
        
          fieldset:  {
            // backgroundColor: 'red',
            border: 'none',
          
          },
       
        },
      }
    },
  }
 
});
