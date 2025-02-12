import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from './layout/Header';
import Footer from './layout/Footer';
import './assets/scss/styles.scss'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
