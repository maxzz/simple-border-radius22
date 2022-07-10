import { atom, Getter } from 'jotai';
import { Atomize, atomWithCallback } from '../hooks/atomsX';
import debounce from '../utils/debounce';
import { defaultGeneratorOptions, defaultUIOptions, defaultViewOptions } from './store-initials';
import { GeneratorOptions, ShowRects, UIOptions, ViewOptions } from "./store-types";
import { BorderRadiuses, generateBorderRadiuses } from './store-utils';

namespace Storage {
    const KEY = 'simple-border-radius22';

    type Store = {
        generatorOptions: GeneratorOptions;
        viewOptions: ViewOptions;
        uiOptions: UIOptions;
        shape: {
            radiuses: BorderRadiuses;
        };
    };

    export let initialData: Store = {
        generatorOptions: defaultGeneratorOptions,
        viewOptions: defaultViewOptions,
        uiOptions: defaultUIOptions,
        shape: {
            radiuses: generateBorderRadiuses(defaultGeneratorOptions.symmetrical),
        },
    };

    function load() {
        const s = localStorage.getItem(KEY);
        if (s) {
            try {
                let obj = JSON.parse(s) as Store;

                obj.generatorOptions = {...initialData.generatorOptions, ...obj.generatorOptions},
                obj.viewOptions = {...initialData.viewOptions, ...obj.viewOptions},
                obj.uiOptions = {...initialData.uiOptions, ...obj.uiOptions},
                obj.shape = {...initialData.shape, ...obj.shape}; // nested should be initialized manually

                initialData = obj;
            } catch (error) {
            }
        }
    }
    load();

    export const saveDebounced = debounce(function _save(get: Getter) {
        let newStore: Store = {
            generatorOptions: {
                borderWidth: get(generatorOptions.borderWidthAtom),
                nShapes: get(generatorOptions.nShapesAtom),
                scale: get(generatorOptions.scaleAtom),
                shiftX: get(generatorOptions.shiftXAtom),
                shiftY: get(generatorOptions.shiftYAtom),
                symmetrical: get(generatorOptions.symmetricalAtom),
            },
            viewOptions: {
                showRects: get(viewOptions.showRectsAtom),
                showCssRects: get(viewOptions.showCssRectsAtom),
                showSvgRects: get(viewOptions.showSvgRectsAtom),
                showBorder: get(viewOptions.showBorderAtom),
                showSvgFrame: get(viewOptions.showSvgFrameAtom),
                showOnlyOneRect: get(viewOptions.showOnlyOneRectAtom),
            },
            uiOptions: {
                showControls: get(uiOptions.showControlsAtom),
                animate: get(uiOptions.animateAtom),
                demoMode: get(uiOptions.demoModeAtom),
            },
            shape: {
                radiuses: get(borderRadiusesAtom),
            }
        };
        localStorage.setItem(KEY, JSON.stringify(newStore));
    }, 1000);

    export const save = ({ get }: { get: Getter; }) => saveDebounced(get);

} //namespace Storage

///////////////

export const generatorOptions: Atomize<GeneratorOptions> = {
    borderWidthAtom: atomWithCallback<number>(Storage.initialData.generatorOptions.borderWidth, Storage.save),
    nShapesAtom: atomWithCallback<number>(Storage.initialData.generatorOptions.nShapes, Storage.save),
    scaleAtom: atomWithCallback<number>(Storage.initialData.generatorOptions.scale, Storage.save),
    shiftXAtom: atomWithCallback<number>(Storage.initialData.generatorOptions.shiftX, Storage.save),
    shiftYAtom: atomWithCallback<number>(Storage.initialData.generatorOptions.shiftY, Storage.save),
    symmetricalAtom: atomWithCallback<boolean>(Storage.initialData.generatorOptions.symmetrical, Storage.save),
};

export const viewOptions: Atomize<ViewOptions> = {
    showRectsAtom: atomWithCallback<ShowRects>(Storage.initialData.viewOptions.showRects, Storage.save),
    showCssRectsAtom: atomWithCallback<boolean>(Storage.initialData.viewOptions.showCssRects, Storage.save),
    showSvgRectsAtom: atomWithCallback<boolean>(Storage.initialData.viewOptions.showSvgRects, Storage.save),
    showBorderAtom: atomWithCallback<boolean>(Storage.initialData.viewOptions.showBorder, Storage.save),
    showSvgFrameAtom: atomWithCallback<boolean>(Storage.initialData.viewOptions.showSvgFrame, Storage.save),
    showOnlyOneRectAtom: atomWithCallback<boolean>(Storage.initialData.viewOptions.showOnlyOneRect, Storage.save),
};

export const uiOptions: Atomize<UIOptions> = {
    showControlsAtom: atomWithCallback<boolean>(Storage.initialData.uiOptions.showControls, Storage.save),
    animateAtom: atomWithCallback<boolean>(Storage.initialData.uiOptions.animate, Storage.save),
    demoModeAtom: atomWithCallback<boolean>(Storage.initialData.uiOptions.demoMode, Storage.save),
};

///////////////

// Derived atoms

export const borderRadiusesAtom = atomWithCallback<BorderRadiuses>(Storage.initialData.shape.radiuses, Storage.save);

export const doGenerateRadiusesAtom = atom(
    null,
    (get, set,) => {
        const symmetrical = get(generatorOptions.symmetricalAtom);
        const br = generateBorderRadiuses(symmetrical);
        set(borderRadiusesAtom, br);
    }
);
