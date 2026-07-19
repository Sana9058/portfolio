import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Rocket, Users, Coffee, Award } from 'lucide-react';

const stats = [
  { label: 'CGPA', value: '8.08', icon: Award },
  { label: 'Projects Built', value: '3+', icon: Rocket },
  { label: 'DSA Problems solved', value: '70+', icon: Code },
  { label: 'Tech Stack Tools', value: '10+', icon: Coffee },
  { label: 'Open Source PRs', value: '5+', icon: Users },
  { label: 'GitHub Repositories', value: '15+', icon: Award },
];

const highlights = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building end-to-end solutions from concept to deployment with modern technologies using MongoDB, Express.js, React, Node.js, Firebase and REST APIs.',
  },
  {
    icon: Rocket,
    title: 'Problem Solving & DSA',
    description: 'Strengthening analytical thinking through Java-based Data Structures & Algorithms with regular coding practice on Leetcode & GeeksforGeeks',
  },
  {
    icon: Palette,
    title: 'AI-Integrated Applications',
    description: 'Enhancing web applications with AI-powered features using the Google Gemini API.',
  },
  {
    icon: Award,
    title: "Continuous Learning",
    description:
      "Passionate about modern web technologies, open-source contributions, clean code practices, Git/GitHub workflows, and software engineering fundamentals.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-dark-950">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Passionate About {' '}
            <span className="gradient-text">Software Engineering</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Profile Image Container */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-teal-500/20 rounded-3xl blur-3xl" />

              {/* Image */}
              <div className="relative glass-card p-4 h-full">
                <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900">
                  <img
                    src="/images/profile.png"
                    alt="Sana - Full-Software Engineer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-4 -right-4 glass-card px-6 py-4"
              >
                <p className="text-3xl font-bold gradient-text">2027</p>
                <p className="text-xs text-dark-400">Graduate Year</p>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-4 text-center hover-lift"
                >
                  <stat.icon className="w-6 h-6 mx-auto text-accent-400 mb-2" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-dark-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Bio */}
            <div className="space-y-4">
              <p className="text-lg text-dark-300 leading-relaxed">
                Hello! I'm <span className="text-white font-semibold">Sana</span>, a final-year
                B.Tech Information Technology student and an Aspiring Software Engineer
                with a strong interest in Full-Stack Web Development. I enjoy building modern,
                responsive, and scalable web applications that solve real-world problems.
              </p>
              <p className="text-dark-400 leading-relaxed">
                My technical expertise includes React.js, Node.js, Express.js,
                MongoDB, Firebase, JavaScript, HTML5, CSS3, Tailwind CSS,
                Git, and GitHub. I have also completed a Frontend Development
                Internship at Unified Mentor Private Limited, where I developed
                responsive user interfaces and worked on real-world web projects.
              </p>
              <p className="text-dark-400 leading-relaxed">
                Along with full-stack development, I actively practice Data Structures
                & Algorithms in Java, contribute to open-source projects, and continuously
                improve my problem-solving skills. I am currently seeking Software
                Development Engineer (SDE), Full Stack Developer, or Frontend Developer
                opportunities where I can learn, grow, and contribute to impactful products.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 glass-card hover-lift"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent-500/10 to-teal-500/10">
                    <item.icon className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-dark-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
