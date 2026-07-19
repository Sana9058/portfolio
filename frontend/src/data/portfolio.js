export const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend', icon: '⚛️' },
  { name: 'Next.js', level: 90, category: 'frontend', icon: '▲' },
  { name: 'JavaScript', level: 95, category: 'frontend', icon: '🟨' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend', icon: '🎨' },
//   { name: 'Redux', level: 88, category: 'frontend', icon: '🔄' },
  { name: 'HTML5/CSS3', level: 98, category: 'frontend', icon: '🌐' },

  // Backend
  { name: 'Node.js', level: 92, category: 'backend', icon: '💚' },
  { name: 'Express.js', level: 90, category: 'backend', icon: '🚀' },
  { name: 'REST APIs', level: 94, category: 'backend', icon: '🔗' },
//   { name: 'GraphQL', level: 85, category: 'backend', icon: '◈' },
  { name: 'Authentication', level: 88, category: 'backend', icon: '🔐' },

  // Database
  { name: 'MongoDB', level: 92, category: 'database', icon: '🍃' },
  { name: 'Mongoose', level: 90, category: 'database', icon: '🐿️' },
  { name: 'Firebase', level: 85, category: 'database', icon: '🔥' },

  // Tools
  { name: 'Git', level: 95, category: 'tools', icon: '📦' },
  { name: "GitHub", level: 80, category: "tools", icon: "🐙" },
  { name: 'Docker', level: 80, category: 'tools', icon: '🐳' },
  { name: 'VS Code', level: 96, category: 'tools', icon: '💻' },

  // Programming
  { name: "Java", level: 80, category: "programming", icon: "☕" },
  { name: "DSA", level: 75, category: "programming", icon: "🧩" },
  { name: "JavaScript", level: 70, category: "programming", icon: "🟨"},

  // DevOps
//   { name: 'AWS', level: 75, category: 'devops', icon: '☁️' },
  { name: 'CI/CD', level: 82, category: 'devops', icon: '🔄' },
//   { name: 'Linux', level: 85, category: 'devops', icon: '🐧' },
];

export const experiences = [
    {        
        title: "Frontend Developer Intern",
        company: "Unified Mentor Private Limited",
        location: "Remote",
        period: "2026",
        description: [
            "Built responsive, cross-browser web pages using HTML5, CSS3, and JavaScript (ES6+), ensuring consistent UI across devices.",
            "Integrated Firebase for backend services including data storage and user authentication in live web applications.",
            "Enhanced UI responsiveness and resolved cross-device rendering issues through iterative debugging on real-world projects.",
            "Collaborated using Git and GitHub for version control, branching, and code reviews in a team-based workflow.",
        ],
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Firebase",
            "Git",
            "GitHub",
        ],
    }, 
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech) - Information Technology",
    institution: "Chaudhary Charan Singh University (SCRIET)",
    location: "Meerut, Uttar Pradesh",
    period: "2023 - 2027",
    description: "Building a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Operating Systems, while developing real-world MERN stack applications and continuously strengthening full-stack software engineering skills.",
    gpa: "8.08/10.0",
  },
];

export const githubActivity = [
  {
    repo: 'sana/react-component-library',
    description: 'A modern, accessible React component library with 50+ components and full JavaScript support',
    language: 'JavaScript',
    stars: 1247,
    forks: 189,
    url: 'https://github.com/sana/react-component-library',
  },
  {
    repo: 'sana/node-api-boilerplate',
    description: 'Production-ready Node.js API boilerplate with authentication, rate limiting, and testing',
    language: 'JavaScript',
    stars: 892,
    forks: 156,
    url: 'https://github.com/sana/node-api-boilerplate',
  },
  {
    repo: 'sana/mongodb-migrations',
    description: 'Simple and powerful MongoDB migration tool for Node.js applications',
    language: 'JavaScript',
    stars: 534,
    forks: 78,
    url: 'https://github.com/sana/mongodb-migrations',
  },
  {
    repo: 'sana/cli-dashboard',
    description: 'Beautiful terminal dashboards for monitoring your Node.js applications',
    language: 'JavaScript',
    stars: 421,
    forks: 67,
    url: 'https://github.com/sana/cli-dashboard',
  },
];

export const socialLinks = {
  github: "https://github.com/Sana9058",
  linkedin: "https://www.linkedin.com/in/aijazsana/",
  email: 'aijazsana1628@gmail.com',
};
