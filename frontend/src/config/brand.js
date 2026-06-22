/**
 * Central brand tokens for Teqto Infotech.
 * Colours are derived from the network-globe logo: a pink → purple gradient
 * with a cool blue accent. Reuse these everywhere instead of hard-coding hex.
 */

export const brand = {
  name: "Teqto",
  suffix: "Infotech",
  tagline: "Engineering Future-Ready Digital Products",
};

export const palette = {
  ink: "#050308",
  pink: "#ec4899",
  fuchsia: "#d946ef",
  purple: "#863bff",
  violet: "#a855f7",
  blue: "#47bfff",
  light: "#ede6ff",
};

/** Ordered colours used for floating particles / sparkles. */
export const particleColors = [
  palette.pink,
  palette.fuchsia,
  palette.violet,
  palette.purple,
  palette.blue,
];

/** Words that animate during the cinematic intro. */
export const introWords = ["BUILD", "INNOVATE", "TRANSFORM"];
