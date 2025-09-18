import logo from './images/logos/d4logic_2_flat.jpg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from "./components/Footer.jsx"
import NavBar from "./components/NavBar.jsx"
import Projects from "./components/Projects.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import TechnologyPage from "./pages/TechnologyPage.jsx"
import ExperiencePage from "./pages/ExperiencePage.jsx"
import EducationPage from "./pages/EducationPage.jsx"
import IndustriesPage from "./pages/IndustriesPage.jsx"
import LanguagesPage from "./pages/LanguagesPage.jsx"
import Technologies from "./components/Technologies.jsx";
import CompMind from "./images/bkgrounds/compMind2.jpg";
import { useTranslation } from 'react-i18next';
import i18n from './i18n';


const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'Français' }
};

function App() {

  const { t  } = useTranslation();

  return (
    <div className="App">
        <table>
          <tbody>
{/* <header className="App-header">
 <img src={logo} className="App-logo" alt="logo" />
  <div>
    {Object.keys(lngs).map((lng) => (
      <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
        {lngs[lng].nativeName}
      </button>
    ))}
  </div>
  <p>
    <Trans i18nKey="description.part1">
      Edit <code>src/App.js</code> and save to reload.
    </Trans>
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    {t('description.part2')}
  </a>
</header> */}
      <tr>
        <td className="logo">
          <img src={logo} alt="Design4Logic logo" width="200"/> 
        </td>
        <td className="topimage" colSpan="3" valign="top" width="100%" height="100">
          <br />
        </td>
        </tr>
        <tr>
        <td colSpan="4" valign="top" align="left" className="navcolumn">
            <div>
          <NavBar />
          </div>
          </td>
        </tr>
        <tr>
          <td align="left" className="technocolumn" rowSpan="2">
            <br />
            <div>
            <Technologies />
            </div>
          </td>
          <td width="65%" rowSpan="2">
            <div id="page-body">
        <Routes>
           <Route exact path="/" element={<Navigate replace to="/about" />} /> 
           <Route exact path="/tamaramelnikova" element={<Navigate replace to="/about" />} />   
          <Route path="/about" element={< AboutPage />} />
          <Route path="/technologies" element={< TechnologyPage />} />
          <Route path="/experience" element={< ExperiencePage />} />
          <Route path="/education" element={< EducationPage />} />
          <Route path="/industries" element={< IndustriesPage />} />
          <Route path="/languages" element={< LanguagesPage />} />
        </Routes> 
      </div>
          </td>
          <td align="left" valign="top" className="projectscolumn">
          <buttons>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
            ))}
            </buttons>
            <br/>
            <img src={CompMind} alt="IT brain" width="300" height="150"/> 
            <br />
           <div>
            <Projects /> 
            </div>
          </td>
        </tr>
        </tbody>
        </table>
          <div>
            <Footer />
            </div>
    </div>
  );
}

export default App;
