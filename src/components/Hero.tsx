import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.jpg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-primary to-darkgreen text-white py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Logo animé */}
        <motion.img
          src={logo}
          alt="ECOMOVE Cameroon"
          className="h-20 sm:h-24 md:h-28 lg:h-32 mx-auto mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Titre animé */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 leading-tight px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t("hero.title")}
        </motion.h1>

        {/* Sous-titre animé */}
        <motion.p
          className="text-base sm:text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-medium px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Bouton animé */}
        <motion.a
          href="#services"
          className="inline-block bg-white text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold text-base sm:text-lg hover:bg-light transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("hero.cta")}
        </motion.a>
      </div>
    </section>
  );
}
