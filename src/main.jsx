import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Page from './components/Page'
import Sidebar from './components/Sidebar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar />
    <Page />
  </React.StrictMode>,
)
