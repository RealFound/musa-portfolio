import "./styles/TechStack.css";
import {
  FaJava,
  FaJs,
  FaPython,
  FaNodeJs,
  FaDiscord,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiSpigotmc,
  SiVisualstudiocode,
} from "react-icons/si";

const techs = [
  { icon: <FaJava />, name: "Java", note: "Spigot / Paper pluginleri" },
  { icon: <SiSpigotmc />, name: "Spigot / Paper", note: "Minecraft API" },
  { icon: <FaJs />, name: "JavaScript", note: "Bot & web mantığı" },
  { icon: <FaPython />, name: "Python", note: "Araç scriptleri" },
  { icon: <FaNodeJs />, name: "Node.js", note: "Discord botları & API" },
  { icon: <FaDiscord />, name: "Discord.js", note: "Discord botları" },
  { icon: <FaReact />, name: "React", note: "Arayüz geliştirme" },
  { icon: <SiNextdotjs />, name: "Next.js", note: "SSR web projeleri" },
  { icon: <SiNuxtdotjs />, name: "Nuxt.js", note: "Vue tabanlı projeler" },
  { icon: <FaHtml5 />, name: "HTML", note: "Semantik yapı" },
  { icon: <FaCss3Alt />, name: "CSS", note: "Modern tasarım" },
  { icon: <FaGitAlt />, name: "Git", note: "Sürüm kontrolü" },
  { icon: <SiVisualstudiocode />, name: "VS Code", note: "Ana editör" },
];

const TechStack = () => {
  return (
    <div className="techstack section-container" id="techstack">
      <h2>Teknolojilerim</h2>
      <p className="tech-note">
        Plugin'den web'e — her gün kullandığım araçlar.
      </p>
      <div className="tech-grid">
        {techs.map((tech) => (
          <div className="tech-card" key={tech.name}>
            <span className="tech-icon">{tech.icon}</span>
            <h4>{tech.name}</h4>
            <p>{tech.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
