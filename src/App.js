import { Link, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className='container'>
      <div className='background'></div>
      <header>
        <div className='heading-wrapper'>
          <h1 id='frontend'>front-end</h1>
          <h1 id='developer'>developer</h1>
          <div className='text-wrapper'>
            <p className='inter'>
              Interdisciplinary Visual Art and Pharmacy background
            </p>
            <div className='creativity'>
              <p>Creativity</p>
              <p>Simplicity</p>
              <p>Aesthetic</p>
            </div>
          </div>
          <div className='navigation'>
            <Link to='/about' className='nav-link'>
              about
            </Link>

            <Link to='/projects' className='nav-link'>
              projects
            </Link>

            <Link to='/contact' className='nav-link'>
              contact
            </Link>
          </div>
        </div>
      </header>
      <div className='components'>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
