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
        
        <a href={`tel:${personalInfo.phone}`} className="contact-item">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          {personalInfo.phone}
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