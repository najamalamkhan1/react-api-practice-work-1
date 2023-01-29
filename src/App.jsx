import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='main' element={<Main />} />
        <Route path='about' element={<About />} />
        <Route path='contactus' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
