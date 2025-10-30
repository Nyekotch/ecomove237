import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TeamCard from "../components/TeamCard";
import type { TeamMember } from "../components/TeamCard";
import teamData from "../data/team.json";
import styles from '../styles/Team.module.css';

export default function Team() {
  const { t } = useTranslation();

  return (
    <div className={styles.teamContainer}>
      {/* Header Section */}
      <section className={styles.header}>
        <div className={styles.headerContent}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {t("team.title", { defaultValue: "Notre Équipe" })}
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t("team.subtitle", { defaultValue: "Une équipe jeune, dynamique et experte en environnement" })}
          </motion.p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          <div className={styles.cardsGrid}>
            {teamData.map((member: TeamMember, i: number) => (
              <TeamCard key={i} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}