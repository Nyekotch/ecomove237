import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// import logo from "../assets/images/logo.png";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-primary to-darkgreen text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.img
          //src={logo}
          alt="ECOMOVE Cameroon"
          className="h-24 mx-auto mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.a
          href="#services"
          className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-light transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t("hero.cta")}
        </motion.a>
      </div>
    </div>
  );
}