import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export interface TeamMember {
  name: string;
  qualification: string;
  role: string;
  skills: string[];
  photo: string; // ✅ photo du membre
}

interface Props {
  member: TeamMember;
}

export default function TeamCard({ member }: Props) {
  const { t } = useTranslation();

  // Charger les images statiques (ex: default-profile.svg) depuis src/assets/images
  const assetImgs = import.meta.glob("../assets/images/*", { eager: true, as: "url" }) as Record<string, string>;

  const resolvePhoto = (photoPath: string) => {
    if (!photoPath) return "";
    // team.json peut contenir "/src/assets/images/default-profile.svg" ou juste un nom de fichier
    const filename = photoPath.split("/").pop()!.toLowerCase();
    for (const p in assetImgs) {
      if (p.toLowerCase().endsWith(filename)) return assetImgs[p];
    }
    return photoPath; // laisser tel quel si on n'a pas trouvé d'équivalent local
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* ✅ Photo du membre avec animation Framer Motion */}
      <motion.div
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-primary shadow-lg mb-4 cursor-pointer"
        whileHover={{ scale: 1.1, rotate: 2 }} // 🔥 zoom + légère rotation au survol
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <img
          src={resolvePhoto(member.photo)}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ✅ Informations */}
      <h3 className="text-lg sm:text-xl font-bold text-primary mb-1 break-words">
        {member.name}
      </h3>
      <p className="text-sm sm:text-base text-secondary font-semibold mb-1 break-words">
        {member.role}
      </p>
      <p className="text-sm sm:text-base text-gray-600 italic mb-3 sm:mb-4 break-words">
        {member.qualification}
      </p>

      {/* ✅ Liste des compétences */}
      <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
        {member.skills.map((skill, i) => (
          <li key={i} className="flex items-center justify-center gap-2">
            <span className="text-accent">•</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
