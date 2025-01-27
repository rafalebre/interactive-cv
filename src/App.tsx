import { useState } from 'react';
import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
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
        <Projects isPrintMode={isPrintMode} />
      </div>
    </>
  );
}

export default App;