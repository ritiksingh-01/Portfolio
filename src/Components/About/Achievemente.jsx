import { useState } from "react";
import { Trophy, Award, Code, GitPullRequest, Users } from "lucide-react";

const achievements = [
  {
    title: "SIH Internal Hackathon Winner",
    description: "Cleared with Mentor-Mentee Platform featuring automated scheduling and real-time communication tools, resulting in 30% increase in user engagement",
    icon: <Trophy className="w-6 h-6" />,
    color: "text-yellow-500"
  },
  {
    title: "GSSoC Extended 2024 - Rank #46",
    description: "Ranked #46 out of 32,000+ participants, contributing 50+ PRs to 10+ open-source projects with 50% improvement in project visibility",
    icon: <GitPullRequest className="w-6 h-6" />,
    color: "text-green-500"
  },
  {
    title: "Hacktoberfest 2024",
    description: "Completed 40 Pull Requests, addressing critical bugs and feature implementations across multiple repositories, achieving 40% increase in user satisfaction",
    icon: <Code className="w-6 h-6" />,
    color: "text-purple-500"
  },
  {
    title: "Competitive Programming",
    description: "Solved 200+ problems on LeetCode, 150+ on GeeksforGeeks, and 200+ on Code360",
    icon: <Award className="w-6 h-6" />,
    color: "text-blue-500"
  }
];

const certifications = [
  {
    title: "Full Stack Developer Bootcamp",
    issuer: "GeeksforGeeks",
    icon: <Code className="w-6 h-6" />,
    color: "text-green-500"
  },
  {
    title: "Young Professional",
    issuer: "TCS iON Career Edge",
    icon: <Award className="w-6 h-6" />,
    color: "text-blue-500"
  },
  {
    title: "Frontend Development",
    issuer: "OneRoadmap Edge",
    icon: <Code className="w-6 h-6" />,
    color: "text-purple-500"
  },
  {
    title: "React.JS Developer",
    issuer: "OneRoadmap",
    icon: <Code className="w-6 h-6" />,
    color: "text-cyan-500"
  },
  {
    title: "Introduction to Data Science",
    issuer: "CISCO",
    icon: <Users className="w-6 h-6" />,
    color: "text-orange-500"
  }
];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("achievements");

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Achievements & Certifications</h2>
          <p className="text-xl text-gray-600">Recognition and milestones from my technical journey</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center rounded-lg bg-gray-200 p-1 w-full max-w-md mx-auto mb-12">
          <button
            onClick={() => setActiveTab("achievements")}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium transition-all gap-2 flex-1 ${
              activeTab === "achievements"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Trophy className="w-5 h-5" />
            Achievements
          </button>
          <button
            onClick={() => setActiveTab("certifications")}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2.5 text-sm font-medium transition-all gap-2 flex-1 ${
              activeTab === "certifications"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Award className="w-5 h-5" />
            Certifications
          </button>
        </div>

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className={`${achievement.color} flex-shrink-0 mt-1 p-3 rounded-lg bg-gray-50`}>
                    {achievement.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-gray-900">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === "certifications" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl border border-gray-200 p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`${cert.color} p-4 rounded-full bg-gray-50`}>
                    {cert.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-gray-900">{cert.title}</h3>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
export default Achievements;