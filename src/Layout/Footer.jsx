import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-12 px-6 border-t transition-colors duration-500 ${
        theme === "dark"
          ? "bg-black border-gray-800"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3
              className={`text-2xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              Let's Connect
            </h3>
            <p
              className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            >
              Building the future, one project at a time
            </p>
          </div>

          <div className="flex gap-4">
            {[
              {
                href: "https://github.com/ritiksingh-01",
                label: "GitHub",
                Icon: Github,
                hover:
                  theme === "dark"
                    ? "hover:bg-gray-700 hover:border-gray-600"
                    : "hover:bg-gray-900 hover:text-white hover:border-gray-900",
              },
              {
                href: "https://www.linkedin.com/in/ritik-singh01/",
                label: "LinkedIn",
                Icon: Linkedin,
                hover:
                  theme === "dark"
                    ? "hover:bg-blue-700 hover:border-blue-700"
                    : "hover:bg-blue-600 hover:text-white hover:border-blue-600",
              },
              {
                href: "https://x.com/ritiksingh_01",
                label: "Twitter",
                Icon: Twitter,
                hover:
                  theme === "dark"
                    ? "hover:bg-blue-500 hover:border-blue-500"
                    : "hover:bg-blue-400 hover:text-white hover:border-blue-400",
              },
              {
                href: "mailto:ritiksingh.rsr01@gmail.com",
                label: "Email",
                Icon: Mail,
                hover:
                  theme === "dark"
                    ? "hover:bg-red-600 hover:border-red-600"
                    : "hover:bg-red-500 hover:text-white hover:border-red-500",
              },
            ].map(({ href, label, Icon, hover }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 border ${
                  theme === "dark"
                    ? `bg-gray-800 text-gray-200 border-gray-700 ${hover}`
                    : `bg-gray-100 text-gray-800 border-gray-200 ${hover}`
                }`}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div
          className={`mt-8 pt-8 border-t text-center transition-colors duration-500 ${
            theme === "dark"
              ? "border-gray-800 text-gray-400"
              : "border-gray-200 text-gray-600"
          }`}
        >
          <p>© 2025 Portfolio. Built By Ritik Singh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;