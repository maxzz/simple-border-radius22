// GeneratorOptions

import { GeneratorOptions, ShowRects, UIOptions, ViewOptions } from "./store-types";

export const defaultGeneratorOptions: GeneratorOptions = {
    shapes: 1,
    borderWidth: 1,
    scale: .1,
    shiftX: 20,
    shiftY: 20,
    symmetrical: true,
};

export const demoGeneratorOptions: GeneratorOptions = {
    shapes: 10,
    borderWidth: 1,
    scale: .1, // scale: .0043,
    shiftX: 9,
    shiftY: 7,
    symmetrical: true,
};

// ViewOptions

export const defaultViewOptions: ViewOptions = {
    showRects: ShowRects.none,
    showCssRects: true,
    showSvgRects: true,
    showBorder: true,
    showSvgFrame: true,
    showOnlyOneRect: true,
};

export const demoViewOptions: ViewOptions = {
    showRects: ShowRects.none,
    showCssRects: true,
    showSvgRects: true,
    showBorder: true,
    showSvgFrame: true,
    showOnlyOneRect: false,
};

// UIOptions

export const defaultUIOptions: UIOptions = {
    showControls: true,
    animate: false,
    demoMode: false,
};

export const demoUIOptions: UIOptions = {
    showControls: true,
    animate: true,
    demoMode: true,
};
