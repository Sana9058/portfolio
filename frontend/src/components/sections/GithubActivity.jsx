import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';
import { githubActivity } from '../../data/portfolio';

const languageColors = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  Rust: '#dea584',
  Go: '#00add8',
};

export default function GitHubActivity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="github" className="section-padding bg-dark-900">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            Open Source
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">GitHub</span> Activity
          </h2>
          <p className="max-w-2xl mx-auto text-dark-400 text-lg">
            Contributing to the developer community with open-source projects
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {[
            { label: 'Repositories', value: '45+' },
            { label: 'Total Stars', value: '3.1K+' },
            { label: 'Contributions', value: '1.2K+' },
            { label: 'Followers', value: '850+' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-dark-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Featured Repos */}
        <div className="grid md:grid-cols-2 gap-6">
          {githubActivity.map((repo, index) => (
            <motion.a
              key={repo.repo}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 hover-lift group block"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Github className="w-6 h-6 text-dark-400 group-hover:text-white transition-colors" />
                  <span className="font-semibold text-white group-hover:text-accent-400 transition-colors">
                    {repo.repo.replace('sana/', '')}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-dark-600 group-hover:text-accent-400 transition-colors" />
              </div>

              {/* Description */}
              <p className="text-dark-400 text-sm mb-4 line-clamp-2">{repo.description}</p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Language */}
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: languageColors[repo.language] || '#6e7681',
                      }}
                    />
                    <span className="text-xs text-dark-400">{repo.language}</span>
                  </div>
                </div>

                {/* Stars & Forks */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-dark-500 group-hover:text-yellow-500 transition-colors">
                    <Star className="w-4 h-4" />
                    <span className="text-xs">{repo.stars.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1 text-dark-500 group-hover:text-dark-300 transition-colors">
                    <GitFork className="w-4 h-4" />
                    <span className="text-xs">{repo.forks}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View Profile Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Sana9058"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-dark-700 rounded-xl text-dark-300 hover:text-white hover:border-accent-500/50 transition-all"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View Full Profile</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
