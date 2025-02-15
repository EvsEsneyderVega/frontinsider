import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainComponent from './components/MainComponent'
import { BrowserRouter } from 'react-router-dom'
import {UserProvider} from "./context/UserContext/UserProvider"
createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter>
      <StrictMode>
        <MainComponent />
      </StrictMode>
    </BrowserRouter>
  </UserProvider>
)
