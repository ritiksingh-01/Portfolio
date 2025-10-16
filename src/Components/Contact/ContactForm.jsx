import { useState } from "react";
import {
  Send,
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters.";
    }

    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section
      className={`py-24 px-6 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-black"
          : "bg-gradient-to-b from-white to-gray-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className={`text-5xl md:text-6xl font-bold transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Get In Touch
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto transition-colors duration-500 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        {isSubmitted ? (
          <div
            className={`max-w-2xl mx-auto rounded-2xl border shadow-lg p-12 ${
              theme === "dark"
                ? "bg-gray-800/50 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="rounded-full bg-green-100 p-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3
                className={`text-3xl font-bold transition-colors duration-500 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Message Sent!
              </h3>
              <p
                className={`text-center max-w-md text-lg transition-colors duration-500 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className={`mt-6 px-6 py-3 border-2 rounded-lg hover:border-blue-500 transition-all font-medium ${
                  theme === "dark"
                    ? "border-gray-600 hover:bg-gray-700 text-white"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Form */}
            <div
              className={`rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700 hover:border-blue-500"
                  : "bg-white border-gray-200 hover:border-blue-400"
              }`}
            >
              <div className="flex items-start gap-3 mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                <div>
                  <h2
                    className={`text-2xl font-bold mb-1 transition-colors duration-500 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Send me a message
                  </h2>
                  <p
                    className={`text-sm transition-colors duration-500 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Fill out the form below and I'll get back to you as soon as
                    possible.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-semibold mb-2 transition-colors duration-500 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      theme === "dark"
                        ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-500 focus:bg-gray-700"
                        : "bg-gray-50 border-gray-200 focus:bg-white"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <span className="font-medium">⚠</span> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-semibold mb-2 transition-colors duration-500 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      theme === "dark"
                        ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-500 focus:bg-gray-700"
                        : "bg-gray-50 border-gray-200 focus:bg-white"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <span className="font-medium">⚠</span> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-semibold mb-2 transition-colors duration-500 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      theme === "dark"
                        ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-500 focus:bg-gray-700"
                        : "bg-gray-50 border-gray-200 focus:bg-white"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <span className="font-medium">⚠</span> {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-semibold mb-2 transition-colors duration-500 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss a project opportunity..."
                    rows="5"
                    className={`w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                      theme === "dark"
                        ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-500 focus:bg-gray-700"
                        : "bg-gray-50 border-gray-200 focus:bg-white"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <span className="font-medium">⚠</span> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center font-semibold shadow-lg hover:shadow-xl ${
                    theme === "dark"
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Sending</span>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
            <div
              className={`rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 p-8 ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700 hover:border-blue-500"
                  : "bg-white border-gray-200 hover:border-blue-400"
              }`}
            >
              <div className="flex items-start gap-3 mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                <div>
                  <h2
                    className={`text-2xl font-bold mb-1 transition-colors duration-500 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Connect with me
                  </h2>
                  <p
                    className={`text-sm transition-colors duration-500 ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    You can also reach out to me directly through these channels
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://github.com/ritiksingh-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-all group ${
                    theme === "dark"
                      ? "border-gray-700 hover:border-blue-500 hover:bg-gray-700/50"
                      : "border-gray-200 hover:border-blue-500 hover:bg-blue-50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      theme === "dark"
                        ? "bg-gray-700 group-hover:bg-gray-600"
                        : "bg-gray-100 group-hover:bg-blue-100"
                    }`}
                  >
                    <Github
                      className={`h-5 w-5 transition-colors ${
                        theme === "dark"
                          ? "text-white group-hover:text-blue-400"
                          : "text-gray-700 group-hover:text-blue-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold mb-1 transition-colors duration-500 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      GitHub
                    </h3>
                    <p
                      className={`text-sm transition-colors break-all ${
                        theme === "dark"
                          ? "text-gray-400 group-hover:text-blue-400"
                          : "text-gray-600 group-hover:text-blue-600"
                      }`}
                    >
                      github.com/ritiksingh-01
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/ritik-singh01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-all group ${
                    theme === "dark"
                      ? "border-gray-700 hover:border-blue-500 hover:bg-gray-700/50"
                      : "border-gray-200 hover:border-blue-500 hover:bg-blue-50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      theme === "dark"
                        ? "bg-gray-700 group-hover:bg-gray-600"
                        : "bg-gray-100 group-hover:bg-blue-100"
                    }`}
                  >
                    <Linkedin
                      className={`h-5 w-5 transition-colors ${
                        theme === "dark"
                          ? "text-white group-hover:text-blue-400"
                          : "text-gray-700 group-hover:text-blue-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold mb-1 transition-colors duration-500 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      LinkedIn
                    </h3>
                    <p
                      className={`text-sm transition-colors break-all ${
                        theme === "dark"
                          ? "text-gray-400 group-hover:text-blue-400"
                          : "text-gray-600 group-hover:text-blue-600"
                      }`}
                    >
                      linkedin.com/in/ritik-singh01
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:ritiksingh.rsr01@gmail.com"
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-all group ${
                    theme === "dark"
                      ? "border-gray-700 hover:border-blue-500 hover:bg-gray-700/50"
                      : "border-gray-200 hover:border-blue-500 hover:bg-blue-50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      theme === "dark"
                        ? "bg-gray-700 group-hover:bg-gray-600"
                        : "bg-gray-100 group-hover:bg-blue-100"
                    }`}
                  >
                    <Mail
                      className={`h-5 w-5 transition-colors ${
                        theme === "dark"
                          ? "text-white group-hover:text-blue-400"
                          : "text-gray-700 group-hover:text-blue-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold mb-1 transition-colors duration-500 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Email
                    </h3>
                    <p
                      className={`text-sm transition-colors break-all ${
                        theme === "dark"
                          ? "text-gray-400 group-hover:text-blue-400"
                          : "text-gray-600 group-hover:text-blue-600"
                      }`}
                    >
                      ritiksingh.rsr01@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="tel:+918115214747"
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-all group ${
                    theme === "dark"
                      ? "border-gray-700 hover:border-blue-500 hover:bg-gray-700/50"
                      : "border-gray-200 hover:border-blue-500 hover:bg-blue-50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      theme === "dark"
                        ? "bg-gray-700 group-hover:bg-gray-600"
                        : "bg-gray-100 group-hover:bg-blue-100"
                    }`}
                  >
                    <Phone
                      className={`h-5 w-5 transition-colors ${
                        theme === "dark"
                          ? "text-white group-hover:text-blue-400"
                          : "text-gray-700 group-hover:text-blue-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`font-semibold mb-1 transition-colors duration-500 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Phone
                    </h3>
                    <p
                      className={`text-sm transition-colors ${
                        theme === "dark"
                          ? "text-gray-400 group-hover:text-blue-400"
                          : "text-gray-600 group-hover:text-blue-600"
                      }`}
                    >
                      +91 8115214747
                    </p>
                  </div>
                </a>
              </div>
              <div
                className={`mt-8 pt-6 border-t transition-colors duration-500 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-3 transition-colors duration-500 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Current Location
                </h3>
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl border ${
                    theme === "dark"
                      ? "bg-gray-700/50 border-gray-700 text-gray-300"
                      : "bg-gray-50 border-gray-200 text-gray-600"
                  }`}
                >
                  <MapPin
                    className={`h-5 w-5 flex-shrink-0 ${theme === "dark" ? "text-white" : "text-black"}`}
                  />
                  <span className="font-medium">Mathura, India</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default ContactForm;