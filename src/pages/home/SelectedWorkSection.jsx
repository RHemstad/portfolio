import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import ShowMoreToggle from '../../components/ShowMoreToggle';
import { sectionVariants, cardVariants } from './motionVariants';

/* Selected Work section — previously "Design" in the old monolithic
   Home.jsx. Content, data source (src/data/projects.js), and markup are
   unchanged; only the section id/heading were updated to match the new
   homepage structure. */
function SelectedWorkSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <motion.section
      id="work"
      className="design"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="section-content">
        <motion.h2 variants={cardVariants}>Selected Work</motion.h2>
        <div className="cards">
          {displayedProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="card design-card"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: index >= 3 ? (index - 3) * 0.1 : 0 }}
            >
              <Link to={project.link} className="card-link">
                <img
                  className="design-card-image"
                  src={project.image}
                  alt={project.title}
                />
                <h3>{project.title}</h3>
                <p className="text">{project.description}</p>
              </Link>
              <Link to={project.link} className="link-generic">
                View Case Study <ExternalLink className="link__icon" />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Show‑More / Show‑Less toggle */}
        {projects.length > 3 && (
          <ShowMoreToggle
            isOpen={showAllProjects}
            onToggle={() => setShowAllProjects((prev) => !prev)}
          />
        )}
      </div>
    </motion.section>
  );
}

export default SelectedWorkSection;
