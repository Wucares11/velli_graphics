import niveaImg from "../assets/nivea.jpg";
import cocacolaImg from "../assets/cocacola.jpg";
import pepsiImg from "../assets/pepsi.jpg";

import velliFoodsVideo from "../assets/NEW VELLI FOODS 1.mp4";
import velliBanksVideo from "../assets/velli bsnks.mp4";
import velliSportifyVideo from "../assets/VELLI SPORTIFY.mp4";

export const PROJECTS = [
  // ─── Video Projects ───────────────────────────────────────────────
  {
    title: "Velli Foods — Brand Motion Promo",
    description:
      "A vibrant commercial motion video designed for a modern food brand. Features dynamic product reveals, punchy pacing, and mouthwatering visual storytelling.",
    tags: ["Motion Graphics", "Food Brand", "Commercial Ad"],
    isVideo: true,
    video: velliFoodsVideo,
    link: "#",
  },
  {
    title: "Velli Sportify — High-Energy Campaign",
    description:
      "A high-impact motion promo crafted with rhythmic beats, intense visual cuts, and kinetic typography built to capture energy and athletic attitude.",
    tags: ["Motion Design", "Sports & Lifestyle", "Promo Reel"],
    isVideo: true,
    video: velliSportifyVideo,
    link: "#",
  },
  {
    title: "Velli Banks — Fintech Digital Ad",
    description:
      "A sleek commercial motion advertisement showcasing digital banking features, smooth UI transitions, and trust-oriented corporate visual identity.",
    tags: ["Fintech Ad", "UI Motion", "Corporate Video"],
    isVideo: true,
    video: velliBanksVideo,
    link: "#",
  },

  // ─── Graphic Design Image Projects ────────────────────────────────
  {
    title: "Nivea — Skincare Showcase",
    description:
      "A clean visual composition advertising Nivea's skincare range. Designed with brand-aligned blue tones, balanced product placement, and high-clarity typography.",
    tags: ["Photoshop", "Product Design", "Brand Advertising"],
    isVideo: false,
    image: niveaImg,
    link: "#",
  },
  {
    title: "Coca-Cola — Taste The Feeling",
    description:
      "A warm visual poster design for Coca-Cola capturing rich glass reflection and gradient lettering to communicate refreshing taste.",
    tags: ["Illustrator", "Poster Design", "Typography"],
    isVideo: false,
    image: cocacolaImg,
    link: "#",
  },
  {
    title: "Pepsi — Greatness Campaign",
    description:
      "High-contrast dark theme advertisement showcasing Pepsi's iconic bottles and cans with crisp studio reflections and vertical bold lettering.",
    tags: ["Photoshop", "Brand Design", "Dark Aesthetics"],
    isVideo: false,
    image: pepsiImg,
    link: "#",
  },
];
