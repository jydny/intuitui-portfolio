export const projects = [
  {
    slug: "jovia-deposit-loan",
    title: "Jovia's Deposit & Loan Application",
    category: "User Experience",
    summary:
      "Redesigned Jovia's Deposit & Loan Application with a streamlined interface, intuitive UX, and refreshed UI — strengthening brand messaging and boosting engagement.",
    accent: "olive",
  },
  {
    slug: "jovia-custom-app",
    title: "Custom Application Flow",
    category: "User Experience",
    summary:
      "Streamlined application flow with step-by-step guidance, clear visual hierarchy, and intuitive interactions.",
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
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
