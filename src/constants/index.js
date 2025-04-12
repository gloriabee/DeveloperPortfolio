import { Html } from "@react-three/drei";
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
  vue,
  tailwind,
  nodejs,
  mysql,
  mongodb,
  git,
  figma,
  docker,
  java,
  python,
  wishme,
  tpi,
  nlta,
  camt,
  advice,
  bookie,
  space,
  money,
  olympics,
  mbti,
  github,
  ig,
  linkedin,
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
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Projects",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "CSS",
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
    name: "Vue JS",
    icon: vue,
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
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
    title: "Frontend Developer",
    company_name: "Wish Me",
    icon: wishme,
    iconBg: "#E6DEDD",
    date: "June 2020 - Dec 2021",
    points: [
      "Developed responsive birthday wish templates for a customized birthday wish website service",
      "Brainstorm about template designs ",
      "Participated as a Frontend Developer using HTML,CSS,Javascript and Bootstrap technologies.",
    ],
  },
  {
    title: "Instructor",
    company_name: "Thate Pan Institute",
    icon: tpi,
    iconBg: "#E6DEDD",
    date: "June 2021 - June 2022",
    points: [
      "Developing and maintaining curriculum",
      "taught Computer Sciene Principles, Web Development and Data Visualization courses to 14-16 aged youths",
      "Online Class Management",
    ],
  },
  {
    title: "Data Assistant",
    company_name: "Nyan Lynn Thit Analytica",
    icon: nlta,
    iconBg: "#383E56",
    date: "May 2021 - Nov 2022",
    points: [
      "conduct and record survey with related stakeholders to generate primary data. ",
      "maintain collected data in systematic recording system and ensure data privacy",
      "write critical summaries of literature and publications and assigned articles.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Collage of Arts,Media and Technology",
    icon: camt,
    iconBg: "#383E56",
    date: "November 2023 - March 2024",
    points: [
      "assists as a teaching assistant for one semester in checking assignments, quizess for ADT and Problem Solving Course",
    ],
  },
];

const projects = [
  {
    name: "Advice Generator",
    description:
      "A simple web app that fetches and displays random quotes of advice using the Advice Slip API",
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
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "orange-text-gradient",
      },
    ],
    image: advice,
    source_code_link: "https://github.com/gloriabee/AdviceGenerator",
    preview_link: "https://gloriabee.github.io/AdviceGenerator/",
  },
  {
    name: "Bookie",
    description:
      "Online Book Webstore including back-office system (CRUD of products and sales history) and front-office for searching,choosing for making purchase",
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
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "EJS",
        color: "orange-text-gradient",
      },
    ],
    image: bookie,
    preview_link: "https://github.com/chartchai-class/webstore_frontend",
    source_code_link: "https://github.com/chartchai-class/adminsite_backend",
  },
  {
    name: "Space Invaders",
    description:
      "Desktop game application featuring enemy movement, shooting mechanics, score tracking and keyboard controls.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFX",
        color: "green-text-gradient",
      },
    ],
    image: space,
    source_code_link: "https://github.com/aye-nyeinSan/SpaceInvaderJavaFXGame",
  },
  {
    name: "Money Tracker",
    description:
      "Monthly Money Tracker App with dashboard visualizations for income, expenses, and balance. Features include transaction logging, category-based breakdowns, monthly filtering, and dynamic charts for budget statistics",
    tags: [
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Chartjs",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      },
    ],
    image: money,
    source_code_link: "https://github.com/gloriabee/react-money-tracker",
    preview_link: "https://moneytrackmm.netlify.app/",
  },
  {
    name: "Olympics Report",
    description:
      "Web Application featuring a dynamic medal table for Olympics 2024. Includes  user authentication with role-based access—registered users can comment on athletes, while admins manage users, countries, and  medals via an admin panel",
    tags: [
      {
        name: "Vue",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Springboot",
        color: "pink-text-gradient",
      },
    ],
    image: olympics,
    preview_link: "https://github.com/chartchai-class/se331-project-2-whattheh",
    source_code_link:
      "https://github.com/chartchai-class/project-1-Olympic-Report-malatang-friends",
  },
  {
    name: "MBTI Personality Prediction",
    description:
      "Train classification model that determines personality types as extroverted (E) or introverted (I) based on textual analysis.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Streamlit",
        color: "green-text-gradient",
      },
    ],
    image: mbti,
    source_code_link: "https://github.com/Yu11001/NLP_project",
  },
];

const contacts = [
  {
    icon: github,
    link: "https://github.com/gloriabee",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/in/gloria-win-nyunt-635b341ab/",
  },
  {
    icon: ig,
    link: "https://www.instagram.com/gloriawinnyunt/",
  },
];
export { services, technologies, experiences, projects, contacts };
