import '@ant-design/v5-patch-for-react-19'
import 'katex/dist/katex.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-photo-view/dist/react-photo-view.css'
import App from './App'
import './utils/i18n'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
