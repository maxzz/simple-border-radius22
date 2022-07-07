export function random(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min));
}

export function generateShape(symmetrical: boolean) {
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

    return `${wTL}% ${wTR}% ${wBR}% ${wBL}% / ${hTL}% ${hTR}% ${hBR}% ${hBL}%`;
}

export function generateCorners(borderRadius: string) {
    return [...(borderRadius || '').matchAll(/(\d\d*%)/g)].map((m) => m[1]);
}
