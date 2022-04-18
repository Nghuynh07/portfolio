import About from "./components/About";
import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Title from "./components/Title";
import Form from "./projects/Form";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className='container'>
      <div className='background'></div>
      <Nav />
      <LandingPage />
      <Title title='About' name='about-heading' />
      <About />
      <Title title='Projects' name='projects-heading' />
      <Projects>
        <Routes>
          <Route path='form-project' element={<Form />} />
        </Routes>
      </Projects>
      {/* <Contact /> */}
    </div>
  );
}

export default App;
