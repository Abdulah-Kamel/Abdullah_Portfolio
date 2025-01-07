import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  php,
  git,
  figma,
  docker,
  meta,
  starbucks,
  freelance,
  tesla,
  shopify,
  freshcart,
  MovieLand,
  NotesApp,
  laravel,
  nike,
  Yummy,
  dainels,
} from "../assets/index.js";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React, React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "March 2023 - Jun 2023",
    points: [
      "Built responsive and dynamic web applications using React.js, integrating APIs and state management solutions.",
      "Collaborated with designers and product managers to translate UI/UX wireframes into functional and performant features.",
      "Ensured applications were cross-browser compatible, delivering seamless user experiences across devices.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "July 2023 - September 2023",
    points: [
      "Developed cross-platform mobile applications using React Native to ensure consistent performance on iOS and Android.",
      "Integrated third-party libraries and APIs to add functionality, enhancing user engagement and app responsiveness.",
      "Worked closely with stakeholders to gather requirements, troubleshoot issues, and refine app interfaces.",
    ],
  },
  {
    title: "Laravel Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#383E56",
    date: "Oct 2023 - Jan 2024",
    points: [
      "Built and maintained full-stack web applications with Laravel, ensuring scalability and optimal performance.",
      "Created and managed relational databases, optimized queries, and implemented robust back-end APIs.",
      "Collaborated with front-end developers to integrate user-facing elements, maintaining clean and modular code.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Designed and developed end-to-end solutions, integrating front-end and back-end technologies for seamless performance.",
      "Deployed and maintained cloud-hosted applications, managing security, scalability, and server configurations.",
      "Worked with clients to gather feedback, implement new features, and continuously improve the product lifecycle.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abdullah proved me wrong.",
    name: "dany hernandez",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abdullah does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Abdullah optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "tony rodriguez",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Fresh Cart",
    description:
      "Web-based e-commerce platform that allows users to search, buy, and manage products from  best groceries stores, providing secure online shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: freshcart,
    source_code_link: "https://freshcart.vercel.app/",
  },
  {
    name: "Movie Land",
    description:
      "Web application that enables users to search for popular movies, see movie details, and read about the cast and crew of the selected movie from The Movie Database (TMDB).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MovieDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: MovieLand,
    source_code_link: "https://movie-land-virid.vercel.app/",
  },
  {
    name: "Notes App",
    description:
      "Web application that allows users to create, read, update, and delete notes. It provides a simple and user-friendly interface for organizing and managing notes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: NotesApp,
    source_code_link: "https://notespad.vercel.app/",
  },
  {
    name: "Nike Landing Page",
    description:
      "Nike Landing Page – A fully responsive, modern landing page built with HTML, CSS, and JavaScript. Designed to reflect Nike’s branding through sleek layouts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://nike-landing213.vercel.app/",
  },
  {
    name: "Yummy",
    description:
      "Yummy – A recipe web app providing seamless browsing and filtering options for dishes worldwide. it offers an intuitive design and responsive layout for food enthusiasts.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: Yummy,
    source_code_link: "https://abdulah-kamel.github.io/Yummy/",
  },
  {
    name: "Daniels Portfolio",
    description:
      "Daniels Portfolio – A responsive portfolio highlighting web design, development. it offers interactive project showcases and professional presentation.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: dainels,
    source_code_link: "https://abdulah-kamel.github.io/Daniels-Portfolio/",
  },
];

export { services, technologies, experiences, testimonials, projects };
