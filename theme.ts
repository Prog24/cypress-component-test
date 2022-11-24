import { createTheme } from '@mui/material/styles'
import { teal, pink } from '@mui/material/colors'

export default createTheme({
  palette: {
    primary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700]
    },
    secondary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700]
    }
  },
  typography: {
    fontFamily: '"Noto Sans CJK JP", "Noto Sans JP", "Helvetica", "Arial", sans-serif'
  }
})
