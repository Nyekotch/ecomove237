import { motion } from "framer-motion";

interface Project {
  title: string;
  desc: string;
  image: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  // Charger toutes les images de `src/assets/images/projects` via Vite
  // Utilise `as: 'url'` pour obtenir des URLs utilisables dans <img src="..." />
  const projectImgs = import.meta.glob(
    "../assets/images/projects/*",
    { eager: true, as: "url" }
  ) as Record<string, string>;

  const resolveImage = (imgName: string) => {
    if (!imgName) return "";
    const base = imgName.replace(/\.[^.]+$/, "").toLowerCase();
    for (const p in projectImgs) {
      const filename = p.split("/").pop()!.replace(/\.[^.]+$/, "").toLowerCase();
      // match exact or partial (to be tolerant aux espaces/accents/different séparateurs)
      if (filename === base || filename.includes(base) || base.includes(filename)) {
        return projectImgs[p];
      }
    }
    // fallback: return empty string (browser won't display) or a placeholder if you have one
    return "";
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={resolveImage(project.image)}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white font-bold text-lg">{project.title}</h3>
        <p className="text-white/90 text-sm mt-1">{project.desc}</p>
      </div>
    </motion.div>
  );
}