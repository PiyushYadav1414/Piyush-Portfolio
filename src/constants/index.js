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
  kd,
  safehand,
  carrent,
  jobit,
  mobiride,
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
    title: "ML Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
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
    title: "Full Stack Developer",
    company_name: "KD Electronics Canada",
    icon: kd,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Developed a comprehensive e-commerce platform using MEAN stack, integrating Stripe for secure payments and implementing real-time order tracking.",
      "Enhanced user engagement by 25% through responsive design and intuitive UI, resulting in a 15% increase in conversion rates.",
      "Implemented an admin dashboard, dynamic filtering, and optimized search system, improving product discoverability and ease of navigation.",
      "Continuously updated the platform with new products and features, including Schlage smart locks, leading to a 20% increase in average order value.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Safe Hands Sydeny Australia",
    icon: safehand,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - April 2023",
    points: [
      "Developed ChatHub, a secure HIPAA-compliant messaging platform for caregivers using MERN stack, resulting in a 40% improvement in caregiver-patient communication efficiency.",
      "Implemented end-to-end encryption and JWT authentication, ensuring 100% HIPAA compliance and protecting patient data.",
      "Optimized mobile application performance, leading to a 50% increase in daily active users and a 25% reduction in urgent care communication response time",
      "Designed responsive user interface with advanced features like multi-language support and real-time translation, enhancing overall user experience and platform accessibility.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Piyush proved me wrong.",
    name: "Dinesh",
    designation: "CCO",
    company: "Safe Hands",
    image: "puneet4.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Piyush does.",
    name: "Kanwalpreet Singh",
    designation: "Marketing Lead",
    company: "KD Store",
    image: "kanwal.png",
  },
  {
    testimonial:
      "After Piyush optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Karandeep Singh",
    designation: "Founder & CEO",
    company: "KD Store",
    image: "karandeep.png",
  },
];

const projects = [
  {
    name: "ShopEasy",
    description:
      "Full-featured e-commerce platform built with MEAN stack, offering secure Stripe payments, real-time order tracking, and a responsive design. Includes advanced features like wishlist functionality and dynamic product filtering.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/PiyushYadav1414/ShopEasy-Ecoom-Website",
    live_demo_link: "https://piyush-shopeasy-ecoom-website.onrender.com"
  },
  {
    name: "ChatHub",
    description:
      "AI-powered image generation platform using MERN stack and DALL·E AI. Features community sharing, optimized image processing, and an intuitive user interface for creating unique visuals based on user prompts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "dall-e",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },

    ],
    image: jobit,
    source_code_link: "https://github.com/PiyushYadav1414/piyush-VisionaryAI",
    live_demo_link: "https://piyush-visionaryai-frontend.onrender.com"
  },
  {
    name: "VisionaryAI",
    description:
      "Real-time messaging application using MERN stack and Socket.IO. Features end-to-end encryption, HIPAA compliance, and mobile optimization. Implemented customizable UI, increasing user engagement and overall satisfaction.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/PiyushYadav1414/ChatWithPiyush-chat-app",
    live_demo_link: "https://chathub-chat-app.onrender.com"
  },
  {
    name: "MobiRide",
    description:
     "MobiRide is a ride-hailing platform for booking rides, tracking drivers in real-time, and managing ride history. Built with React, Express.js, and Socket.IO, it offers smooth interactions. MongoDB efficiently handles user and ride data for both riders and drivers.",
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
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "orange-text-gradient",
      },
    ],
    image: mobiride,
    source_code_link: "https://github.com/PiyushYadav1414/Mobiride",
    live_demo_link: "https://mobiride-piyush-frontend.onrender.com"
  },
];

export { services, technologies, experiences, testimonials, projects };
