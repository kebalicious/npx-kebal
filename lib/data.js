module.exports = {
    // ASCII Art for KEBAL
    asciiArt: `
██╗  ██╗███████╗██████╗  █████╗ ██╗     
██║ ██╔╝██╔════╝██╔══██╗██╔══██╗██║     
█████╔╝ █████╗  ██████╔╝███████║██║     
██╔═██╗ ██╔══╝  ██╔══██╗██╔══██║██║     
██║  ██╗███████╗██████╔╝██║  ██║███████╗
╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝`,
    
    // Profile Information
    profile: {
        name: 'Kebal',
        fullName: 'Muhamad Iqbal Hakim',
        title: 'Full Stack Developer',
        location: 'Shah Alam, Malaysia',
        timezone: 'Asia/Kuala_Lumpur',
        pronouns: 'he/him/his',
        tagline: 'Coding • Development • Innovation',
        aboutMe: 'Since 2019. Coding is my everyday pill. A cup of coffee or tea is my spirit booster. Learning is my passion.',
        interests: ['open source', 'cybersecurity', 'ecommerce', 'artificial intelligence', 'fintech', 'web development']
    },

    // Contact & Links
    contact: {
        website: 'https://kebalicious.link',
        linkedin: 'https://www.linkedin.com/in/miqbalhakim',
        github: 'https://github.com/kebalicious',
        codepen: 'https://codepen.io/kebalicious',
        email: 'Available via contact form'
    },

    // Projects Portfolio
    projects: [
        {
            id: 1,
            name: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with modern payment integration',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            status: 'Production',
            link: 'Private Repository'
        },
        {
            id: 2,
            name: 'Cybersecurity Dashboard',
            description: 'Real-time security monitoring and threat detection system',
            technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
            status: 'Development',
            link: 'github.com/kebalicious'
        },
        {
            id: 3,
            name: 'AI-Powered Fintech App',
            description: 'Mobile app for financial management with AI insights',
            technologies: ['React Native', 'TensorFlow', 'Firebase', 'AWS'],
            status: 'Beta',
            link: 'Coming Soon'
        },
        {
            id: 4,
            name: 'NPX Business Card',
            description: 'Interactive terminal-based business card you\'re using right now!',
            technologies: ['Node.js', 'Chalk', 'Inquirer'],
            status: 'Production',
            link: 'github.com/kebalicious/npx-kebal'
        }
    ],

    // Work Experience
    experience: [
        {
            id: 1,
            company: 'GeneJunction Sdn Bhd',
            role: 'Full Stack Developer',
            period: 'Nov 2022 - Present',
            description: 'Current role focusing on full-stack development and system integration',
            achievements: [
                'Discuss project workflow, task management, and system interface',
                'Integrate APIs for secure communication between mobile apps and the web system',
                'Create components using Vue.js 3, Bootstrap 5 and Tailwind CSS 3, ensuring responsive design',
                'Create the layout, components, and functionality for the portal',
                'Develop reusable components for modules, ensuring code quality and accessibility',
                'Identify and resolve issues promptly'
            ]
        },
        {
            id: 2,
            company: 'Content Capital Sdn Bhd',
            role: 'System Developer',
            period: 'Sept 2019 – Oct 2022',
            description: 'Developed scalable systems and provided technical leadership',
            achievements: [
                'Understand client needs and preferences for the system',
                'Create a scalable and efficient system using Laravel',
                'Develop APIs for mobile application integration',
                'Ensure smooth collaboration and code updates through GitHub',
                'Provide support and guidance to other developers',
                'Set up and configure a Linux server for hosting the system',
                'Create documentation and presentations for testing'
            ]
        },
        {
            id: 3,
            company: 'PEMY Sdn Bhd',
            role: 'Junior Web Developer',
            period: 'Mar 2019 – June 2019',
            description: 'E-commerce development and digital marketing',
            achievements: [
                'Setup and develop new e-Commerce websites',
                'Improve and optimize website\'s search engine optimization (SEO)',
                'Maintain and update website for daily campaigns and promotions',
                'Make changes on website, such as modify the layouts and pages, positions, etc.',
                'Create and schedule Electronic Direct Mail (EDM) newsletters for weekly promotions and campaigns',
                'Create and edit banners and images for marketing purposes',
                'Research on templates, layouts, plugins for new e-Commerce websites'
            ]
        },
        {
            id: 4,
            company: 'AMTIS Solutions Sdn Bhd',
            role: 'Internship',
            period: 'Dec 2017 – May 2018',
            description: 'Learning and development internship program',
            achievements: [
                'Develop Yii2 systems',
                'Analyse databases',
                'Run unit testing'
            ]
        }
    ],

    // Education
    education: [
        {
            id: 1,
            institution: 'Universiti Teknologi MARA (UiTM), Shah Alam',
            degree: 'Bachelor of Computer Science (Hons.)',
            field: 'Computer Science',
            period: 'Sept 2024 – present (part-time)',
            location: 'Shah Alam, Selangor',
            status: 'Current',
            achievements: [
                'Currently pursuing degree part-time',
                'Balancing work and studies',
                'Advancing knowledge in computer science'
            ]
        },
        {
            id: 2,
            institution: 'Melaka International College of Science & Technology (MiCoST)',
            degree: 'Diploma in Computer Science (Open-Source Computing)',
            field: 'Open-Source Computing',
            period: 'June 2015 – June 2018',
            location: 'Melaka',
            status: 'Completed',
            achievements: [
                'Specialized in open-source technologies',
                'Strong foundation in computer science principles',
                'Prepared for industry work'
            ]
        }
    ],

    // Technical Skills
    skills: {
        languages: ['PHP', 'Javascript', 'Swift'],
        frameworks: ['Laravel', 'Vue.js', 'Nuxt.js', 'Alpine.js', 'Inertia.js'],
        frontend: ['TailwindCSS', 'Bootstrap 5', 'CSS/SASS/SCSS', 'Shadcdn', 'Mobile responsiveness'],
        databases: ['MySQL/MariaDB', 'MongoDB', 'SQLite', 'Redis', 'AWS DocumentDB'],
        cloud_services: ['AWS EC2', 'AWS S3', 'Heroku', 'Cloudflare'],
        tools: ['Git', 'GitHub Actions', 'Postman/Insomnia', 'Webpack', 'CI/CD', 'Windows Subsystem Linux'],
        cms_platforms: ['WordPress'],
        design_tools: ['Canva', 'Photopea', 'Adobe Photoshop', 'Figma'],
        integrations: ['Stripe integration', 'RESTful API', 'Telegram Bot Integration', 'Google Tag Manager', 'Google Analytics'],
        methodologies: ['MVC', 'MVVM'],
        platforms: ['Linux server deployment', 'Ubuntu', 'Android'],
        project_management: ['Monday.com'],
        specialties: ['Search Engine Optimization', 'AI Development Tools', 'Willingness to learn']
    },

    // Interests & Hobbies
    interests: [
        'Open source development',
        'Cybersecurity research', 
        'E-commerce solutions',
        'Artificial intelligence',
        'Fintech applications',
        'Web development trends',
        'Learning new technologies',
        'Coffee and tea appreciation',
        'Problem solving',
        'System optimization'
    ]
}