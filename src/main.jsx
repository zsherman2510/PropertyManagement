import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppRouter from './routes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
