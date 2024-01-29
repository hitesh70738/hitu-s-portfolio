import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap'; // Import all of Bootstrap's JS
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectGallery from './pages/ProjectGallery';



function App() {
  return (
  <Router>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/projects' element={<ProjectGallery />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  </Router>
  )
}

export default App
