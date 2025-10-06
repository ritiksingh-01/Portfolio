"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "../contexts/ThemeContext"
import { FaMusic } from "react-icons/fa";
import { useRef, useState } from "react";

function NavBar() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((error) => {
            // Optionally, show a message to the user
            console.log("Playback prevented:", error);
          });
      }
    }
  };

  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="relative z-20 flex justify-center items-center px-8 py-6 w-full">
      <div
        className={`flex items-center justify-between backdrop-blur-md border rounded-full px-6 py-3 max-w-4xl w-full shadow-lg transition-all duration-300 ${
          theme === "dark" ? "bg-white/5 border-white/10" : "bg-white/80 border-gray-200/50 shadow-xl"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div
            className={`w-8 h-8 backdrop-blur-md border rounded-lg flex items-center justify-center shadow-sm transition-colors duration-300 ${
              theme === "dark" ? "bg-white/10 border-white/20" : "bg-gray-100 border-gray-300"
            }`}
          >
            <span
              className={`font-bold text-lg transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              RS
            </span>
          </div>
          <span
            className={`font-semibold text-xl transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Ritik Singh
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className={`text-sm font-medium relative group transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Home
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
          </a>
          <a
            href="#about"
            className={`text-sm font-medium relative group transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            About
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
          </a>
          <a
            href="#skills"
            className={`text-sm font-medium relative group transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Skills
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
          </a>
          <a
            href="#projects"
            className={`text-sm font-medium relative group transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Projects
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
          </a>
          <a
            href="#contact"
            className={`text-sm font-medium relative group transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Contact
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
          </a>
        </div>

        {/* Right Side Controls - Music Player + Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* Music Player Button */}
          <button
            type="button"
            onClick={toggleMusic}
            className="relative hidden md:flex items-center justify-center"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                theme === "dark" 
                  ? "bg-white/10 border border-white/20 hover:bg-white/15" 
                  : "bg-gray-100 border border-gray-300 hover:bg-gray-200"
              } ${isPlaying 
                ? 'animate-spin-slow' 
                : `shadow-sm ${theme === "dark" ? "shadow-white/10" : "shadow-gray-200"}`
              }`}
            >
              <FaMusic 
                className={`text-lg transition duration-300 z-10 ${
                  theme === "dark" ? "text-white hover:text-blue-300" : "text-gray-700 hover:text-blue-600"
                } ${isPlaying ? 'animate-spin-slow' : ''}`}
              />
              {isPlaying && (
                <div 
                  className={`absolute inset-0 rounded-full border-t transition-all duration-300 animate-[spin_4.5s_linear_infinite] ${
                    theme === "dark" ? "border-blue-400/70" : "border-blue-500/70"
                  }`}
                  style={{ top: '-3px', left: '-3px', right: '-3px', bottom: '-3px' }}
                />
              )}
            </div>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-full transition-all duration-300 focus:outline-none ${
              theme === "dark" 
                ? "text-gray-300 hover:text-white hover:bg-white/10 border border-white/20" 
                : "text-gray-600 hover:text-gray-800 hover:bg-gray-200 border border-gray-300"
            }`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 transition-all duration-300" />
            ) : (
              <Moon className="w-5 h-5 transition-all duration-300" />
            )}
          </button>
        </div>

        <audio ref={audioRef} loop preload="auto" controls style={{ display: 'none' }}>
          <source src="/suzume.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </nav>
  )
}

export default NavBar