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
      description: "Specializing in machine learning, data analytics, and AI applications with hands-on experience in modern development frameworks."
    },
    {
      degree: "Class XII (CBSE)",
      institution: "Senior Secondary Education",
      period: "2020-2021",
      description: "Completed higher secondary education with focus on Mathematics, Physics, and Computer Science."
    },
    {
      degree: "Class X (CBSE)",
      institution: "Secondary Education",
      period: "2018-2019",
      description: "Foundation in core subjects with early exposure to computer science and programming concepts."
    }
  ];

  const highlights = [
    {
      icon: Award,
      title: "GSSoC Rank #46",
      description: "Out of 32,000+ participants"
    },
    {
      icon: Code2,
      title: "SIH Qualified",
      description: "Cleared internal hackathon"
    },
    {
      icon: GraduationCap,
      title: "Open Source",
      description: "Active contributor"
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">About Me</h2>
          <p className="text-xl text-gray-600">Get to know more about my journey</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Main About Content - Takes up 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            {/* Introduction Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                Who I Am
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate <span className="font-semibold text-blue-600">Artificial Intelligence and Data Science</span> undergraduate with an unwavering dedication to frontend development and innovative problem-solving.
                </p>
                <p className="text-lg">
                  My journey in technology is fueled by an insatiable curiosity and commitment to excellence. Whether crafting beautiful, responsive user interfaces with <span className="font-semibold">React.js and Tailwind CSS</span>, tackling complex algorithmic challenges, or contributing to meaningful open-source projects, I approach every challenge with precision and enthusiasm.
                </p>
                <p className="text-lg">
                  Through competitive programming and hackathons, I've sharpened my analytical thinking and collaborative skills, constantly pushing the boundaries of what's possible with code.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 sticky top-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Education</h3>
              </div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-blue-200">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-100"></div>
                    
                    <div className="mb-1">
                      <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                      <p className="text-sm font-semibold text-gray-700">{edu.institution}</p>
                      {edu.university && (
                        <p className="text-xs text-gray-500">{edu.university}</p>
                      )}
                    </div>
                    
                    <p className="text-sm text-blue-600 font-semibold mb-2">{edu.period}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{edu.description}</p>
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