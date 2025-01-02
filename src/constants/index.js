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
    vibestyle,
    livedocs,
    yoom,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "tech",
        title: "Tech",
    },
    {
        id: "projects",
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

const projects = [
    {
        name: "Vibestyle",
        description: "An E-commerce website created using NextJS 15 and Sanity",
        tags: [
            {
                name: "NextJS",
                color: "blue-text-gradient",
            },
            {
                name: "Sanity",
                color: "green-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
        ],
        image: vibestyle,
        source_code_link: "https://github.com/gdev-kingx/Vibestyle",
        live_link: "https://vibestyle.vercel.app/",
    },
    {
        name: "LiveDocs",
        description:
            "A real time collaborative editor created using nextjs, tailwindcss, liveblocks(lexical) and sentry",
        tags: [
            {
                name: "Typescript",
                color: "blue-text-gradient",
            },
            {
                name: "CSS 3",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
        ],
        image: livedocs,
        source_code_link: "https://github.com/gdev-kingx/livedocs",
        live_link: "https://livedocs-one.vercel.app/",
    },
    {
        name: "Yoom",
        description:
            "A Replica of the popular video calling Web Based / App Based Application 'ZOOM' using NextJS and React Typescript. Advanced Full Stack Dev Project",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: yoom,
        source_code_link: "https://github.com/gdev-kingx/Yoom",
        live_link: "https://yoom-five-pi.vercel.app/",
    },
];

export { services, technologies, projects };
