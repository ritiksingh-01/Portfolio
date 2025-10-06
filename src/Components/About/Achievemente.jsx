import { useState } from "react";
import { Trophy, Award, Code, GitPullRequest, Users } from "lucide-react";

const achievements = [
  {
    title: "SIH Internal Hackathon Winner",
    description: "Cleared with Mentor-Mentee Platform featuring automated scheduling and real-time communication tools, resulting in 30% increase in user engagement",
    icon: <Trophy className="w-6 h-6" />,
    color: "text-yellow-400"
  },
  {
    title: "GSSoC Extended 2024 - Rank #46",
    description: "Ranked #46 out of 32,000+ participants, contributing 50+ PRs to 10+ open-source projects with 50% improvement in project visibility",
    icon: <GitPullRequest className="w-6 h-6" />,
    color: "text-green-400"
  },
  {
    title: "Hacktoberfest 2024",
    description: "Completed 40 Pull Requests, addressing critical bugs and feature implementations across multiple repositories, achieving 40% increase in user satisfaction",
    icon: <Code className="w-6 h-6" />,
    color: "text-purple-400"
  },
  {
    title: "Competitive Programming",
    description: "Solved 200+ problems on LeetCode, 150+ on GeeksforGeeks, and 200+ on Code360",
    icon: <Award className="w-6 h-6" />,
    color: "text-blue-400"
  }
];

const certifications = [
  {
    title: "Full Stack Developer Bootcamp",
    issuer: "GeeksforGeeks",
    icon: <Code className="w-6 h-6" />,
    color: "text-green-400"
  },
  {
    title: "Young Professional",
    issuer: "TCS iON Career Edge",
    icon: <Award className="w-6 h-6" />,
    color: "text-blue-400"
  },
  {
    title: "Frontend Development",
    issuer: "OneRoadmap Edge",
    icon: <Code className="w-6 h-6" />,
    color: "text-purple-400"
  },
  {
    title: "React.JS Developer",
    issuer: "OneRoadmap",
    icon: <Code className="w-6 h-6" />,
    color: "text-cyan-400"
  },
  {
    title: "Introduction to Data Science",
    issuer: "CISCO",
    icon: <Users className="w-6 h-6" />,
    color: "text-orange-400"
  }
];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("achievements");

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold">Achievements & Certifications</h2>
          <p className="text-xl text-muted-foreground">Recognition and milestones from my technical journey</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-card/30 backdrop-blur-md rounded-lg border border-card-border p-1">
            <button
              onClick={() => setActiveTab("achievements")}
              className={`px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "achievements"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Trophy className="w-5 h-5" />
              Achievements
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === "certifications"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Award className="w-5 h-5" />
              Certifications
            </button>
          </div>
        </div>

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-card/30 backdrop-blur-md rounded-xl border border-card-border p-6 hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`${achievement.color} flex-shrink-0 mt-1`}>
                    {achievement.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
                className="group relative bg-card/30 backdrop-blur-md rounded-xl border border-card-border p-6 hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`${cert.color} p-4 rounded-full bg-card/50`}>
                    {cert.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;