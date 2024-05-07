import './style.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/authContext/AuthContextProvider'
const appContainer = document.getElementById('app')
const root = createRoot(appContainer)
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
)

console.log(appContainer)
