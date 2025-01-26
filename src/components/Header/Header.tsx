import "./Header.css";
import { cvData } from '../../data/cvData';

const Header: React.FC = () => {
  const { personalInfo, summary } = cvData;

  return (
    <header className="header">
      <div className="personal-info">
        <h1>{personalInfo.name}</h1>
        <h2>{personalInfo.title}</h2>
        <div className="contact-info">
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
          <p>{personalInfo.location}</p>
        </div>
        <div className="links">
          <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <p className="summary">{summary}</p>
    </header>
  );
};

export default Header;