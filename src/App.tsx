import './App.css'
import Navbar from './components/Navbar/Navbar'
import AboutMe from './pages/AboutMe/AboutMe'
import Blog from './pages/Blog/Blog'
import ContactMe from './pages/ContactMe/ContactMe'
import Home from './pages/Home/Home'
import Project from "./pages/Project/Project"
import {Route,Routes} from 'react-router-dom'


function App() {

  return (
    <>
    <Navbar/>
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
