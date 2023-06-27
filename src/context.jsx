import { createContext } from "react";
import githubLogo from "./assets/svg/github-icon.svg";
import linkedinLogo from "./assets/svg/linkedin-icon.svg";
import emailLogo from "./assets/svg/email-icon.svg";
import linkLogo from "./assets/svg/link-icon.svg";

export const Context = createContext();

const store = {
  projects: [
    {
      name: "qChat",
      shortDescription:
        "Travel to the premiere mountain tops of New Zealand with our guided tours. Take in the majestic scenary and witness beauty.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus architecto, esse iste quisquam hic at reiciendis itaque dignissimos sint suscipit quod distinctio ipsum explicabo repellat numquam. Maxime laborum temporibus tempore!",
      image:
        "https://images.unsplash.com/photo-1606921231106-f1083329a65c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "#",
      github: "#",
      techStack: [
        "jQuery",
        "Python",
        "Django",
        "PostgreSQL",
        "Docker",
        "AWS",
        "Heroku",
        "Bootstrap",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      name: "Sheet Scripts",
      shortDescription: "A chat app built with Django and JavaScript.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus architecto, esse iste quisquam hic at reiciendis itaque dignissimos sint suscipit quod distinctio ipsum explicabo repellat numquam. Maxime laborum temporibus tempore!",
      image:
        "https://images.unsplash.com/photo-1606921231106-f1083329a65c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "#",
      github: "#",
      techStack: ["Google Sheets"],
    },
  ],
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Redux", "jQuery"],
    backend: ["Python", "Django", "Node.js", "PostgreSQL", "SQLite", "GraphQL"],
    devops: ["Docker", "AWS", "Heroku", "Netlify", "Vercel"],
    paradigms: ["TDD", "RESTFul"],
    others: ["Git", "Figma"],
  },
  icons: {
    Github: githubLogo,
    Linkedin: linkedinLogo,
    Email: emailLogo,
    Link: linkLogo,
  },
};

export default function ContextProvider({ children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>;
}
