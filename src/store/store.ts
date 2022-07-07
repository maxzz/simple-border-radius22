import { atom, Getter } from 'jotai';
import { atomWithDefault } from 'jotai/utils';
import { atomWithCallback } from '../hooks/atomsX';
import debounce from '../utils/debounce';

namespace Storage {
    const KEY = 'simple-border-radius22';

    type Store = {
        dark: boolean;
    };

    export let initialData: Store = {
        dark: false,
    };

    function load() {
        const s = localStorage.getItem(KEY);
        if (s) {
            try {
                let obj = JSON.parse(s) as Store;
                initialData = obj;
            } catch (error) {
            }
        }
    }
    load();

    export const saveDebounced = debounce(function _save(get: Getter) {
        let newStore: Store = {
            dark: get(DarkShemaAtom),
        };
        localStorage.setItem(KEY, JSON.stringify(newStore));
    }, 1000);

    export const save = ({ get }: { get: Getter; }) => saveDebounced(get);

} //namespace Storage

export const DarkShemaAtom = atomWithCallback(Storage.initialData.dark, Storage.save);

///////////////

const enum ShowRects { none, css, svg }

// GeneratorOptions

type GeneratorOptions = {
    shapes: number,
    borderWidth: number,
    scale: number,
    shiftX: number,
    shiftY: number,
    symmetrical: boolean;
};

const defaultGeneratorOptions: GeneratorOptions = {
    shapes: 1,
    borderWidth: 1,
    scale: .1,
    shiftX: 20,
    shiftY: 20,
    symmetrical: true,
};

const demoGeneratorOptions: GeneratorOptions = {
    shapes: 10,
    borderWidth: 1,
    scale: .1, // scale: .0043,
    shiftX: 9,
    shiftY: 7,
    symmetrical: true,
};

// ViewOptions

type ViewOptions = {
    showRects: ShowRects,
    showCssRects: boolean;
    showSvgRects: boolean;
    showBorder: boolean;
    showSvgFrame: boolean;
    showOnlyOneRect: boolean;
};

const defaultViewOptions: ViewOptions = {
    showRects: ShowRects.none,
    showCssRects: true,
    showSvgRects: true,
    showBorder: true,
    showSvgFrame: true,
    showOnlyOneRect: true,
};

const demoViewOptions: ViewOptions = {
    showRects: ShowRects.none,
    showCssRects: true,
    showSvgRects: true,
    showBorder: true,
    showSvgFrame: true,
    showOnlyOneRect: false,
};

// UIOptions

type UIOptions = {
    showControls: boolean;
    animate: boolean,
    demoMode: boolean,
};

const defaultOptions: UIOptions = {
    showControls: true,
    animate: false,
    demoMode: false,
};

const demoOptions: UIOptions = {
    showControls: true,
    animate: true,
    demoMode: true,
};

function random(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min));
}

function generateShape(symmetrical: boolean) {
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

function generateCorners(borderRadius: string) {
    return [...(borderRadius || '').matchAll(/(\d\d*%)/g)].map((m) => m[1]);
}
