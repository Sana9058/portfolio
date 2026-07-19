import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="section-padding bg-dark-950">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 lg:p-12 text-center relative overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl" />
          </div>

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-8"
          >
            <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-accent-500/10 to-teal-500/10">
              <FileText className="w-12 h-12 text-accent-400" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Interested in working together?
            </h2>
            <p className="text-dark-400 mb-8 max-w-xl mx-auto">
              I'm actively seeking Software Engineering and Full-Stack Development opportunities.
              Feel free to download my resume or get in touch.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/Sana_Aijaz_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-accent-500 to-teal-500 rounded-xl font-semibold text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>View Resume</span>
              </motion.a>

              <motion.a
                href="#contact"
                className="flex items-center gap-3 px-6 py-4 border border-dark-700 rounded-xl font-semibold text-dark-300 hover:text-white hover:border-accent-500/50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-5 h-5" />
                <span>Contact Me</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 pt-8 border-t border-dark-800"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">100+</p>
                <p className="text-sm text-dark-500">DSA Problems</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="text-sm text-dark-500">Merged PRs</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">6+</p>
                <p className="text-sm text-dark-500">Projects</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}