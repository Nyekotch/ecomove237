import Hero from "../components/Hero";
import { useTranslation } from "react-i18next";
import { CheckCircle, Sparkles, Award, Shield, Zap, Users } from "lucide-react";

export default function Home() {
  const { t } = useTranslation();

  const whyItems = t("why.items", { returnObjects: true }) as string[];
  const servicesItems = t("services.items", { returnObjects: true }) as string[];

  // Icônes pour la section "Pourquoi nous"
  const whyIcons = [Shield, Award, Users, Zap];

  return (
    <>
      <Hero />
      
      {/* Section Pourquoi nous - Design moderne avec cartes */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          {/* En-tête de section amélioré */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
                Nos avantages
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
              {t("why.title")}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
              Découvrez ce qui nous rend uniques et pourquoi nos clients nous font confiance
            </p>
          </div>

          {/* Grille de cartes avec animations au hover */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyItems.map((item: string, i: number) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <div
                  key={i}
                  className="group relative bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg sm:hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-secondary/30 hover:-translate-y-1 sm:hover:-translate-y-2"
                >
                  {/* Effet de gradient au hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative flex items-start gap-3 sm:gap-4">
                    {/* Icône avec cercle coloré */}
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-lg sm:rounded-xl flex items-center justify-center shadow group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                  </div>

                  {/* Numéro décoratif */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-4xl sm:text-6xl font-bold text-gray-100 group-hover:text-secondary/10 transition-colors duration-300">
                    {(i + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

          {/* Services - Design liste amélioré */}
      <section id="services" className="py-12 sm:py-20 bg-white relative overflow-hidden">
        {/* Éléments décoratifs en arrière-plan */}
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6">
          {/* En-tête de section */}
          <div className="text-center mb-10 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
                Nos services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
              {t("services.title")}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-2">
              Une gamme complète de solutions adaptées à vos besoins
            </p>
          </div>          {/* Liste de services en colonnes avec design moderne */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {servicesItems.map((item: string, i: number) => (
                <div
                  key={i}
                  className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-primary/30 hover:shadow transition-all duration-300 hover:-translate-x-1"
                >
                  {/* Icône check stylisée */}
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-secondary to-secondary/80 rounded-md sm:rounded-lg flex items-center justify-center group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2.5} />
                  </div>
                  
                  <p className="text-base sm:text-lg text-gray-800 leading-relaxed flex-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-action en bas de section */}
          <div className="text-center mt-10 sm:mt-16">
            <button className="bg-gradient-to-r from-primary to-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-md hover:shadow-lg sm:hover:shadow-xl hover:scale-102 sm:hover:scale-105 transition-all duration-300">
              Demander un devis gratuit
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
