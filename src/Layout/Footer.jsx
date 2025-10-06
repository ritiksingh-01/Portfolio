import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Let's Connect</h3>
            <p className="text-gray-600">Building the future, one project at a time</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/ritiksingh-01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ritik-singh01/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 border border-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/ritiksingh_01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 border border-gray-200 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="mailto:ritiksingh.rsr01@gmail.com"
              className="p-3 rounded-full bg-gray-100 border border-gray-200 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© 2025 Portfolio. Built By Ritik Singh</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;