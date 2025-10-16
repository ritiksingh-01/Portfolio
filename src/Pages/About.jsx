import { useState } from "react";
import {
  BookOpen,
  Award,
  Code2,
  Trophy,
  Code,
  GitPullRequest,
  Users,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Layers,
  Database,
  Settings,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const AboutPage = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("achievements");
  const [activeSkillTab, setActiveSkillTab] = useState("Languages");

  const education = [
    {
      degree: "B.Tech in AI & Data Science",
      institution: "GL Bajaj Group Of Institutions, Mathura",
      university: "AKTU",
      period: "2022 – 2026",
      description:
        "Specializing in machine learning, data analytics, and AI applications with hands-on experience in modern development frameworks.",
      current: true,
    },
    {
      degree: "Class XII (CBSE)",
      institution: "Senior Secondary Education",
      period: "2020-2021",
      description:
        "Completed higher secondary education with focus on Mathematics, Physics, and Computer Science.",
    },
    {
      degree: "Class X (CBSE)",
      institution: "Secondary Education",
      period: "2018-2019",
      description:
        "Foundation in core subjects with early exposure to computer science and programming concepts.",
    },
  ];

  const achievements = [
    {
      title: "SIH Internal Hackathon Winner",
      description:
        "Cleared with Mentor-Mentee Platform featuring automated scheduling and real-time communication tools, resulting in 30% increase in user engagement",
      icon: <Trophy className="w-6 h-6" />,
      color: "text-yellow-500",
    },
    {
      title: "GSSoC Extended 2024 - Rank #46",
      description:
        "Ranked #46 out of 32,000+ participants, contributing 50+ PRs to 10+ open-source projects with 50% improvement in project visibility",
      icon: <GitPullRequest className="w-6 h-6" />,
      color: "text-green-500",
    },
    {
      title: "Hacktoberfest 2024",
      description:
        "Completed 40 Pull Requests, addressing critical bugs and feature implementations across multiple repositories, achieving 40% increase in user satisfaction",
      icon: <Code className="w-6 h-6" />,
      color: "text-purple-500",
    },
    {
      title: "Competitive Programming",
      description:
        "Solved 200+ problems on LeetCode, 150+ on GeeksforGeeks, and 200+ on Code360",
      icon: <Award className="w-6 h-6" />,
      color: "text-blue-500",
    },
  ];

  const certifications = [
    {
      title: "Full Stack Developer Bootcamp",
      issuer: "GeeksforGeeks",
      icon: <Code className="w-6 h-6" />,
      color: "text-green-500",
    },
    {
      title: "Young Professional",
      issuer: "TCS iON Career Edge",
      icon: <Award className="w-6 h-6" />,
      color: "text-blue-500",
    },
    {
      title: "Frontend Development",
      issuer: "OneRoadmap Edge",
      icon: <Code className="w-6 h-6" />,
      color: "text-purple-500",
    },
    {
      title: "React.JS Developer",
      issuer: "OneRoadmap",
      icon: <Code className="w-6 h-6" />,
      color: "text-cyan-500",
    },
    {
      title: "Introduction to Data Science",
      issuer: "CISCO",
      icon: <Users className="w-6 h-6" />,
      color: "text-orange-500",
    },
  ];

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

  return (
    <main
      className={`min-h-screen py-30 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${theme === "dark" ? "bg-gradient-to-br from-gray-900 via-black to-gray-900" : "bg-gradient-to-br from-gray-50 via-white to-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <div
              className={`relative w-40 h-40 rounded-full overflow-hidden border-4 ${theme === "dark" ? "border-gray-800" : "border-white"} shadow-2xl`}
            >
              <img
                src="/profile-image.png"
                alt="Ritik Singh"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center"
                style={{ display: "none" }}
              >
                <span className="text-6xl font-bold text-white">RS</span>
              </div>
            </div>
          </div>

          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 transition-colors duration-500 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            Ritik Singh
          </h1>
          <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            MERN Stack Developer
          </p>
          <p
            className={`text-lg max-w-2xl mx-auto mb-8 transition-colors duration-500 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
          >
            Passionate developer crafting innovative solutions at the
            intersection of AI and web development
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme === "dark" ? "bg-gray-800/50" : "bg-white"} border ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
            >
              <MapPin className="w-4 h-4 text-blue-600" />
              <span
                className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              >
                Mathura, India
              </span>
            </div>
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${theme === "dark" ? "bg-gray-800/50" : "bg-white"} border ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
            >
              <Calendar className="w-4 h-4 text-purple-600" />
              <span
                className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              >
                Fresher
              </span>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Available for Work
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <a
              href="#"
              className={`p-3 rounded-xl border transition-all duration-300 hover:scale-110 hover:shadow-lg ${theme === "dark" ? "bg-gray-800/50 border-gray-700 hover:border-blue-500 text-gray-300" : "bg-white border-gray-200 hover:border-blue-500 text-gray-700"}`}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className={`p-3 rounded-xl border transition-all duration-300 hover:scale-110 hover:shadow-lg ${theme === "dark" ? "bg-gray-800/50 border-gray-700 hover:border-blue-500 text-gray-300" : "bg-white border-gray-200 hover:border-blue-500 text-gray-700"}`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className={`p-3 rounded-xl border transition-all duration-300 hover:scale-110 hover:shadow-lg ${theme === "dark" ? "bg-gray-800/50 border-gray-700 hover:border-blue-500 text-gray-300" : "bg-white border-gray-200 hover:border-blue-500 text-gray-700"}`}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div
              className={`rounded-2xl border p-8 shadow-lg transition-all duration-500 ${theme === "dark" ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                <h2
                  className={`text-3xl font-bold transition-colors duration-500 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                >
                  About Me
                </h2>
              </div>

              <div
                className={`space-y-4 text-base leading-relaxed transition-colors duration-500 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              >
                <p>
                  I'm a passionate{" "}
                  <span className="font-semibold text-blue-600">
                    Artificial Intelligence and Data Science
                  </span>{" "}
                  undergraduate with an unwavering dedication to frontend
                  development and innovative problem-solving.
                </p>
                <p>
                  My journey in technology is fueled by an insatiable curiosity
                  and commitment to excellence. Whether crafting beautiful,
                  responsive user interfaces with{" "}
                  <span
                    className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                  >
                    React.js and Tailwind CSS
                  </span>
                  , tackling complex algorithmic challenges, or contributing to
                  meaningful open-source projects, I approach every challenge
                  with precision and enthusiasm.
                </p>
                <p>
                  Through competitive programming and hackathons, I've sharpened
                  my analytical thinking and collaborative skills, constantly
                  pushing the boundaries of what's possible with code.
                </p>
              </div>
              <div
                className={`grid grid-cols-3 gap-4 mt-8 pt-8 border-t transition-colors duration-500 ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">550+</div>
                  <div
                    className={`text-sm mt-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Problems Solved
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div
                    className={`text-sm mt-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Open Source PRs
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">10+</div>
                  <div
                    className={`text-sm mt-1 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                  >
                    Projects Built
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`rounded-2xl border p-8 shadow-lg transition-all duration-500 ${theme === "dark" ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"}`}
            >
              <h3
                className={`text-2xl font-bold mb-6 flex items-center gap-3 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                <Code2 className="w-6 h-6 text-blue-600" />
                Technical Skills
              </h3>
              <div
                className={`flex flex-wrap gap-2 mb-6 p-1 rounded-lg ${theme === "dark" ? "bg-gray-700/50" : "bg-gray-100"}`}
              >
                {Object.keys(skillCategories).map((category) => {
                  const IconComponent = skillCategories[category].icon;
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveSkillTab(category)}
                      className={`flex-1 min-w-fit py-2.5 px-4 rounded-md text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                        activeSkillTab === category
                          ? theme === "dark"
                            ? "bg-gray-600 text-white"
                            : "bg-white text-gray-900 shadow-sm"
                          : theme === "dark"
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      {category}
                    </button>
                  );
                })}
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {skillCategories[activeSkillTab].skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`group flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-md ${
                      theme === "dark"
                        ? "bg-gray-700/30 border-gray-600 hover:border-blue-500"
                        : "bg-gray-50 border-gray-200 hover:border-blue-500"
                    }`}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <span
                      className={`text-xs font-medium text-center ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`rounded-2xl border p-8 shadow-lg transition-all duration-500 ${theme === "dark" ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"}`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
              >
                Achievements & Certifications
              </h3>
              <div
                className={`flex rounded-lg p-1 mb-6 ${theme === "dark" ? "bg-gray-700/50" : "bg-gray-100"}`}
              >
                <button
                  onClick={() => setActiveTab("achievements")}
                  className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                    activeTab === "achievements"
                      ? theme === "dark"
                        ? "bg-gray-600 text-white"
                        : "bg-white text-gray-900 shadow-sm"
                      : theme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Trophy className="w-4 h-4" />
                  Achievements
                </button>
                <button
                  onClick={() => setActiveTab("certifications")}
                  className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                    activeTab === "certifications"
                      ? theme === "dark"
                        ? "bg-gray-600 text-white"
                        : "bg-white text-gray-900 shadow-sm"
                      : theme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Award className="w-4 h-4" />
                  Certifications
                </button>
              </div>
              {activeTab === "achievements" && (
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex gap-4 p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${theme === "dark" ? "bg-gray-700/30 border-gray-600 hover:border-blue-500" : "bg-gray-50 border-gray-200 hover:border-blue-500"}`}
                    >
                      <div
                        className={`${achievement.color} flex-shrink-0 p-3 rounded-lg ${theme === "dark" ? "bg-gray-600/50" : "bg-white"}`}
                      >
                        {achievement.icon}
                      </div>
                      <div>
                        <h4
                          className={`font-semibold text-base mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                        >
                          {achievement.title}
                        </h4>
                        <p
                          className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                        >
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "certifications" && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center text-center p-6 rounded-xl border transition-all duration-300 hover:shadow-md ${theme === "dark" ? "bg-gray-700/30 border-gray-600 hover:border-blue-500" : "bg-gray-50 border-gray-200 hover:border-blue-500"}`}
                    >
                      <div
                        className={`${cert.color} p-3 rounded-full mb-3 ${theme === "dark" ? "bg-gray-600/50" : "bg-white"}`}
                      >
                        {cert.icon}
                      </div>
                      <h4
                        className={`font-semibold text-base mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                      >
                        {cert.title}
                      </h4>
                      <p
                        className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                      >
                        {cert.issuer}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div
              className={`rounded-2xl border p-6 shadow-lg sticky top-24 transition-all duration-500 ${theme === "dark" ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"}`}
            >
              <div
                className={`flex items-center gap-3 mb-6 pb-6 border-b ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
              >
                <div className="p-2.5 bg-blue-100 rounded-xl">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <h3
                  className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                >
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative pl-6 border-l-2 pb-6 last:pb-0 last:border-l-0 ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
                  >
                    <div
                      className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${edu.current ? "bg-blue-500 ring-4 ring-blue-100 animate-pulse" : theme === "dark" ? "bg-gray-600 ring-4 ring-gray-800" : "bg-gray-300 ring-4 ring-gray-100"}`}
                    ></div>

                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4
                        className={`text-sm font-bold leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}
                      >
                        {edu.degree}
                      </h4>
                      {edu.current && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                          Current
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-xs font-semibold mb-1 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                    >
                      {edu.institution}
                    </p>
                    {edu.university && (
                      <p className="text-xs text-gray-500 mb-1">
                        {edu.university}
                      </p>
                    )}
                    <p className="text-xs text-blue-600 font-semibold mb-2">
                      {edu.period}
                    </p>
                    <p
                      className={`text-xs leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;