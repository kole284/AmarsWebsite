import './App.css'
import Navbar from './components/Navbar/Navbar'
import Burgermenu from './components/Burgermenu/Burgermenu'
import AboutMe from './pages/AboutMe/AboutMe'
import Blog from './pages/Blog/Blog'
import ContactMe from './pages/ContactMe/ContactMe'
import Home from './pages/Home/Home'
import Project from "./pages/Project/Project"
import {Route, Routes} from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // inicijalno proveri
    handleResize();

    // event listener za resize
    window.addEventListener('resize', handleResize);

    // cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Prikazujemo Burgermenu samo na mobilnim */}
      {isMobile ? <Burgermenu /> : <Navbar />}

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Project/>}/>
        <Route path='/about-me' element={<AboutMe/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact-me' element={<ContactMe/>}/>
      </Routes>
    </>
  )
}

export default App

