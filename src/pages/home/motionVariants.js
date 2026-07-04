/* Shared Framer Motion variants for the homepage sections (Selected Work
   and Writing & Speaking currently use identical timing). */
export const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
