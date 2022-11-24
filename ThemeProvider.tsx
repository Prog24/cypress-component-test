import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import theme from './theme'

interface IProps {
  children?: React.ReactNode
}

const ThemeProvider = (props: IProps) => {
  const { children } = props
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
