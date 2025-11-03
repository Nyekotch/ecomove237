import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  FileText
} from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => setStatus("error"));
  };

  // Données de contact structurées
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: ["BIYEM-ASSI – Acacias", "BP : 2367 Yaoundé, Cameroun"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: ["(+237) 675 22 44 26", "(+237) 693 98 13 91"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      content: ["ecomovecamer@gmail.com"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FileText,
      title: "RCCM",
      content: ["RC/YAO/2024/B/674", "N° contr. M032416616615125"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Design moderne */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-white py-16 sm:py-24 overflow-hidden">
        {/* Éléments décoratifs animés */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl -top-32 sm:-top-48 -left-32 sm:-left-48 animate-pulse" />
          <div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl -bottom-32 sm:-bottom-48 -right-32 sm:-right-48 animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
              <Mail className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
                Parlons de votre projet
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {t("contact.title", { defaultValue: "Contactez-nous" })}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-95 px-2">
              {t("contact.subtitle", { 
                defaultValue: "Besoin d'un audit, d'une EIES ou d'un accompagnement QHSE ? Notre équipe d'experts est à votre écoute pour répondre à tous vos besoins." 
              })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cartes d'information rapide */}
      <section className="py-12 sm:py-16 -mt-12 sm:-mt-16 relative z-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 group hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.content.map((line, i) => (
                    <p key={i} className="text-gray-600 text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section principale - Contact Info + Form */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
            
            {/* Colonne gauche - Infos détaillées + Map (2/5) */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* Carte entreprise */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-primary/10"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">ECOMOVE CAMEROON</h2>
                    <p className="text-sm text-gray-600">SARL - Expert QHSE</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Horaires d'ouverture</p>
                      <p className="text-sm">Lun - Ven : 8h00 - 17h00</p>
                      <p className="text-sm">Sam : Sur rendez-vous</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Google Maps avec overlay moderne */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group"
              >
                <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold text-primary flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Notre localisation
                  </p>
                </div>
                <iframe
                  title="ECOMOVE Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.567890123456!2d11.516830!3d3.866670!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTAnMDAiTiAxMcKwMzAnMDAnRQ!5e0!3m2!1sfr!2scm!4v1234567890!5m2!1sfr!2scm"
                  width="100%"
                  height="400"
                  className="border-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </motion.div>
            </div>

            {/* Colonne droite - Formulaire (3/5) */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-8 md:p-10 border border-gray-100"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-primary mb-3">
                    {t("contact.form", { defaultValue: "Envoyez-nous un message" })}
                  </h2>
                  <p className="text-gray-600">
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Grid 2 colonnes pour nom et email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Jean Dupont"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="jean.dupont@exemple.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Grid 2 colonnes pour téléphone et entreprise */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+237 6XX XX XX XX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all duration-300"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Nom de votre entreprise"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      placeholder="Décrivez votre projet ou votre besoin..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Bouton d'envoi */}
                  <div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-gradient-to-r from-secondary to-secondary/90 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {status === "sending" ? (
                        <>
                          <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                          {t("form.sending", { defaultValue: "Envoi en cours..." })}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {t("form.send", { defaultValue: "Envoyer le message" })}
                        </>
                      )}
                    </button>
                  </div>

                  {/* Messages de statut */}
                  {status === "sent" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 bg-green-50 border-2 border-green-200 text-green-700 px-5 py-4 rounded-xl"
                    >
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                      <p className="font-medium">
                        Message envoyé avec succès ! Nous vous répondrons rapidement.
                      </p>
                    </motion.div>
                  )}
                  
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 bg-red-50 border-2 border-red-200 text-red-700 px-5 py-4 rounded-xl"
                    >
                      <AlertCircle className="w-6 h-6 flex-shrink-0" />
                      <p className="font-medium">
                        Une erreur s'est produite. Veuillez réessayer.
                      </p>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      {/* <section className="py-12 sm:py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Besoin d'une réponse immédiate ?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95 px-2">
            Appelez-nous directement et discutons de votre projet
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+237675224426"
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              (+237) 675 22 44 26
            </a>
            <a
              href="tel:+237693981391"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              (+237) 693 98 13 91
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
