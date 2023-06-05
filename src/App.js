import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.css';
import Home from './View/pages/home/Home'
import About from './View/pages/about/About'
import Blog from './View/pages/blog/Blog'
import Gallery from './View/pages/gallery/Gallery'
import Contact from './View/pages/contact/Contact'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/contact-us' element={<Contact />}/>
        </Routes>
    </Router>
  );
}

export default App;
