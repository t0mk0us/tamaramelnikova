import logo from './images/logos/D4LogicLogo.jpg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Footer from "./components/Footer.jsx"
import NavBar from "./components/NavBar.jsx"
import Projects from "./components/Projects.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ExperiencePage from "./pages/ExperiencePage.jsx"
import EducationPage from "./pages/EducationPage.jsx"
import IndustriesPage from "./pages/IndustriesPage.jsx"
import LanguagesPage from "./pages/LanguagesPage.jsx"
import Technologies from "./components/Technologies.jsx";
import CompMind from "./images/bkgrounds/compMind2.jpg";

function App() {
  return (
    <div className="App">
        <table>
          <tr>
        <td class="logo">
          <img src={logo} alt="Design4Logic logo" width="200"/> 
        </td>
        <td class="topimage" colspan="3" valign="top" width="100%" height="100">
          <br />
        </td>
        </tr>
        <tr>
        <td colspan="4" valign="top" align="center">
            <div>
          <NavBar />
          </div>
          </td>
        </tr>
        <tr>
          <td align="left" className="technocolumn" rowspan="2">
            <br />
            <div>
            <Technologies />
            </div>
          </td>
          <td width="75%" rowSpan="2">
            <div id="page-body">
        <Routes>
          <Route path="/about" element={< AboutPage />} />
          <Route path="/experience" element={< ExperiencePage />} />
          <Route path="/education" element={< EducationPage />} />
          <Route path="/industries" element={< IndustriesPage />} />
          <Route path="/languages" element={< LanguagesPage />} />
        </Routes> 
      </div>
          </td>
          <td align="left" valign="top" className="projectscolumn">
            <img src={CompMind} alt="IT brain" width="200" height="100"/> 
            <br />
           <div>
            <Projects /> 
            </div>
          </td>
        </tr>
        </table>
          <div>
            <Footer />
            </div>
    </div>
  );
}

export default App;
