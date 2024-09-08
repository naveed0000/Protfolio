import { IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
const Info = {
    name: "Naveed Shaikh",
    stack: ["Software Engineer", "Full Stack Developer", "Frontend Developer", "Backend Developer"],
    bio: "I am a passionate software developer currently in my final year, specializing in web application development. With a strong foundation in modern technologies like React.js, Node.js, and MongoDB, I have honed my skills through various projects, including event management platforms and personal portfolios.  As I continue to grow in my field, I am eager to apply my knowledge and contribute to innovative teams in a dynamic corporate environment."
}



const ProjectInfo = [
    {
        title: "Dashboard  App",
        desc: "lorem305",
        image: "",
        // image: "Ekart.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
        // link: "https://code-mars.github.io/Ekart/"
        // github: "https://github.com/Code-Mars/Ekart/"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS",  "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "GSAP", "Bootstrap"], 
    },
    {
        title: "Backend",
        skills: [ "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: [ "C++", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
    }
]
const socialLinks = [
    { link: "https://github.com/naveed0000", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/naveed-shaikh-lookingforopportunity/", icon: IconBrandLinkedin },
    { link: "https://www.leetcode.com/u/sknaveed99026", icon: IconBrandLeetcode }
];


// const ExperienceInfo = [
//     {
//         role: "Specialist Programmer",
//         company: "Infosys",
//         date: "Oct 2023 - Present",
//         desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
//         skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
//     },
//     {
//         role: "System Engineer",
//         company: "Infosys",
//         date: "Nov 2022 - Sep 2023",
//         desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
//         skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
//     }
// ]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, Slugs };