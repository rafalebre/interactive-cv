import './Education.css';
import { cvData } from '../../data/cvData';

const Education = () => {
  const { education } = cvData;

  return (
    <section className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((item, index) => (
          <div key={index} className="education-card">
            <h3 className="degree">{item.degree}</h3>
            <div className="details">
              <span className="period">{item.period}</span>
              <div className="institution-container">
                <span className="institution">{item.institution}</span>
                {item.certificateFile && (
                  <a 
                    href={`/certificates/${item.certificateFile}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="certificate-link"
                    title="View Certificate"
                  >
                    <svg 
                      className="certificate-icon"
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2z" />
                      <path d="M9 13h6" />
                      <path d="M9 17h3" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    </svg>
                    <span>Certificate</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;