import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";
import type { TeamMember } from "../components/TeamCard";
import teamData from "../data/team.json";
import { 
  Users, 
  Award, 
  Target, 
  Sparkles,
  TrendingUp,
  Shield,
  Lightbulb,
  Heart
} from "lucide-react";

export default function Team() {
  const { t } = useTranslation();

  // Statistiques de l'équipe
  const stats = [
    {
      icon: Users,
      value: teamData.length.toString(),
      label: "Experts qualifiés",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      value: "10+",
      label: "Années d'expérience",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      value: "100+",
      label: "Projets réalisés",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Satisfaction client",
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Valeurs de l'équipe
  const values = [
    {
      icon: Shield,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet"
    },
    {
      icon: Heart,
      title: "Engagement",
      description: "Dévoués à la protection de l'environnement"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Solutions innovantes et durables"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail d'équipe et synergie"
    }
  ];

  // Animations pour les cartes
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Design moderne et impactant */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-white py-24 sm:py-32 overflow-hidden">
        {/* Éléments décoratifs animés */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl top-1/2 right-0 animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        {/* Pattern de fond */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Rencontrez nos experts
              </span>
            </div>

            {/* Titre principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {t("team.title", { defaultValue: "Notre Équipe" })}
            </h1>

            {/* Sous-titre */}
            <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto opacity-95 leading-relaxed px-4 mb-8">
              {t("team.subtitle", { 
                defaultValue: "Une équipe jeune, dynamique et passionnée par l'environnement et le développement durable" 
              })}
            </p>

            {/* Description supplémentaire */}
            <p className="text-lg max-w-3xl mx-auto opacity-90 px-4">
              Des professionnels certifiés et expérimentés, unis par une vision commune : 
              protéger notre planète et accompagner les entreprises vers l'excellence QHSE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistiques - Design moderne avec cartes */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 group hover:-translate-y-2"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Nos valeurs
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Ce qui nous anime
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section équipe avec titre amélioré */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Les experts
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Rencontrez notre équipe
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des professionnels passionnés et qualifiés, prêts à vous accompagner 
              dans tous vos projets environnementaux et QHSE
            </p>
          </motion.div>

          {/* Grille des cartes membres */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            {teamData.map((member: TeamMember, i: number) => (
              <motion.div key={i} variants={itemVariants}>
                <TeamCard member={member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Prêt à travailler avec nous ?
            </h2>
            <p className="text-xl sm:text-2xl mb-10 opacity-95 max-w-3xl mx-auto">
              Notre équipe d'experts est à votre disposition pour discuter 
              de votre projet et vous proposer des solutions adaptées
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <Users className="w-5 h-5" />
                Contactez-nous
              </a>
              <a
                href="#services"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <Target className="w-5 h-5" />
                Nos services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
