import { useState } from "react";
import { Code, Layers, Database, Settings } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const skillCategories = {
  Languages: {
    icon: Code,
    skills: [
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "SQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  Frontend: {
    icon: Layers,
    skills: [
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TailwindCSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "Redux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Material-UI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
    ],
  },
  Backend: {
    icon: Database,
    skills: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "REST API",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  Tools: {
    icon: Settings,
    skills: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
      },
      {
        name: "VSCode",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Postman",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
    ],
  },
};

const TechnicalSkills = () => {
  const [activeCategory, setActiveCategory] = useState("Languages");
  const { theme } = useTheme();

  return (
    <section
      className={`py-24 px-6 transition-colors duration-500 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-5xl md:text-6xl font-bold transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Technical Skills
          </h2>
          <p
            className={`text-xl transition-colors duration-500 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          >
            My expertise across various technologies and tools
          </p>
        </div>

        {/* Tab Selector */}
        <div
          className={`flex overflow-x-auto items-center justify-center rounded-lg p-1 w-full max-w-4xl mx-auto mb-12 gap-1 ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-200"
          }`}
        >
          {Object.keys(skillCategories).map((category) => {
            const IconComponent = skillCategories[category].icon;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-medium transition-all gap-2 flex-1 min-w-fit ${
                  activeCategory === category
                    ? theme === "dark"
                      ? "bg-gray-700 text-white shadow-sm"
                      : "bg-white text-gray-900 shadow-sm"
                    : theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="hidden sm:inline">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={index}
              className={`group px-6 py-3 rounded-xl border hover:shadow-md transition-all duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700 hover:border-blue-500"
                  : "bg-white border-gray-200 hover:border-blue-500"
              }`}
            >
              <div className="flex items-center gap-3">
                {skill.logo && (
                  <img
                    src={skill.logo || "/placeholder.svg"}
                    alt={skill.name}
                    className="w-6 h-6 object-contain"
                  />
                )}
                <span
                  className={`font-medium transition-colors duration-500 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechnicalSkills;
