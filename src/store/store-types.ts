export const enum ShowRects { none, css, svg }

export type GeneratorOptions = {
    borderWidth: number,
    shapes: number,
    scale: number,
    shiftX: number,
    shiftY: number,
    symmetrical: boolean;
};

export type ViewOptions = {
    showRects: ShowRects,
    showCssRects: boolean;
    showSvgRects: boolean;
    showBorder: boolean;
    showSvgFrame: boolean;
    showOnlyOneRect: boolean;
};

export type UIOptions = {
    showControls: boolean;
    animate: boolean,
    demoMode: boolean,
};
