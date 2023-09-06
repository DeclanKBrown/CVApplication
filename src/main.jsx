import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Sidebar from './components/Sidebar'
import Page from './components/Page'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar />
    <Page />
  </React.StrictMode>,
)
