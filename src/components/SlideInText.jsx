import { motion } from "framer-motion";

export default function SlideInText({
  text = "Simplicity is the ultimate sophistication.",
  as = "h2",
  className = "",
  delayStep = 0.03,
}) {
  const Tag = as;

  return (
    <Tag className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * delayStep, ease: "easeOut" }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
}