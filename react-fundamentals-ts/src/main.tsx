import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'

ReactDOM.createRoot(document.getElementById('root')!).render(  // ! <- mostra que o elemento root existe
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
