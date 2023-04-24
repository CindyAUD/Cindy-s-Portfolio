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
    mongodb,
    git,
    carepay,
    ethindia,
    ilab,
    upwork,
    
    
    figma,
    docker,
    advice,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
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
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Telecom AI",
      icon: backend,
    },
    {
      title: "Cloud Developer",
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
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
      title: "Full stack Developer - Freelancer",
      company_name: "Upwork",
      icon: upwork,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Present",
      points: [
        "Developing and maintaining web applications using React.js, tailwindcss, typescript, threejs and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Python Developer",
      company_name: "CarePay",
      icon: carepay,
      iconBg: "#383E56",
      date: "April 2021 - October 2021",
      points: [
        "Developing and maintaining web applications using Flask, React.js and other related technologies.",
        "Designed a user interface to implement pre-existing back-end functionality using python frameworks like Tkinter and PyQt5",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Planned and coordinated panels on web scraping for audiences of 2-5 clients on a bi-monthly bases",
        "Facilitated a linear regression system using numpy to analyze and predict crypto performance; actuated the vision of machine learning concepts.",
        
      ],
    },
    {
      title: "Software Engineer",
      company_name: "ETH India",
      icon: ethindia,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - August 2022",
      points: [
        "Coded and improved simple and repetitive software deployment and testing processes using Jenkins,increasing quality of delivery by 7%.",
        "Devised a board support package that strengthened Linux kernel services and routines across 2 technical departments.",
        "Expedited a user interface to compute time complexity in algorithms reducing time from O(n2) to O (n logn).",
        " Demonstrated python efficiency by coding a google authentication system using Django and a sqlite3 database; aided reset services.",
        "Elaborated basic functionality for the architectural design stage process; provided a dedicated purpose for each component that described communication methods between algorithms and data structures.",
      ],
    },
    {
      title: "Cyber Security Intern",
      company_name: "iLab Africa",
      icon: ilab,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Implemented a self-sovereign identity software based on blockchain that manages, controls and secures electronic health records cutting down paper-work by 40%",
        "Redesigned a digital identity management system to store and secure digital evidence on the cloud, improving ease of access in court proceedings. Applied in 2 Kenyan local courts.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Cindy proved me wrong.",
      name: "Sara Lee",
      designation: "Client",
      company: "Upwork",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Cindy does.",
      name: "Louis Jab",
      designation: "Client",
      company: "Upwork",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Cindy optimized our website, our traffic increased by 50%. We can't thank her enough!",
      name: "Lisa ",
      designation: "Client",
      company: "Upwork",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Random Quote Generator",
      description:
        "Web-based platform that allows users to get free quotes and advice from an API.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "JSON",
          color: "pink-text-gradient",
        },
      ],
      image: advice,
      source_code_link: "https://github.com/CindyAUD/randomQuoteGenerator",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };