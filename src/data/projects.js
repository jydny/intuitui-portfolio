export const projects = [
  {
    slug: "jovia-custom-app",
    title: "Jovia's Deposit & Loan Application",
    category: "User Experience",
    summary:
      "Redesigned Jovia's Deposit & Loan Application with a streamlined interface, intuitive UX, and refreshed UI — strengthening brand messaging and boosting engagement.",
    accent: "olive",
  },
 {
    slug: "design-system",
    title: "Design System",
    category: "User Experience",
    summary:
      "Built a design system based on Material UI (MUI) to align with Jovia's visual identity, ensuring consistency across all product interfaces.",
    accent: "wine",
  },
  {
    slug: "modules",
    title: "Custom Modules",
    category: "User Experience",
    summary:
      "Designed and built custom modules to enhance functionality and user experience.",
    accent: "wine",
  },
  {
    slug: "branding",
    title: "Branding",
    category: "Branding",
    summary:
      "Created a logo and built the entire suite of marketing efforts.",
    accent: "wine",
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
