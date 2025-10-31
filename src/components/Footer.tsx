// src/components/Footer.tsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/team", label: t("nav.team") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/clients", label: t("nav.clients") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const services = [
    "Études d’impact Environnemental et Social",
    "Audit d’Impact environnemental",
    "Notice d’Impact environnemental",
    "Évaluation environnementale stratégique",
    "Études des Dangers et plan d’urgence",
    "Accompagnement et mise à niveau QHSE",
    "Procédure d’obtention d’un permis environnemental",
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-darkgreen to-secondary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo + Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="ECOMOVE Cameroon" className="h-16 mb-4" />
            <h3 className="text-2xl font-bold mb-2">MOUVEMENT ÉCOLOGIQUE</h3>
            <p className="text-lg font-medium leading-tight">
              Accompagnement, Audit,<br />
              Mise à niveau, Développement
            </p>
            <div className="mt-4 space-y-1 text-sm">
              {["PRESTATIONS DE SERVICES", "CABINET D’ÉTUDES", "EIES", "ÉVALUATIONS ENVIRONNEMENTALES", "ÉTUDE DE DANGERS", "HSE", "MONTAGE DOSSIERS"].map((item) => (
                <div key={item} className="flex items-center">
                  <span className="text-accent mr-2">■</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold mb-4 text-accent">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-accent transition flex items-center">
                    <span className="mr-2">→</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-xl font-bold mb-4 text-accent">Nos Prestations</h4>
            <ul className="space-y-1 text-sm">
              {services.map((service, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
          >
            <h4 className="text-xl font-bold mb-4 text-accent">Contactez-nous</h4>
            <div className="space-y-3 text-sm">
              <p className="font-semibold">ECOMOVE CAMEROON SARL</p>
              <p>BP : 2367 Yaoundé, Cameroun</p>
              <p className="font-medium">BIYEM-ASSI – Acacias</p>
              <p>
                <strong>Tél :</strong> (+237) 675 22 44 26 / 693 98 13 91
              </p>
              <p>
                <strong>N° contr. :</strong> M032416616615125
              </p>
              <p>
                <strong>Email :</strong>{" "}
                <a href="mailto:ecomovecamer@gmail.com" className="underline hover:text-accent">
                  ecomovecamer@gmail.com
                </a>
              </p>
              <p>
                <strong>RCCM :</strong> RC/YAO/2024/B/674
              </p>
            </div>

            {/* CTA Button */}
            <motion.a
              href="/contact"
              className="mt-6 inline-block bg-accent text-primary px-6 py-3 rounded-full font-bold hover:bg-white transition shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un devis
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} ECOMOVE Cameroon SARL | Tous droits réservés |{" "}
            <Link to="/legal" className="underline hover:text-accent">
              Mentions légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}