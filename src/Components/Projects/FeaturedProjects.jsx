import { useState } from "react";
import { ArrowRight, Github, ExternalLink, Code, Palette } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const developmentProjects = [
  {
    title: "SkillBridge",
    description:
      "A powerful, modern, and intuitive mentorship platform that bridges the gap between aspiring mentees and experienced mentors.",
    image: "/skillbridge.png",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Built for 150+ artists to mint and sell NFTs with Solidity and IPFS",
      "Enabled 300+ transactions and 30% faster monetization via Polygon",
    ],
  },
  {
    title: "Employee Management System",
    description:
      "A modern, intuitive web-based Employee Management System built with React.js. This project streamlines task assignment and management, providing distinct dashboards for employees and administrators.",
    image: "/employeeMS.png",
    technologies: ["React.js", "Tailwind CSS", "Local Storage API"],
    features: [
      "Developed a blockchain-based platform digitizing 300+ Pokémon cards as NFTs",
      "Enabled secure trading and battling with on-chain verified ownership and battle logic",
    ],
  },
  {
    title: "Crop Yield Weather Impact Dashboard",
    description:
      "A web app that provides insights into the impact of weather on crop yields, helping farmers make informed decisions.",
    image: "/cropYD.png",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Developed a real-time weather data integration system using OpenWeatherMap API",
      "Implemented an admin dashboard for monitoring work time and payment statistics",
    ],
  },
];

const designProjects = [
  {
    title: "Nike Landing Page",
    description:
      "Modern landing page design for Nike's e-commerce platform with a focus on product showcasing.",
    image: "/NikeLandingPage.png",
    technologies: ["Figma", "UI/UX", "Design System", "Prototyping"],
    features: [
      "Designed comprehensive dashboard with 20+ screens and components",
      "Created interactive prototypes for user testing and stakeholder presentations",
    ],
  },
  {
    title: "Krypto",
    description:
      "Sleek and intuitive banking app interface focusing on user experience and accessibility.",
    image: "/Krypto.png",
    technologies: ["Figma", "UI/UX", "Design System", "Prototyping"],
    features: [
      "Conducted user research with 50+ participants to inform design decisions",
      "Designed seamless user flows for complex financial transactions",
    ],
  },
  {
    title: "Social Media Platform",
    description:
      "Complete design system and UI kit for a modern social networking platform.",
    image: "/Kaixin.png",
    technologies: ["Figma", "UI/UX", "Design System", "Prototyping"],
    features: [
      "Built reusable component library with 100+ variants",
      "Implemented dark mode support across all components",
    ],
  },
];

const ProjectGrid = ({ projects, theme }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {projects.map((project, index) => (
      <div
        key={index}
        className={`group relative rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
          theme === "dark"
            ? "bg-gray-800/50 border-gray-700 hover:border-blue-500"
            : "bg-white border-gray-200 hover:border-blue-500"
        }`}
      >
        <div
          className={`aspect-video overflow-hidden ${
            theme === "dark"
              ? "bg-gradient-to-br from-gray-800 to-gray-900"
              : "bg-gradient-to-br from-gray-50 to-gray-100"
          }`}
        >
          <div
            className={`w-full h-full flex items-center justify-center ${
              theme === "dark"
                ? "bg-gray-700/50 text-gray-600"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3
            className={`text-2xl font-bold transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`transition-colors duration-500 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className={`px-3 py-1 text-sm rounded-full border ${
                  theme === "dark"
                    ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                    : "bg-blue-50 text-blue-700 border-blue-200"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border transition-colors group/btn ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-700/50 text-white hover:bg-gray-700"
                  : "border-gray-300 bg-white hover:bg-gray-50"
              }`}
            >
              View Details
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
            <button
              className={`inline-flex items-center justify-center w-10 h-10 rounded-md border transition-colors ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-700/50 text-white hover:bg-gray-700"
                  : "border-gray-300 bg-white hover:bg-gray-50"
              }`}
            >
              <Github className="w-4 h-4" />
            </button>
            <button
              className={`inline-flex items-center justify-center w-10 h-10 rounded-md border transition-colors ${
                theme === "dark"
                  ? "border-gray-600 bg-gray-700/50 text-white hover:bg-gray-700"
                  : "border-gray-300 bg-white hover:bg-gray-50"
              }`}
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const FeaturedProjects = () => {
  const [activeTab, setActiveTab] = useState("development");
  const { theme } = useTheme();

  return (
    <section
      className={`py-24 px-6 transition-colors duration-500 ${theme === "dark" ? "bg-black" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-5xl md:text-6xl font-bold transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-xl transition-colors duration-500 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          >
            Check out some of my recent work
          </p>
        </div>

        <div className="w-full">
          <div
            className={`flex items-center justify-center rounded-lg p-1 w-full max-w-md mx-auto mb-12 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <button
              onClick={() => setActiveTab("development")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium transition-all gap-2 flex-1 ${
                activeTab === "development"
                  ? theme === "dark"
                    ? "bg-gray-700 text-white shadow-sm"
                    : "bg-white text-gray-900 shadow-sm"
                  : theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Code className="w-4 h-4" />
              Development
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium transition-all gap-2 flex-1 ${
                activeTab === "design"
                  ? theme === "dark"
                    ? "bg-gray-700 text-white shadow-sm"
                    : "bg-white text-gray-900 shadow-sm"
                  : theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Palette className="w-4 h-4" />
              Design
            </button>
          </div>

          <div className="mt-8">
            {activeTab === "development" && (
              <ProjectGrid projects={developmentProjects} theme={theme} />
            )}
            {activeTab === "design" && (
              <ProjectGrid projects={designProjects} theme={theme} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProjects;