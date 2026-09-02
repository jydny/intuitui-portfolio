import { motion } from "framer-motion";

/**
 * RevealText — animates a block of text word-by-word, fading up into
 * place as it scrolls into view. Smoother and more readable for longer
 * paragraphs than a character-by-character animation.
 *
 * Props:
 *   text       (string) — the paragraph text to animate
 *   as         (string) — HTML tag to render (default "p")
 *   className  (string) — pass through your own Tailwind classes
 *   delayStep  (number, seconds) — stagger delay between words (default 0.03)
 *   once       (bool)   — only animate the first time it scrolls into view (default true)
 */
export default function RevealText({
  text = "",
  as = "p",
  className = "",
  delayStep = 0.03,
  once = true,
}) {
  const Tag = as;
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once, margin: "-80px" }}
          transition={{ delay: i * delayStep, duration: 0.5, ease: "easeOut" }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}