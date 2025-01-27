import './Education.css';
import { cvData } from '../../data/cvData';

const Education = () => {
  const { education } = cvData;

  return (
    <section className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {education.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-info">
              <span className="degree">{item.degree}</span>
              <span className="institution">{item.institution}</span>
            </div>
            <span className="period">{item.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;