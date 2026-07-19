import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { education } from '../../data/portfolio';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding bg-dark-950">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="max-w-2xl mx-auto text-dark-400 text-lg">
            Foundation of technical excellence and continuous learning
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 hover-lift relative overflow-hidden group"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-500/5 to-teal-500/5 rounded-bl-full" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent-500/10 to-teal-500/10 inline-block">
                  <GraduationCap className="w-8 h-8 text-accent-400" />
                </div>
              </div>

              {/* Degree */}
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{edu.degree}</h3>

              {/* Institution */}
              <p className="text-accent-400 font-medium mb-4">{edu.institution}</p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-dark-400 mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
                {edu.gpa && (
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-teal-400" />
                    <span className="text-teal-400 font-medium">GPA: {edu.gpa}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-dark-300 leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 glass-card p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'AWS Certified Developer',
              'MongoDB Certified Developer',
              'React Advanced Certificate',
              'Node.js Professional',
            ].map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 p-4 rounded-xl bg-dark-800/50 border border-dark-700/50"
              >
                <div className="w-2 h-2 rounded-full bg-teal-500" />
                <span className="text-dark-300 text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
