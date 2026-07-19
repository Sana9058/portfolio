import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-react';
import { navItems, socialLinks } from '../../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.a
                href="#hero"
                className="flex items-center gap-2 mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-accent-500 blur-lg opacity-50" />
                  <Code2 className="relative w-8 h-8 text-accent-400" />
                </div>
                <span className="text-xl font-bold gradient-text">Sana</span>
              </motion.a>
              <p className="text-dark-400 text-sm leading-relaxed max-w-md mb-6">
                Final-year B.Tech IT student and Aspiring Software Engineer, building full-stack web applications and solving real-world problems through code.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { icon: Github, href: socialLinks.github, label: 'GitHub' },
                  { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
                  { icon: Mail, href: `mailto:${socialLinks.email}`, label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg glass text-dark-400 hover:text-white hover:border-accent-500/30 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-dark-400 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">More</h3>
              <ul className="space-y-3">
                {navItems.slice(4).map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-dark-400 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#resume"
                    className="text-dark-400 hover:text-white transition-colors text-sm"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-dark-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-dark-500">
            <p className="flex items-center gap-1">
              <span>&copy; {currentYear} Sana. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & Tailwind</span>
            </p>
            <p className="flex items-center gap-2">
              <span>Designed for developers, by a developer</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
