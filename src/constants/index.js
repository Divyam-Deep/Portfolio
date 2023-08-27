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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
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
      title: "DL Developer",
      icon: mobile,
    },
    {
      title: "AR Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Spark Ar",
      icon: "src/image/ar.png",
    },
    {
      name: "Python",
      icon: "src/image/p.png",
    },
  ];
  
  const experiences = [
    {
      title: "P - Blocker",
      company_name: "JavaScript , Html , Css",
      icon: "src/image/1.png",
      iconBg: "#383E56",
      date: "March 2022",
      points: [
        "P-Blocker is a robust content filtering solution designed to enhance internet browsing experiences.",
        "It efficiently blocks intrusive ads, ensuring a cleaner and faster online environment.",
        "It goes beyond just ad-blocking; it also filters out unwanted 18+ content, making it suitable for a wide range of users, including families and organizations concerned about internet safety.",
      ],
      
    },
    {
      title: "AR Music Albums",
      company_name: "Javascript and Typescript",
      icon: "src/image/2.png",
      iconBg: "#E6DEDD",
      date: "Jun 2022",
      points: [
        "The Augmented Reality Music Album offers a truly immersive and interactive way to experience music.",
        "By simply scanning the album cover with a compatible device, users are transported into a rich, immersive world that complements the music.",
        "As the music plays, dynamic visuals, animations, and interactive elements come to life around them, creating a truly unique and immersive audio-visual experience.",
      ],
    },
    {
      title: "Personalized-Product-Recommendations",
      company_name: "Python",
      icon: "src/image/3.png",
      iconBg: "#383E56",
      date: "Sep 2022",
      points: [
        "Tis all about enhancing the online shopping experience. By analyzing user behavior, preferences, and historical data, the system generates personalized product suggestions for each individual. ",
        "The system utilizes collaborative filtering and content-based filtering algorithms to analyze user behavior and generate relevant recommendations.",
        "This tailoring ensures that users are presented with products that align with their interests and needs, ultimately increasing the likelihood of a successful purchase.",
      ],
    },
    {
      title: "Spotify-AdBlocker",
      company_name: "JavaScript , Html , Css",
      icon: "src/image/4.png",
      iconBg: "#E6DEDD",
      date: "Jan 2023",
      points: [
        "It is designed to enhance the Spotify experience for users by providing seamless, uninterrupted music playback.",
        "It blocks requests to domains that are not on the allowlist, as well as URLs that are on the denylist.",
        "It is optimized to work efficiently on low-end devices ",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AR Game Developer Intern",
      description:
        "I Developed AR for Bolt IoT",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
      ],
      image: "src/image/c2.jpg",
    },
    {
      name: "Artificial Intelligence Intern",
      description:
        "I have worked on CNN, NLP",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: "src/image/c3.jpg",
    },
    {
      name: "Full Stack Web Dev Intern",
      description:
        "I have worked as an Full Stack Web Devloper ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Node",
          color: "orange-text-gradient",
        },
      ],
      image: "src/image/C1.png"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };