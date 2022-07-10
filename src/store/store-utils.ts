import { CSSProperties } from "react";

export function random(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min));
}

export type BorderRadiuses = {
    wTL: number; // width top-left
    wTR: number; // overriden by generaration
    wBL: number; // width bottom-left
    wBR: number; // overriden by generaration

    hTL: number; // height top-left
    hTR: number; // height top-right
    hBL: number; // overriden by generaration
    hBR: number; // overriden by generaration
};

export function generateBorderRadiuses(symmetrical: boolean): BorderRadiuses {
    let wTL = random(5, 96);
    let wBL = random(5, 96);
    let hTL = random(5, 96);
    let hTR = random(5, 96);

    let wTR, wBR, hBL, hBR;

    if (symmetrical) {
        wTR = 100 - wTL;
        wBR = 100 - wBL;
        hBL = 100 - hTL;
        hBR = 100 - hTR;
    } else {
        wTR = random(5, 96);
        wBR = random(5, 96);
        hBL = random(5, 96);
        hBR = random(5, 96);
    }

    return { wTL, wTR, wBL, wBR, hTL, hTR, hBL, hBR, };
}

export function borderRadiusesStr(borderRadiuses: BorderRadiuses): string {
    const { wTL, wTR, wBL, wBR, hTL, hTR, hBL, hBR, } = borderRadiuses;
    return `${wTL}% ${wTR}% ${wBR}% ${wBL}% / ${hTL}% ${hTR}% ${hBR}% ${hBL}%`;
}

export function borderRadiusesArr(borderRadiuses: BorderRadiuses): number[] {
    const { wTL, wTR, wBL, wBR, hTL, hTR, hBL, hBR, } = borderRadiuses;
    return [wTL, wTR, wBR, wBL, hTL, hTR, hBR, hBL];
}

export function borderCSSProps(corners: number[], borderWidth: number): CSSProperties {
    return {
        '--w0': `${corners[0]}%`,
        '--w1': `${corners[1]}%`,
        '--w2': `${corners[2]}%`,
        '--w3': `${corners[3]}%`,
        '--h0': `${corners[4]}%`,
        '--h1': `${corners[5]}%`,
        '--h2': `${corners[6]}%`,
        '--h3': `${corners[7]}%`,
        '--border-width': `${borderWidth}px`,
    } as CSSProperties;
}

export function getBubbaTransform(idx: number, scaleStep: number, shiftX: number, shiftY: number): string {
    return `scale(${1 - scaleStep * idx})  translate(${shiftX * idx}px, ${shiftY * idx}px)`;
}
