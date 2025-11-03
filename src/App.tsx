import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import { useTranslation } from "react-i18next";
import Projects from "./pages/Projects";
import { useState } from "react";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="/file.svg"
              alt="ECOMOVE Cameroun sarl"
              className="h-8 md:h-10 w-auto"
            />
            <span className="sr-only">ECOMOVE</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {[
              { path: "/", label: t("accueil.title") },
              { path: "/team", label: t("team.title") },
              { path: "/projects", label: t("projects.title") },
              { path: "/contact", label: t("contact.title") },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group transition-all duration-300"
              >
                <span className="group-hover:text-secondary">{item.label}</span>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right: language + menu button */}
          <div className="flex items-center gap-3">
            {/* Lang switcher */}
            <button
              onClick={() => i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")}
              className="px-3 py-1 rounded-full border border-gray-300 bg-gray-50 hover:bg-secondary hover:text-white transition text-sm font-semibold shadow-sm"
            >
              {i18n.language === "fr" ? "EN" : "FR"}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="bg-white/90 backdrop-blur-sm border-t border-gray-200 shadow-md">
            <div className="flex flex-col px-6 py-4 space-y-3 text-gray-700 font-medium">
              {[
                { path: "/", label: t("home") },
                { path: "/team", label: t("team.title") },
                { path: "/projects", label: t("projects.title") },
                { path: "/contact", label: t("contact.title") },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-secondary transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </main>

    </BrowserRouter>

  );
}