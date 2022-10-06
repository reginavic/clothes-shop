import React from 'react';
import {
BrowserRouter as Router,
Routes,
Route,
link 
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import './App.css';

function App() {

return(<Router>

  <nav>
    <link className="link" to='/'>Home</link>
    <link className="link" to='/About'>About us</link>
    <link className="link" to='/Contacts'>Contacts us</link>
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


