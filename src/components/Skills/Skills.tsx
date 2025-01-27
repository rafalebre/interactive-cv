import './Skills.css';
import { cvData } from '../../data/cvData';

const Skills = () => {
  const { skills } = cvData;

  return (
    <section className="skills">
      <h2 className="section-title">Professional Skills</h2>
      <div className="skills-container">
        {skills.map((category, index) => (
          <div key={index} className="skill-category">
            <span className="category-title">{category.category}</span>
            <span className="skill-items">
              {category.items.join(' • ')}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;