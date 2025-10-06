import { useState, useEffect, useRef } from "react";
import {
  Mail,
  ArrowRight,
  Github,
  Linkedin,
  Download,
  Code,
  Sparkles,
} from "lucide-react";
import LightRays from "./LightRays";
import NavBar from "../../Layout/NavBar";
import { useTheme } from "../../contexts/ThemeContext";

const shineAnimation = `
  @keyframes shine {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse-glow {
    0%, 100% {
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
    }
    50% {
      box-shadow: 0 0 25px rgba(59, 130, 246, 0.6);
    }
  }

  @keyframes text-glow {
    0%, 100% {
      text-shadow: 0 0 15px rgba(147, 51, 234, 0.5);
    }
    50% {
      text-shadow: 0 0 25px rgba(147, 51, 234, 0.8);
    }
  }

  @keyframes morph {
    0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .animate-shine {
    animation: shine linear infinite;
  }
  
  .animate-float {
    animation: float 2.5s ease-in-out infinite;
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .animate-slideInLeft {
    animation: slideInLeft 0.6s ease-out forwards;
  }

  .animate-slideInRight {
    animation: slideInRight 0.6s ease-out forwards;
  }

  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }

  .animate-text-glow {
    animation: text-glow 3s ease-in-out infinite;
  }

  .animate-morph {
    animation: morph 8s ease-in-out infinite;
  }

  .animate-shimmer {
    animation: shimmer 2s ease-in-out infinite;
  }
`;

// Add styles to head
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = shineAnimation;
  document.head.appendChild(style);
}

