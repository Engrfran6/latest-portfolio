export const myJob = {
  jobTitle: 'Frontend Developer & UI Design Expert with Extensive API Experience',
  jobDesc2:
    'I create tailored websites designed to enhance user experience, boost engagement, and drive business growth. By leveraging modern technologies like React and Next.js, I build scalable, efficient solutions that help increase traffic and maximize sales. My focus is on delivering measurable results that streamline your processes and elevate your business.',
  jobDesc: `I design and develop custom websites that help businesses grow by improving user engagement, driving traffic, and increasing conversions. Using the latest technologies like React and Next.js, I build fast, responsive websites that are tailored to your specific needs. My solutions are scalable, efficient, and focused on delivering real value—whether that means boosting sales, enhancing user experience, or streamlining operations. Let’s collaborate to create a website that not only looks great but helps you achieve your business goals.`,
  jobDesc1: `I specialize in developing websites that not only look great but also drive business growth. 
        My goal is to help increase traffic, boost sales, and enhance user engagement with expertly crafted web solutions. 
        Using modern technologies like React, Next.js, and other cutting-edge tools, 
        I’ll build tailored websites that streamline your business processes and deliver real, 
        measurable results. Certified by Meta and HackerRank in Front-End Development, 
        I follow industry best practices to create scalable, efficient solutions. 
        With proficiency in GitFlow, I ensure smooth collaboration in any development team.
        Let’s turn your ideas into reality with clean, scalable code that powers your success.`,
};

export const education = {
  institution: 'Delta State University, Abraka',
  degree: '(BEng), Electrical/Electronics & Computer Engineering',
  year: '2008-2013',
};

export const projects = [
  {
    image: '/assets/bankdashboard.png',
    title: 'Modern Bank Dashboard',
    description:
      "This Modern Bank Dashboard showcases a clean and responsive user interface designed for financial institutions. Built using Next.js for seamless server-side rendering and client-side transitions, and powered by JavaScript for interactive features. This project highlights efficiency in managing financial data, secure authentication processes, and real-time transaction tracking. The dashboard's design focuses on user experience and accessibility, ensuring smooth navigation across multiple devices. ",
    tech: ['NextJs', 'JavaScript'],
    route: '/portfolio/project-1',
    role: 'Frontend Developer',
    livepreview: 'https//www.deulo34.vercel.app',

    snapshots: [
      '/assets/bankdashboard.png',
      '/assets/bankdashboard.png',
      '/assets/bankdashboard.png',
    ],
  },
  {
    image: '/assets/pasword-generator.jpg',
    tech: ['HTML', ' CSS', 'JavaScript'],
    title: 'Random Password Generator',
    description:
      'The Random Password Generator is a simple yet powerful tool designed to generate secure and complex passwords with just a click. Built using HTML, CSS, and JavaScript, this project focuses on both functionality and user experience. The intuitive interface allows users to customize password length and include various character sets such as numbers, symbols, and letters. This tool ensures password strength, enhancing online security and privacy across multiple platforms.',
    route: '/portfolio/project-1',
    role: 'Frontend Developer',
    livepreview: 'https//www.deulo0987654567.vercel.app',
    snapshots: [
      '/assets/pasword-generator.jpg',
      '/assets/pasword-generator.jpg',
      '/assets/pasword-generator.jpg',
    ],
  },

  {
    image: '/assets/pasword-generator.jpg',
    tech: ['NextJs', 'Redux', 'Tailwind CSS'],
    title: 'Portfolio Website',
    description:
      'This Portfolio Website is a dynamic and visually appealing personal site built using React and styled with Tailwind CSS. The project focuses on showcasing professional work, skills, and achievements in an elegant, responsive design. Utilizing React for seamless navigation and component-based architecture, and Tailwind CSS for efficient, modern styling, this portfolio demonstrates a deep understanding of both web development and design principles. The clean layout ensures optimal performance across devices, enhancing the user experience while leaving a lasting impression.',
    readingTime: '3 min read',
    route: '/portfolio/project-1',
    role: 'Frontend Developer',
    livepreview: 'https//www.deulojhgvhbncnhvc.vercel.app',
    snapshots: ['/assets/calculator.png', '/assets/calculator.png', '/assets/calculator.png'],
  },
  {
    image: '/assets/pasword-generator.jpg',
    tech: ['NextJs', 'Redux', 'JavaScript'],
    title: 'E-commerce Website',
    description:
      'This E-commerce Website provides a robust platform for online shopping, developed with Next.js for optimized performance and SEO, Redux for efficient state management, and JavaScript for interactivity. The site includes features such as product browsing, shopping cart management, and a smooth checkout process, all within a fast, responsive, and user-friendly interface. Built to scale, this platform seamlessly handles dynamic data and user interactions, ensuring an engaging shopping experience for customers.',
    readingTime: '5 min read',
    route: '/portfolio/project-1',
    role: 'Frontend Developer',
    livepreview: 'https//www.deulo.vercel.app',
    snapshots: ['/assets/portfolio4.jpg', '/assets/portfolio4.jpg', '/assets/portfolio4.jpg'],
  },
  {
    image: '/assets/bankdashboard.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    title: 'Weather App',
    description: 'Lorem ipsum dolor sit amet, co',
    route: '/portfolio/project-1',
    role: 'Frontend Developer',
    livepreview: 'https//www.deulo.vercel.app',
    snapshots: [
      '/assets/bankdashboard.png',
      '/assets/bankdashboard.png',
      '/assets/bankdashboard.png',
    ],
  },
  {
    image: '/assets/bankdashboard.png',
    tech: ['React', 'Redux', 'CSS'],
    title: 'To-Do List App',
    description: 'Lorem ipsum dolor sit amet, cons',
    readingTime: '2 min read',
    route: '/portfolio/project-1',
    role: 'Frontend Developer',
    livepreview: 'https//www.deulo.vercel.app',
    snapshots: [
      '/assets/bankdashboard.png',
      '/assets/bankdashboard.png',
      '/assets/bankdashboard.png',
    ],
  },

  {
    image: '/assets/bankdashboard.png',
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    title: 'Blog Platform',
    description: 'Lorem ipsum dolor sit amet, ',
    readingTime: '4 min read',
    route: '/portfolio/project-1',
    role: 'Frontend Developer',
    livepreview: 'https//www.deulo.vercel.app',
    snapshots: [
      '/assets/bankdashboard.png',
      '/assets/bankdashboard.png',
      '/assets/bankdashboard.png',
    ],
  },
];

