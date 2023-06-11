import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ResetCss } from './theme/globalStyles.ts'
import {ThemeProvider} from 'styled-components'
import { myTheme } from './theme/index.ts'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <ResetCss/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
