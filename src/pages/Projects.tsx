import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ProjectsCard from "../components/ProjectsCard";
import projectsData from "../data/projects.json";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-light">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t("projects.title", { defaultValue: "Nos Réalisations" })}
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t("projects.subtitle", { defaultValue: "Des projets concrets pour un avenir durable" })}
          </motion.p>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projectsData.projects.map((project) => (
              <ProjectsCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}