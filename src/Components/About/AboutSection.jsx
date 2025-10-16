import { BookOpen, GraduationCap, Award, Code2 } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const AboutSection = () => {
  const { theme } = useTheme();

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

  const highlights = [
    {
      icon: Award,
      title: "GSSoC Rank #46",
      description: "Out of 32,000+ participants",
      color: "from-yellow-50 to-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
    {
      icon: Code2,
      title: "SIH Qualified",
      description: "Cleared internal hackathon",
      color: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      icon: GraduationCap,
      title: "Open Source",
      description: "Active contributor",
      color: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
  ];

  return (
    <section
      className={`pt-12 md:pt-16 pb-16 px-6 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-black"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2
            className={`text-5xl md:text-6xl font-bold transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto transition-colors duration-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Passionate developer crafting innovative solutions at the
            intersection of AI and web development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main About Content - Takes up 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Introduction Card */}
            <div
              className={`rounded-2xl border p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700 hover:border-blue-500"
                  : "bg-white border-gray-200 hover:border-blue-400"
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full flex-shrink-0"></div>
                <div>
                  <h3
                    className={`text-3xl font-bold mb-2 transition-colors duration-500 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Who I Am
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">
                    Full Stack Developer & AI Enthusiast
                  </p>
                </div>
              </div>

              <div
                className={`space-y-4 leading-relaxed transition-colors duration-500 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <p className="text-base">
                  I'm a passionate{" "}
                  <span className="font-semibold text-blue-600">
                    Artificial Intelligence and Data Science
                  </span>{" "}
                  undergraduate with an unwavering dedication to frontend
                  development and innovative problem-solving.
                </p>
                <p className="text-base">
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
                <p className="text-base">
                  Through competitive programming and hackathons, I've sharpened
                  my analytical thinking and collaborative skills, constantly
                  pushing the boundaries of what's possible with code.
                </p>
              </div>

              {/* Quick Stats */}
              <div
                className={`grid grid-cols-3 gap-4 mt-8 pt-8 border-t transition-colors duration-500 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    550+
                  </div>
                  <div
                    className={`text-sm transition-colors duration-500 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Problems Solved
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    50+
                  </div>
                  <div
                    className={`text-sm transition-colors duration-500 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Open Source PRs
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    10+
                  </div>
                  <div
                    className={`text-sm transition-colors duration-500 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Projects Built
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`rounded-xl p-6 border hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gray-800/50 border-gray-700 hover:border-blue-500"
                        : `bg-gradient-to-br ${item.color} ${item.borderColor}`
                    }`}
                  >
                    <div className={`${item.iconColor} mb-3`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h4
                      className={`font-bold mb-1 text-base transition-colors duration-500 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-sm transition-colors duration-500 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Timeline - Takes up 1 column */}
          <div className="lg:col-span-1">
            <div
              className={`rounded-2xl border p-6 shadow-sm hover:shadow-xl transition-all duration-300 lg:sticky lg:top-24 ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700 hover:border-blue-500"
                  : "bg-white border-gray-200 hover:border-blue-400"
              }`}
            >
              <div
                className={`flex items-center gap-3 mb-6 pb-6 border-b transition-colors duration-500 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div className="p-2.5 bg-blue-100 rounded-xl">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <h3
                  className={`text-2xl font-bold transition-colors duration-500 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative pl-6 border-l-2 last:border-l-0 pb-6 last:pb-0 transition-colors duration-500 ${
                      theme === "dark" ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <div
                      className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${
                        edu.current
                          ? "bg-blue-500 ring-4 ring-blue-100 animate-pulse"
                          : `ring-4 ${theme === "dark" ? "bg-gray-600 ring-gray-800" : "bg-gray-300 ring-gray-100"}`
                      }`}
                    ></div>

                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4
                          className={`text-sm font-bold leading-tight transition-colors duration-500 ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
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
                        className={`text-xs font-semibold transition-colors duration-500 ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {edu.institution}
                      </p>
                      {edu.university && (
                        <p
                          className={`text-xs transition-colors duration-500 ${
                            theme === "dark" ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          {edu.university}
                        </p>
                      )}
                      <p className="text-xs text-blue-600 font-semibold pt-1">
                        {edu.period}
                      </p>
                      <p
                        className={`text-xs leading-relaxed pt-2 transition-colors duration-500 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;