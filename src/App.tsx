import { useState } from 'react';
import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import './App.css';

function App() {
  const [isPrintMode, setIsPrintMode] = useState(false);

  const toggleMode = () => {
    setIsPrintMode(!isPrintMode);
  };

  return (
    <>
      <button 
        onClick={toggleMode} 
        className="mode-toggle"
      >
        {isPrintMode ? 'Web View' : 'PDF View'}
      </button>
      
      <div className="app">
        <Header />
        <Experience isPrintMode={isPrintMode} />
        <Projects />
        <Skills />
        <Education />
      </div>
    </>
  );
}

export default App;