import './Header.css';
import { cvData } from '../../data/cvData';

const Header = () => {
  const { personalInfo, summary } = cvData;

  return (
    <header className="header">
      <h1 className="name">{personalInfo.name}</h1>
      <h2 className="position">{personalInfo.title}</h2>

      <div className="contact-container">
        <a href={`mailto:${personalInfo.email}`} className="contact-item">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M22,6L12,13L2,6"/>
          </svg>
          {personalInfo.email}
        </a>
        
        <div className="contact-item">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {personalInfo.location}
        </div>
      </div>

      <div className="social-links">
        <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
          LinkedIn
        </a>
        <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer" className="social-link github">
          GitHub
        </a>
      </div>

      <p className="summary">{summary}</p>
    </header>
  );
};

export default Header;