import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { writing } from '../../data/writing';
import ShowMoreToggle from '../../components/ShowMoreToggle';
import { sectionVariants, cardVariants } from './motionVariants';

const getTypeLabel = (type) => {
  const labels = {
    article: 'Article',
    keynote: 'Keynote',
    workshop: 'Workshop',
    presentation: 'Presentation',
  };
  return labels[type] || type;
};

/* Writing & Speaking section — content and data source
   (src/data/writing.js) unchanged from the previous Home.jsx, including
   the three real entries and the three "Lorem Ipsum" placeholder entries
   already present in the data file (not introduced by this refactor). */
function WritingSpeakingSection() {
  const [showAllWriting, setShowAllWriting] = useState(false);
  const displayedWriting = showAllWriting ? writing : writing.slice(0, 3);

  return (
    <motion.section
      id="writing-speaking"
      className="writing"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="section-content">
        <motion.h2 variants={cardVariants}>Writing &amp; Speaking</motion.h2>
        <div className="cards">
          {displayedWriting.map((item, index) => (
            <motion.article
              key={item.id}
              className="card writing-card"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: index >= 3 ? (index - 3) * 0.1 : 0 }}
            >
              <Link to={item.link} className="card-link">
                <div className="writing-card-meta">
                  <span className="badge">{getTypeLabel(item.type)}</span>
                  <span className="date">{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="text">{item.description}</p>
              </Link>
              <a href={item.link} className="link-generic">
                {item.type === 'article' ? 'Read' : 'Details'}
                <ExternalLink className="link__icon" />
              </a>
            </motion.article>
          ))}
        </div>

        {/* Show‑More / Show‑Less toggle */}
        {writing.length > 3 && (
          <ShowMoreToggle
            isOpen={showAllWriting}
            onToggle={() => setShowAllWriting((prev) => !prev)}
          />
        )}
      </div>
    </motion.section>
  );
}

export default WritingSpeakingSection;
