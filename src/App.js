import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.css';
import Home from './View/pages/home/Home'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
    </Router>
  );
}

export default App;
