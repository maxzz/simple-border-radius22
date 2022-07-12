import { createStitches, CSS as StitchesCss } from "@stitches/react";

const stitchesConfig = createStitches({ // as usual this goes to stitches.config.ts
    media: {
        bp1: '(min-width: 640px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
});

export const { styled, css, keyframes, getCssText, theme } = stitchesConfig;

export type CSS = StitchesCss<typeof stitchesConfig>;
