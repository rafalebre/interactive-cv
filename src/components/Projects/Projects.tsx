import { useState, useEffect } from 'react';
import './Projects.css';
import { cvData } from '../../data/cvData';

interface ProjectsProps {
  isPrintMode?: boolean;
}

const Projects = ({ isPrintMode = false }: ProjectsProps) => {
  const { projects } = cvData;
  const [expandedItems, setExpandedItems] = useState<number[]>([0]);

  useEffect(() => {
    if (isPrintMode) {
      setExpandedItems(projects.map((_, index) => index));
    } else {
      setExpandedItems([0]);
    }
  }, [isPrintMode, projects]);

  const toggleProject = (index: number) => {
    if (!isPrintMode) {
      setExpandedItems(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    }
  };

  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`project-card ${expandedItems.includes(index) ? 'expanded' : ''}`}
            onClick={() => toggleProject(index)}
          >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
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
            <div className={`project-content ${expandedItems.includes(index) ? 'show' : ''}`}>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
                onClick={(e) => e.stopPropagation()}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;