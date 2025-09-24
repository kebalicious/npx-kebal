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
        // Top 5 (in order)
        {
            id: 1,
            name: 'E-Commerce + Barter Platform',
            description: 'An innovative hybrid system that combines traditional e-commerce functionality with modern barter trading capabilities. Users can both purchase items with money or trade goods/services directly with other users, creating a flexible marketplace ecosystem.',
            technologies: ['Laravel 12', 'Vue 3', 'Tailwind CSS', 'SASS', 'SCSS', 'JavaScript', 'AWS S3', 'MongoDB'],
            status: 'In Development',
            category: 'Web Development',
            link: null,
            completed_date: 'Started: September 2025'
        },
        {
            id: 2,
            name: 'Hayya - Ibadah Journal App',
            description: 'Ibadah journal app that shows all related to your ibadah (solat, fasting, zikir, Quran, etc.). Focused on iOS users with Swift + SwiftUI.',
            technologies: ['iOS', 'Swift', 'SwiftUI', 'App Store'],
            status: 'In Development',
            category: 'Mobile Development',
            link: null,
            completed_date: 'Target: October 2025'
        },
        {
            id: 3,
            name: 'vue3-daterange-picker',
            description: 'Vue 3 daterange picker npm package for easy date range selection in Vue.js applications.',
            technologies: ['Vue 3', 'SCSS', 'JavaScript', 'NPM Package'],
            status: 'Completed',
            category: 'Open Source',
            link: 'https://www.npmjs.com/package/@kebalicious/vue3-daterange-picker',
            github: 'https://github.com/kebalicious/vue3-daterange-picker',
            completed_date: 'September 2025'
        },
        {
            id: 4,
            name: 'Split Bill',
            description: 'Split your bill easily. Since this apps focus on mobile responsive, experience while using it in desktop or tablet might not as good as on mobile.',
            technologies: ['Vue 3', 'Nuxt 3', 'Tailwind CSS', 'JavaScript'],
            status: 'Completed',
            category: 'PWA',
            link: 'https://split-bill.kebal.my',
            completed_date: 'May 2025'
        },
        {
            id: 5,
            name: 'My e-Plate',
            description: 'Kebal\'s project \'My e-Plate\' is a web development project (Featured Project) was completed on June 2025.',
            technologies: ['Vue 3', 'Nuxt 3', 'Tailwind CSS', 'JavaScript'],
            status: 'Completed',
            category: 'Web Development',
            link: 'https://myeplate.kebal.my/',
            completed_date: 'June 2025'
        },
        // The rest (order preserved)
        {
            id: 6,
            name: 'GitHub Receipt Generator',
            description: 'A beautiful web application that generates a receipt-style visualization of your GitHub profile statistics.',
            technologies: ['Vue 3', 'Nuxt 3', 'Tailwind CSS', 'JavaScript', 'JsBarcode', 'html2canvas'],
            status: 'Completed',
            category: 'Web Development',
            link: 'https://receipt.kebal.my/',
            completed_date: 'May 2025'
        },
        {
            id: 7,
            name: 'Voting System',
            description: 'A voting system application built with modern web technologies.',
            technologies: ['Vue 3', 'Nuxt 3', 'Tailwind CSS', 'JavaScript'],
            status: 'In Development',
            category: 'Web Development',
            link: 'https://voting.kebal.my',
            completed_date: null
        },
        {
            id: 8,
            name: 'Cakap - Social Network',
            description: 'Social network that combines X/Threads style with Clubhouse features.',
            technologies: ['Laravel', 'Vue.js', 'Tailwind CSS', 'Social Network'],
            status: 'In Development',
            category: 'Web Development',
            link: null,
            completed_date: null
        },
        {
            id: 9,
            name: 'Noktah - Note Taking App',
            description: 'Note taking app for Android.',
            technologies: ['Android', 'Kotlin'],
            status: 'Planned',
            category: 'Mobile Development',
            link: null,
            completed_date: null
        },
        {
            id: 10,
            name: 'Cuwaca - Weather Forecast App',
            description: 'Weather forecast app for Android.',
            technologies: ['Android', 'Kotlin', 'Weather API'],
            status: 'Planned',
            category: 'Mobile Development',
            link: null,
            completed_date: null
        },
        {
            id: 11,
            name: 'Sampe - Clock-in/Clock-out App',
            description: 'Clock-in, clock-out app with countdown timer and one time card link for Android.',
            technologies: ['Android', 'Kotlin', 'Timer', 'QR Code'],
            status: 'Planned',
            category: 'Mobile Development',
            link: null,
            completed_date: null
        },
        {
            id: 12,
            name: 'NPX Business Card',
            description: 'Interactive terminal-based business card you\'re using right now!',
            technologies: ['Node.js', 'Chalk', 'Inquirer'],
            status: 'Production',
            category: 'CLI Tool',
            link: 'github.com/kebalicious/npx-kebal',
            completed_date: 'September 2025'
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