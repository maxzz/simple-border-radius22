import { createCss, StitchesCss } from "@stitches/react";

const stitchesConfig = createCss({ // as usual this goes to stitches.config.ts
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
});

export const { styled, css, keyframes, getCssString, theme } = stitchesConfig;

export type CSS = StitchesCss<typeof stitchesConfig>;
