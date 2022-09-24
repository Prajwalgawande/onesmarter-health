import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
