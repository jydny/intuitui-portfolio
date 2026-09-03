import projApp from "../assets/proj_app_576w.png";
import projDs from "../assets/proj_ds_576w.png";
import projLab from "../assets/proj_lab_576w.png";
import projModules from "../assets/proj_modules_576w.png";

/**
 * Thumbnail image for each project, keyed by slug. Used by the Work page grid
 * and the "Other Projects" block on every case-study page. `branding` reuses the
 * lab image since it has no dedicated thumbnail.
 */
export const projectThumbs = {
  "jovia-custom-app": projApp,
  "design-system": projDs,
  modules: projModules,
  branding: projLab,
};
