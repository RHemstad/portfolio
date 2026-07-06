import { motion } from 'framer-motion';

/* ────────────────────────────────────────────────
   Re‑usable Show‑More / Show‑Less toggle button
   ──────────────────────────────────────────────── */
function ShowMoreToggle({ isOpen, onToggle }) {
  return (
    <motion.div
      className="button-center"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className={`button-primary ${isOpen ? 'open' : ''}`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.18 }}
      >
        <span className="label">{isOpen ? 'Show Less' : 'Show More'}</span>
        <motion.svg
          className="chevron"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.18 }}
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" />
        </motion.svg>
      </motion.button>
    </motion.div>
  );
}

export default ShowMoreToggle;
