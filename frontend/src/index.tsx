import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import "src/i18n"
import './assets/styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
