import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.jpg";

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/team", label: t("nav.team") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-darkgreen to-secondary text-white py-10">
      <div className="container mx-auto px-6 text-center md:text-left md:flex md:justify-between md:items-center">
        {/* Logo et nom */}
        <div className="mb-6 md:mb-0">
          <img src={logo} alt="ECOMOVE Cameroon" className="h-12 mx-auto md:mx-0 mb-2" />
          <h3 className="text-xl font-bold">MOUVEMENT ÉCOLOGIQUE</h3>
          <p>Accompagnement, Audit, Mise à niveau</p>
        </div>

        {/* Liens rapides */}
        <nav>
          <h4 className="text-lg font-semibold mb-3">Navigation</h4>
          <ul className="space-y-1">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-accent transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact simplifié */}
        <div className="mt-6 md:mt-0 text-sm">
          <h4 className="font-semibold mb-2">Contactez-nous</h4>
          <p>ECOMOVE CAMEROON SARL</p>
          <p>BP : 2367 Yaoundé, Cameroun</p>
          <p>Tél : (+237) 675 22 44 26 / 693 98 13 91</p>
          <p>
            Email :{" "}
            <a href="mailto:ecomovecamer@gmail.com" className="underline hover:text-accent">
              ecomovecamer@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Bas de page */}
      <div className="bg-black/20 py-4 mt-10">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} ECOMOVE Cameroon SARL | Tous droits réservés |{" "}
          <Link to="/legal" className="underline hover:text-accent">
            Mentions légales
          </Link>
        </p>
      </div>
    </footer>
  );
}
