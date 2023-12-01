import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { RouteProvider } from "./router";
import "./theme/global.css";
import "./polyfills.js";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouteProvider>
        <App />
    </RouteProvider>
  </React.StrictMode>,
)
