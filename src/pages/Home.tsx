import Hero from "../components/Hero";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  // `t(..., { returnObjects: true })` returns `object` in TS by default.
  // Cast to `string[]` so `.map` is available and typed correctly.
  const whyItems = t("why.items", { returnObjects: true }) as string[];
  const servicesItems = t("services.items", { returnObjects: true }) as string[];

  return (
    <>
      <Hero />
      
      {/* Section Pourquoi nous */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            {t("why.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whyItems.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-3 bg-light p-5 rounded-lg">
                <input type="checkbox" checked readOnly className="mt-1 w-5 h-5 text-secondary" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-light">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            {t("services.title")}
          </h2>
          <ul className="space-y-4 max-w-4xl mx-auto text-lg">
            {servicesItems.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-secondary text-xl">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}