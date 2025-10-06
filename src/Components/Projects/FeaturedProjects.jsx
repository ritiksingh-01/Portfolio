import { useState } from "react";
import { ArrowRight, Github, ExternalLink, Code, Palette } from "lucide-react";

const developmentProjects = [
  {
    title: "Zenith",
    description: "A decentralized music application enabling artists to mint and sell their music as NFTs.",
    image: "/api/placeholder/500/300",
    technologies: ["Solidity", "Polygon", "Ethereum", "IPFS", "+6"],
    features: [
      "Built for 150+ artists to mint and sell NFTs with Solidity and IPFS",
      "Enabled 300+ transactions and 30% faster monetization via Polygon"
    ]
  },
  {
    title: "PokeArena",
    description: "A blockchain-based platform digitizing Pokémon cards as NFTs with secure trading and battling features.",
    image: "/api/placeholder/500/300",
    technologies: ["Move", "Aptos", "NFTs", "React", "+7"],
    features: [
      "Developed a blockchain-based platform digitizing 300+ Pokémon cards as NFTs",
      "Enabled secure trading and battling with on-chain verified ownership and battle logic"
    ]
  },
  {
    title: "Lightning Time",
    description: "A Bitcoin Lightning Network-powered time tracking web app that allows users to check in for work and automatically receive payments in Satoshis.",
    image: "/api/placeholder/500/300",
    technologies: ["Bitcoin", "Lightning Network", "LNbits", "Soulbound Tokens", "+7"],
    features: [
      "Built a real-time time tracking system with automatic Bitcoin payments via Lightning Network",
      "Implemented an admin dashboard for monitoring work time and payment statistics"
    ]
  }
];

const designProjects = [
  {
    title: "E-Commerce Dashboard",
    description: "Modern admin dashboard design for e-commerce platforms with analytics and inventory management.",
    image: "/api/placeholder/500/300",
    technologies: ["Figma", "UI/UX", "Design System", "Prototyping"],
    features: [
      "Designed comprehensive dashboard with 20+ screens and components",
      "Created interactive prototypes for user testing and stakeholder presentations"
    ]
  },
  {
    title: "Mobile Banking App",
    description: "Sleek and intuitive banking app interface focusing on user experience and accessibility.",
    image: "/api/placeholder/500/300",
    technologies: ["Figma", "Adobe XD", "User Research", "Wireframing"],
    features: [
      "Conducted user research with 50+ participants to inform design decisions",
      "Designed seamless user flows for complex financial transactions"
    ]
  },
  {
    title: "Social Media Platform",
    description: "Complete design system and UI kit for a modern social networking platform.",
    image: "/api/placeholder/500/300",
    technologies: ["Figma", "Component Library", "Dark Mode", "Responsive"],
    features: [
      "Built reusable component library with 100+ variants",
      "Implemented dark mode support across all components"
    ]
  }
];

const ProjectGrid = ({ projects }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {projects.map((project, index) => (
      <div
        key={index}
        className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
      >
        <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            Project Screenshot
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 border border-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            {project.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">{feature}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-colors group/btn">
              View Details
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-colors">
              <Github className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white hover:bg-gray-50 transition-colors">
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

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Featured Projects</h2>
          <p className="text-xl text-gray-600">Check out some of my recent work</p>
        </div>

        <div className="w-full">
          <div className="flex items-center justify-center rounded-lg bg-gray-200 p-1 w-full max-w-md mx-auto mb-12">
            <button
              onClick={() => setActiveTab("development")}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium transition-all gap-2 flex-1 ${
                activeTab === "development"
                  ? "bg-white text-gray-900 shadow-sm"
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
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Palette className="w-4 h-4" />
              Design
            </button>
          </div>
          
          <div className="mt-8">
            {activeTab === "development" && <ProjectGrid projects={developmentProjects} />}
            {activeTab === "design" && <ProjectGrid projects={designProjects} />}
          </div>
        </div>
      </div>
    </section>
  );
}
export default FeaturedProjects;