import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      desaturatedDarkCyan: "hsl(180, 29%, 50%)",
      lightGrayishCyanBackground: "hsl(180, 52%, 96%)",
      lightGrayishCyanFilter: "hsl(180, 31%, 95%)",
      darkGrayishCyan: "hsl(180, 8%, 52%)",
      halfDarkGrayishCyan: "hsl(180, 10%, 74%)",
      veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
    },
    fontSizes: {
      1: "13px",
      2: "14px",
      3: "15px",
      4: "16px",
      5: "18px",
      6: "22px",
    },
    fontWeights: {
      medium: "500",
      bold: "700",
    },
    lineHeights: {
      1: "1",
      2: "1.5",
    },
    space: {
      1: "8px",
    },
    radii: {
      1: "4px",
      2: "5px",
      3: "12px",
    },
  },
  media: {
    bp1: "(min-width: 768px)",
  },
  utils: {
    m0auto: (value) => ({
      margin: "0 auto",
    }),
  },
});
