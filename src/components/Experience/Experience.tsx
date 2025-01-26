import { useState } from 'react';
import './Experience.css';
import { cvData } from '../../data/cvData';

const Experience = () => {
  const { experience } = cvData;
  const [expandedItems, setExpandedItems] = useState<number[]>([0]); // Primeiro item expandido por padrão

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="experience">
      <h2 className="section-title">Professional Experience</h2>

      <div className="timeline">
        {experience.map((job, index) => (
          <div 
            key={index} 
            className={`timeline-item ${expandedItems.includes(index) ? 'expanded' : ''}`}
            onClick={() => toggleItem(index)}
          >
            <div className="timeline-content">
              <div className="job-header">
                <h3 className="role-company">
                  <span className="role">{job.role}</span> <span className="at">at</span> <span className="company">{job.company}</span>
                </h3>
                <div className="job-info">
                  <span className="period">{job.period}</span>
                  <span className="location">{job.location}</span>
                </div>
              </div>
              <ul className={`achievements ${expandedItems.includes(index) ? 'show' : ''}`}>
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