import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import { useTranslation } from "react-i18next";
import Projects from "./pages/Projects";
import { useState } from "react";
import Contact from "./pages/Contact";

export default function App() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">ECOMOVE</Link>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-secondary">{t("home")}</Link>
            <Link to="/team" className="hover:text-secondary">{t("team.title")}</Link>
            <Link to="/projects" className="hover:text-secondary">{t("projects.title")}</Link>
            <Link to="/contact" className="hover:text-secondary">{t("contact.title")}</Link>
          </div>

          {/* Right: language button + mobile hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr")}
              className="px-3 py-1 rounded-md border border-gray-200 text-sm"
              aria-label="Change language"
            >
              {i18n.language === "fr" ? "EN" : "FR"}
            </button>

            {/* Hamburger button for mobile */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMenuOpen((s) => !s)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                // X icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu (visible when hamburger is open) */}
        <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
          <div className="bg-white shadow-md border-t">
            <div className="flex flex-col px-6 py-4 space-y-3">
              <Link onClick={() => setMenuOpen(false)} to="/" className="font-medium">{t("home")}</Link>
              <Link onClick={() => setMenuOpen(false)} to="/team" className="font-medium">{t("team.title")}</Link>
              <Link onClick={() => setMenuOpen(false)} to="/projects" className="font-medium">{t("projects.title")}</Link>
              <Link onClick={() => setMenuOpen(false)} to="/contact" className="font-medium">{t("contact.title")}</Link>
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
      </main>
    </BrowserRouter>
  );
}