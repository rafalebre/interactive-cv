import './Skills.css';
import { cvData } from '../../data/cvData';

const Skills = () => {
  const { skills } = cvData;

  return (
    <section className="skills">
      <h2 className="section-title">Professional Skills</h2>
      <div className="skills-grid">
        {skills.map((category, index) => (
          <div key={index} className="skill-card">
            <h3 className="category-title">{category.category}</h3>
            <div className="skill-tags">
              {category.items.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;