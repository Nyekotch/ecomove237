// src/components/Footer.tsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

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
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          
          {/* Logo + Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/file.svg"
              alt="ECOMOVE Cameroon"
              className="h-12 sm:h-16 mb-4 mx-auto md:mx-0"
            />
            <h3 className="text-2xl font-bold mb-2">MOUVEMENT ÉCOLOGIQUE</h3>
            <p className="text-base sm:text-lg font-medium leading-tight">
              Accompagnement, Audit, <br />
              Mise à niveau, Développement
            </p>
          </motion.div>

          {/* Agrément officiel */}
          <div className="mt-4 md:mt-6 border-t border-white/30 pt-4 md:border-none md:pt-0">
            <div className="flex flex-col items-center md:items-start gap-2 mb-2">
              {/* <span className="text-2xl">✅</span> */}
              <p className="font-bold text-accent uppercase">
                Agrément Officiel
              </p>
            </div>
            <p className="text-xs sm:text-sm leading-tight">
              <strong>A/EIES-AES N° -----019</strong>
              <br />
              Délivré le <strong>04 décembre 2024</strong>
              <br />
              Par le Ministère de l'Environnement (MINEPDED)
            </p>
            <a
              href="/agrement.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-white text-primary px-4 py-2 rounded-full text-xs font-bold hover:bg-accent hover:text-white transition"
            >
              👁️ Voir le certificat
            </a>
          </div>

          {/* Nos Prestations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg sm:text-xl font-bold mb-4 text-accent">
              Nos Prestations
            </h4>
            <ul className="space-y-1 text-sm sm:text-base">
              {services.map((service, i) => (
                <li key={i} className="flex justify-center md:justify-start items-start">
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
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-md"
          >
            <h4 className="text-lg sm:text-xl font-bold mb-4 text-accent">
              Contactez-nous
            </h4>
            <div className="space-y-2 text-sm sm:text-base">
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
                <a
                  href="mailto:ecomovecamer@gmail.com"
                  className="underline hover:text-accent"
                >
                  ecomovecamer@gmail.com
                </a>
              </p>
              <p>
                <strong>RCCM :</strong> RC/YAO/2024/B/674
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="/contact"
              className="mt-6 inline-block bg-accent text-primary px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-bold hover:bg-white transition shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Demander un devis
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/20 py-3 sm:py-4">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm">
          <p>
            © {new Date().getFullYear()} ECOMOVE Cameroon SARL | Tous droits
            réservés |{" "}
            <Link to="/legal" className="underline hover:text-accent">
              Mentions légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}