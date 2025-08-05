import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import './i18n'
import { BrowserRouter, Routes, Route } from "react-router"
import Homepage from './homepage.jsx'
import Blog from './blog.jsx'
import Projects from './projects.jsx'
import Awards from './awards.jsx'
import Misc from './misc.jsx'
import NotFound from './404.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/awards' element={<Awards />} />
        <Route path='/misc' element={<Misc />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
