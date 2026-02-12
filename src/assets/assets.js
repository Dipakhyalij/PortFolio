import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';


import profileImg from "./profile.avif";


import projectImg1 from "./project1.avif";
import projectImg2 from "./project2.avif";
import projectImg3 from "./project3.avif";
import projectImg4 from "./project4.avif";
import cert1 from "./cert1.jpg";
import cert2 from "./cert2.jpg";
import cert3 from "./cert3.jpg";
import cert4 from "./cert4.jpg";
import cert5 from "./cert5.jpg";
import cert6 from "./cert6.jpg";

export const certifications = [
  {
    id: 1,
    title: "Genrative AI Certificate ",
    image: cert1,
  },
  {
    id: 2,
    title: "Cloud Computing Certificate",
    image: cert2,
  },
  {
    id: 3,
    title: "AWS Certificate",
    image: cert3,
  },
    {
    id: 4,
    title: "mastering React Certificate ",
    image: cert4,
  },
  {
    id: 5,
    title: "Complete Backend",
    image: cert5,
  },
  {
    id: 6,
    title: "React And Redux Certificate",
    image: cert6,
  },
];

export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'JavaScript (ES6)', 'Tailwind', 'Bootstrap']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'PHP', 'RESTful APIs','JAVA']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'docker', 'Figma', 'Postman']
  }
];



export const projects = [
   {
    title: "Online Food Delivery System ",
    description: "A full-featured online food delevery with add  dishes in cart,track order, user authentication, and payment processing. with admin panel",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB","express", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Personal Portfolio website",
    description: "A modern developer portfolio featuring innovative projects, clean UI, and a strong focus on showcasing my achivements.",
    image: projectImg2,
    tech: ["ReactJS", "Tailwind CSS", "JavaScript (ES6+)","vite"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Weather App",
    description: "A responsive React-based web application that fetches and visualizes a user’s LeetCode statistics using their username. It displays problem-solving progress, difficulty-wise breakdown, rankings, and performance metrics through an interactive dashboard, helping users track and analyze their coding growth in real time.",
    image: projectImg4,
    tech: ["ReactJS", "CSS","vite","API"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Weather App",
    description: "A responsive weather application that displays current weather conditions and forecasts for any location.",
    image: projectImg3,
    tech: ["ReactJS", "CSS", "JavaScript (ES6+)","vite"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];