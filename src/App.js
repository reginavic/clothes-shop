import React from 'react';
import {
BrowserRouter as Router,
Routes,
Route,
Link 
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import './App.css';

function App() {

return(<Router>

  <nav>
    <Link className="link" to='/'>Home</Link>
    <Link className="link" to='/About'>About us</Link>
    <Link className="link" to='/Contacts'>Contacts us</Link>
  </nav>

  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Contacts' element={<Contacts />} />
  </Routes>
</Router>

)
}

export default App;


