import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { skills } from '../../data/portfolio';

const categoryLabels = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  tools: 'Tools',
  programming: 'Programming',
  devops: 'DevOps',
};

const categoryColors = {
  frontend: 'from-accent-500/10 to-accent-600/10',
  backend: 'from-teal-500/10 to-teal-600/10',
  database: 'from-emerald-500/10 to-emerald-600/10',
  tools: 'from-amber-500/10 to-amber-600/10',
  programming: 'from-violet-500/10 to-purple-600/10',
  devops: 'from-rose-500/10 to-rose-600/10',
};

const categoryBorderColors = {
  frontend: 'border-accent-500/20',
  backend: 'border-teal-500/20',
  database: 'border-emerald-500/20',
  tools: 'border-amber-500/20',
  programming: 'border-violet-500/20',
  devops: 'border-rose-500/20',
};

const categoryBarColors = {
  frontend: 'from-accent-500 to-accent-400',
  backend: 'from-teal-500 to-teal-400',
  database: 'from-emerald-500 to-emerald-400',
  tools: 'from-amber-500 to-amber-400',
  programming: 'from-violet-500 to-purple-400',
  devops: 'from-rose-500 to-rose-400',
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', ...Object.keys(categoryLabels)];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="max-w-2xl mx-auto text-dark-400 text-lg">
            Hands-on experience with modern technologies used to build scalable, responsive, and production-ready web applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-accent-500 text-white'
                  : 'text-dark-400 hover:text-white hover:bg-dark-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'All Skills' : categoryLabels[category]}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${skill.category}-${skill.name}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`glass-card p-5 hover-lift bg-gradient-to-br ${categoryColors[skill.category]} border ${categoryBorderColors[skill.category]}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-white">{skill.name}</h3>
                </div>
                <span className="text-sm font-medium text-dark-400">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 bg-dark-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                  className={`h-full rounded-full bg-gradient-to-r ${categoryBarColors[skill.category]}`}
                />
              </div>

              {/* Category Badge */}
              <div className="mt-3">
                <span className="text-xs text-dark-500">{categoryLabels[skill.category]}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 glass-card p-6 text-center"
        >
          <p className="text-dark-300">
            Continuously learning modern technologies through real-world projects.
            Currently exploring{' '}
            <span className="text-accent-400 font-medium">
              AI-powered applications
            </span>{' '}
            while expanding my skills in{' '}
            <span className="text-teal-400 font-medium">
              Docker, AWS Cloud, and scalable software development
            </span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