// Enhanced ShinyText component
const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-transparent bg-clip-text inline-block ${disabled ? "" : "animate-shine"} ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.4) 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonHover = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleButtonLeave = () => {
    setActiveButton(null);
  };

  return (
    <div
      className={`relative h-screen overflow-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-800"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      {/* Enhanced Light Rays - Only in Dark Mode */}
      {theme === "dark" && (
        <div className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1.5}
            lightSpread={0.6}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            fadeDistance={1.5}
            className="custom-rays"
          />
        </div>
      )}

      {/* Light Mode Background Pattern */}
      {theme === "light" && (
        <div className="absolute inset-0 opacity-20" style={{ zIndex: 1 }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.04) 0%, transparent 50%)
              `,
            }}
          />
        </div>
      )}

      {/* Theme-aware gradient overlays */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          theme === "dark"
            ? "bg-gradient-to-b from-transparent via-black/10 to-black/30"
            : "bg-gradient-to-b from-blue-50/30 via-white/20 to-purple-50/30"
        }`}
        style={{ zIndex: 3 }}
      />

      {/* Subtle theme-aware morphing shapes */}
      <div
        className={`absolute top-16 right-16 w-20 h-20 animate-morph opacity-10 transition-colors duration-500 ${
          theme === "dark"
            ? "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
            : "bg-gradient-to-br from-blue-400/10 to-purple-400/10"
        }`}
        style={{ zIndex: 3 }}
      />
      <div
        className={`absolute bottom-16 left-16 w-16 h-16 animate-morph opacity-8 transition-colors duration-500 ${
          theme === "dark"
            ? "bg-gradient-to-br from-purple-500/5 to-cyan-500/5"
            : "bg-gradient-to-br from-purple-400/10 to-cyan-400/10"
        }`}
        style={{ zIndex: 3, animationDelay: "2s" }}
      />

      {/* Navigation */}
      <NavBar />

      {/* Main Content Container - Fixed spacing */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-0 px-6 text-center pt-24 pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Theme-aware Badge - Reduced top margin */}
          <div className="flex justify-center">
            <div
              className={`inline-flex items-center space-x-3 backdrop-blur-xl border rounded-full px-5 py-2.5 shadow-lg hover:scale-105 transition-all duration-500 ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:bg-white/8"
                  : "bg-white/80 border-gray-200/50 hover:bg-white shadow-sm"
              } ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              </div>
              <span
                className={`text-sm font-medium tracking-wide ${theme === "dark" ? "text-white" : "text-gray-800"}`}
              >
                MERN Stack Developer
              </span>
              <Code className="w-3.5 h-3.5 text-blue-400" />
            </div>
          </div>

          {/* Theme-aware Main Heading - Reduced spacing */}
          <div
            className={`${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[0.9] tracking-tight transition-colors duration-500 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: '"Limelight", sans-serif', fontWeight: 400 }}
            >
              <span
                className="block animate-slideInLeft pb-5"
                style={{ animationDelay: "0.6s" }}
              >
                Building digital solutions
              </span>
              <span
                className="block animate-slideInRight"
                style={{ animationDelay: "0.8s" }}
              >
                that drive{" "}
                <span className="relative inline-block">
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 animate-text-glow pr-3">
                    results
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 rounded-full opacity-60"></div>
                </span>
              </span>
            </h1>
          </div>

          {/* Theme-aware Profile Section - Fixed image dimensions */}
          <div
            className={`flex italic items-center justify-center space-x-4 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
            style={{ animationDelay: "1.2s" , fontFamily: '"Audiowide", sans-serif', fontWeight: 400}}
          >
            <span
              className={`text-lg md:text-xl font-light ${theme === "dark" ? "text-white" : "text-gray-700"}`}
            >
              Hello, I'm Ritik Singh
            </span>

            {/* <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div
                className={`relative w-20 h-12 md:w-24 md:h-14 rounded-2xl overflow-hidden transition-colors duration-500 ${
                  theme === "dark"
                    ? "bg-gradient-to-b from-gray-800 to-gray-900"
                    : "bg-gradient-to-b from-blue-100 to-purple-100"
                }`}
              >
                <img
                  src="/profile-image.png"
                  alt="Ritik Singh"
                  className="w-full h-full rounded-2xl object-cover shadow-inner transform scale-100"
                  style={{ objectPosition: "0 29%" }}
                />
              </div>
            </div> */}

            <span
              className={`text-lg md:text-xl font-light ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
            >
              a MERN Stack Developer
            </span>
          </div>

          {/* Theme-aware CTA Section - Reduced spacing */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
            style={{ animationDelay: "1.4s" }}
          >
            <button
              className="group relative flex items-center space-x-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 border border-blue-500/30 overflow-hidden"
              onMouseEnter={() => handleButtonHover("connect")}
              onMouseLeave={handleButtonLeave}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Let's Connect</span>
              <div
                className={`relative z-10 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${activeButton === "connect" ? "bg-white/30 scale-110 rotate-45" : ""}`}
              >
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </div>
            </button>

            <button
              className={`group flex items-center space-x-3 backdrop-blur-xl border rounded-full px-6 py-3.5 font-semibold text-base transition-all duration-300 hover:scale-105 shadow-md ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-white hover:bg-white/10"
                  : "bg-black/5 border-black/10 text-gray-900 hover:bg-black/10 shadow-gray-200/50"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Theme-aware Social Links - Reduced spacing */}
          <div
            className={`flex justify-center space-x-4 mt-6 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
            style={{ animationDelay: "1.6s" }}
          >
            {[
              { icon: Github, label: "GitHub", color: "hover:bg-gray-700" },
              { icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-600" },
              { icon: Mail, label: "Email", color: "hover:bg-green-600" },
            ].map(({ icon: Icon, label, color }, index) => (
              <button
                key={label}
                className={`relative w-10 h-10 backdrop-blur-sm rounded-full flex items-center justify-center border ${color} hover:scale-110 transition-all duration-300 group overflow-hidden ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 text-gray-400 hover:text-white"
                    : "bg-black/5 border-black/10 text-gray-600 hover:text-gray-900 shadow-sm"
                }`}
                title={label}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ${
                    theme === "dark" ? "via-white/10" : "via-black/10"
                  }`}
                ></div>
                <Icon className="w-4 h-4 group-hover:scale-110 transition-transform relative z-10" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Minimal decorative elements */}
      <div
        className={`absolute top-1/4 left-16 w-1.5 h-1.5 rounded-full opacity-30 transition-colors duration-500 ${
          theme === "dark" ? "bg-blue-400/40" : "bg-blue-600/40"
        }`}
        style={{ zIndex: 4 }}
      ></div>
      <div
        className={`absolute top-1/3 right-20 w-1 h-1 rounded-full opacity-20 transition-colors duration-500 ${
          theme === "dark" ? "bg-purple-400/30" : "bg-purple-600/30"
        }`}
        style={{ zIndex: 4 }}
      ></div>
      <div
        className={`absolute bottom-1/4 left-1/4 w-1 h-1 rounded-full opacity-15 transition-colors duration-500 ${
          theme === "dark" ? "bg-cyan-300/25" : "bg-cyan-600/25"
        }`}
        style={{ zIndex: 4 }}
      ></div>
    </div>
  );
};

export default HeroSection;