import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TasksContextProvider } from './context/TasksContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
)
