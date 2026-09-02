import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const skillsData = [
  { category: "Languages", items: ["JavaScript", "HTML5", "CSS / SCSS", "C++"] },
  { category: "UI Frameworks", items: ["Tailwind", "Bootstrap", "Foundation"] },
  { category: "Design Tools", items: ["Figma", "Adobe Creative Cloud", "Foundation"] },
  { category: "CMS / CRM", items: ["Craft", "WordPress", "Joomla", "Salesforce Marketing Cloud"] },
  { category: "Video & Motion", items: ["After Effects", "Premiere Pro", "Final Cut Pro"] },
  { category: "3D Animation", items: ["Maya", "3ds Max"] },
  { category: "Version Control", items: ["Git"] },
  { category: "Project Management", items: ["Jira"] },
];

export default function SkillsSection() {
  return (
    <section className="max-w-page mx-auto px-5 sm:px-8 py-16 sm:py-20">
      {/* Mobile-only heading — desktop shows "Skills" embedded in the first row instead */}
      <h2 className="sm:hidden text-4xl font-bold tracking-tight text-slate-800 mb-6">
        Skills
      </h2>

      <div>
        {skillsData.map((row, i) => (
          <motion.div
            key={row.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
            className="border-t border-hairline py-6 sm:py-8 flex flex-col gap-2 sm:grid sm:grid-cols-[140px_160px_repeat(4,1fr)] sm:gap-x-6 sm:gap-y-0 sm:items-center"
          >
            {/* "Skills" heading — only in row 1, only visible sm+ */}
            <div className="hidden sm:block">
              {i === 0 && (
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-800">
                  Skills
                </h2>
              )}
            </div>

            <p className="text-muted text-base">{row.category}</p>

            {[0, 1, 2, 3].map((slot) => (
              <p key={slot} className="text-ink text-base font-medium">
                {row.items[slot] || ""}
              </p>
            ))}
          </motion.div>
        ))}
      </div>

      <div className="border-t border-hairline pt-8">
        <Link
          to="/work"
          className="text-sm text-muted inline-flex items-center gap-1 hover:gap-2 transition-all hover:text-ink"
        >
          See Work <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}