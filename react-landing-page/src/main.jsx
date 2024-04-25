import './style.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
const appContainer = document.getElementById('app')
const root = createRoot(appContainer)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

console.log(appContainer)
