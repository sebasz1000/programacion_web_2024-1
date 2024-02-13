import './style.css'
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
const rootDiv = document.getElementById("app")
const reactRoot = createRoot(rootDiv)
reactRoot.render(<App />)
