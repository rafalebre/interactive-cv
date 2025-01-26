import './Experience.css';
import { cvData } from '../../data/cvData';

const Experience = () => {
    const { experience } = cvData;
  
    return (
      <section className="experience">
        <h2 className="section-title">Professional Experience</h2>
  
        <div className="timeline">
          {experience.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="role-company">
                    <span className="role">{job.role}</span> at <span className="company">{job.company}</span>
                  </h3>
                  <div className="job-info">
                    <span className="period">{job.period}</span>
                    <span className="location">{job.location}</span>
                  </div>
                </div>
                <ul className="achievements">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Experience;