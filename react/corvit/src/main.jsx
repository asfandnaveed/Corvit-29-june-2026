import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx';
import News from './pages/news/News.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <News />
  </StrictMode>,
)
