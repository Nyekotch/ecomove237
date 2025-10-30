import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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

  return (
    <div className="min-h-screen bg-light">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {t("contact.title", { defaultValue: "Contactez-nous" })}
          </motion.h1>
          <motion.p
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("contact.subtitle", { defaultValue: "Besoin d’un audit, d’une EIES ou d’un accompagnement QHSE ? Parlons-en." })}
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Infos */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">{t("contact.info")}</h2>
            <div className="space-y-4 text-lg">
              <p>
                <strong>ECOMOVE CAMEROON SARL</strong><br />
                BP : 2367 Yaoundé, Cameroun
              </p>
              <p>
                <strong>Téléphone :</strong><br />
                BIYEM-ASSI – Acacias : (+237) 675 22 44 26 / 693 98 13 91<br />
                N° contr. M032416616615125
              </p>
              <p>
                <strong>Email :</strong> ecomovecamer@gmail.com
              </p>
              <p>
                <strong>RCCM :</strong> RC/YAO/2024/B/674
              </p>
            </div>

            {/* Google Maps */}
            <div className="mt-8">
              <iframe
                title="ECOMOVE Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.567890123456!2d11.516830!3d3.866670!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNTAnMDAiTiAxMcKwMzAnMDAnRQ!5e0!3m2!1sfr!2scm!4v1234567890!5m2!1sfr!2scm"
                width="100%"
                height="300"
                className="border-0 rounded-lg shadow-md"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">{t("contact.form")}</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder={t("form.name")}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder={t("form.email")}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder={t("form.phone")}
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none"
              />
              <input
                type="text"
                name="company"
                placeholder={t("form.company")}
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none"
              />
              <textarea
                name="message"
                placeholder={t("form.message")}
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-accent transition disabled:opacity-70"
              >
                {status === "sending" ? t("form.sending") : t("form.send")}
              </button>
              {status === "sent" && (
                <p className="text-green-600 font-medium">Message envoyé avec succès !</p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-medium">Erreur. Réessayez.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}