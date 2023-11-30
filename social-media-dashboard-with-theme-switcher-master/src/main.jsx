import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

// Custom tema mode terang
const themeLight = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: 'hsl(230, 17%, 14%)',
      secondary: 'hsl(228, 12%, 44%)',
    },
    primary: {
      main: 'hsl(230, 22%, 74%)',
      light: 'hsl(225, 100%, 98%)',
    },
    success: {
      main: 'hsl(163, 72%, 41%)',
    },
    error: {
      main: 'hsl(356, 69%, 56%)',
    },
    background: {
      paper: 'hsl(227, 47%, 96%)',
      default: 'hsl(0, 0%, 100%)',
    }
  },
  typography: {
    fontFamily: 'Inter',
  },
})

// Custom tema mode gelap
const themeDark = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(228, 34%, 66%)',
    },
    primary: {
      main: 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))',
      light: 'hsl(232, 19%, 15%)',
    },
    success: {
      main: 'hsl(163, 72%, 41%)',
    },
    error: {
      main: 'hsl(356, 69%, 56%)',
    },
    background: {
      paper: 'hsl(228, 28%, 20%)',
      default: 'hsl(230, 17%, 14%)',
    }
  },
  typography: {
    fontFamily: 'Inter',
  },
})

export function Main() {
  const [darkMode, setDarkMode] = useState(false)

  function handleChangeMode() {
    setDarkMode(!darkMode)
  }

  return (
    <React.StrictMode>
      <ThemeProvider theme={darkMode ? themeDark : themeLight}>
        <CssBaseline />
        <App onChangeMode={handleChangeMode} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

// Render the Index component
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);