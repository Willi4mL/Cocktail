import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import App from './App.jsx'
import './style/index.css'
import './style/cocktailCard.css'
import './style/hero.css'
import './style/header.css'
import './style/menu.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
)
