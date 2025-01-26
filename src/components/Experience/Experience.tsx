import { useState } from 'react';
import './Experience.css';
import { cvData } from '../../data/cvData';

interface ExperienceProps {
  isPrintMode?: boolean;
}

const Experience = ({ isPrintMode = false }: ExperienceProps) => {
  const { experience } = cvData;
  const [expandedItems, setExpandedItems] = useState<number[]>(isPrintMode ? experience.map((_, i) => i) : [0]);

  const toggleItem = (index: number) => {
    if (!isPrintMode) {
      setExpandedItems(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    }
  };

  return (
    <section className="experience">
      <h2 className="section-title">Professional Experience</h2>

      <div className="timeline">
        {experience.map((job, index) => (
          <div 
            key={index} 
            className={`timeline-item ${expandedItems.includes(index) ? 'expanded' : ''}`}
          >
            <div className="timeline-content">
              <div className="job-header" onClick={() => toggleItem(index)}>
                <div className="header-flex">
                  <h3 className="role-company">
                    <span className="role">{job.role}</span> <span className="at">at</span> <span className="company">{job.company}</span>
                  </h3>
                  {!isPrintMode && (
                    <svg 
                      className={`chevron ${expandedItems.includes(index) ? 'expanded' : ''}`}
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  )}
                </div>
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