import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Contact from './pages/contact.jsx'
import Categories from './pages/categories.jsx'
import Article from './pages/article.jsx'
import Home from './pages/home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/article' element={<Article />} />
      <Route path='/categories' element={<Categories />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  </BrowserRouter>
)
