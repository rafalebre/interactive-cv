import './Projects.css';
import { cvData } from '../../data/cvData';

const Projects = () => {
  const { projects } = cvData;

  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-header">
              <div className="title-with-tech">
                <h3 className="project-title">{project.title}</h3>
                <span className="tech-list">
                  ({project.technologies.join(', ')})
                </span>
              </div>
              <div className="project-links">
                {project.deployedUrl && (
                  <a 
                    href={project.deployedUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link live"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link repo"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Code
                </a>
              </div>
            </div>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;