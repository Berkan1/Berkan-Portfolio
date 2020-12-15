import './App.scss'
import AboutMe from '../src/components/about-me';
import Skills from '../src/components/skills';
import Projects from '../src/components/projects';
import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  return (
    <div>
      <div className={isDarkMode ? 'dark' : 'light'}>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={80}
          className='topright'
        />
        <AboutMe/>
        <Skills/>
        <Projects/>
      </div>
      <footer className="footer">
        
      </footer>
    </div>
  );
}

export default App;