interface WorkHistoryProps {
  job: string;
  date: string;
  location: string;
  workDescription: string;
  organisation: string;
}

export const workHistory: WorkHistoryProps[] = [
  {
    job: 'Web developer',
    date: '02/2024-Current',
    organisation: 'Freelancer,',
    location: 'Remote',
    workDescription: `Streamlined user experience with responsive web design, developing dynamic and interactive websites to
boost engagement. Leveraged Agile and Scrum methodologies to efficiently meet business needs,
collaborating closely with UX designers to transform designs into functional code for a seamless user
experience.
`,
  },
  {
    job: 'Frontend Developer',
    date: ' 11/2016-Current',
    organisation: ' Self-Employed, ',
    location: 'Nigeria',
    workDescription: `As a freelancer, I build dynamic, responsive web applications using Next.js, Typescript, and JavaScript
With a strong focus on performance and clean code, I utilize Tailwind for efficient styling, and manage
version control with Git and GitHub. Additionally, I streamline deployment processes through GitHub
Actions, ensuring smooth and automated workflows.
`,
  },
];

export const reviews = [
  {
    name: 'Emelugwo P.',
    role: 'Frontend Developer',
    livepreview: 'https//www.deulo.vercel.app',
    date: 'sept, 2024',
    review: `Working with Francis O. was an absolute pleasure. 
      He demonstrated a deep understanding of Typescript and Next’s, 
      delivering exceptional results. He has a unique ability to translate 
      complex requirements into sleek, intuitive interfaces, ensuring a 
      seamless user experience. Communicated, met deadlines, and adapted 
      to changes professionally.`,
  },
  {
    name: 'Ezomo A. Greg.',
    role: 'Project manager',
    livepreview: 'https//www.deulo.vercel.app',
    date: 'jan, 2019',
    review: `Working with Francis O. was an absolute pleasure. 
      He demonstrated a deep understanding of Typescript and Next’s, 
      delivering exceptional results. He has a unique ability to translate 
  .`,
  },
];

export const certifications = [
  {
    program: 'Front-End Developer (React)',
    issuer: 'HackerRank',
    Issued: 'August 2024',
    certId: '73B0BED0F7C5',
  },
  {
    program: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Coursera',
    Issued: 'April 2024',
    certId: '',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https:/github.com/Engrfran6/deulo',
  },
  {
    id: 2,
    img: '/twit.svg',
    link: 'https:/x.com/deulo',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https:/linkedin.com/in/deulo',
  },
];

export const mySkills = [
  'API Integration',
  'Website Redesign',
  'Website Copy',
  'Website Migration',
  'Domain Migration',
  'Website Optimization',
  'Website Maintenance',
  'Website & CMS Bug Fix',
  'Website Customization',
  'Ecommerce Website Development',
  'Shopify Website Design',
  'WordPress Website',
  'Firebase Cloud Firestore',
];

export const technologies = [];
