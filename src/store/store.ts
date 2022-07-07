import { atom, Getter } from 'jotai';
import { Atomize, atomWithCallback } from '../hooks/atomsX';
import debounce from '../utils/debounce';
import { defaultGeneratorOptions, defaultUIOptions, defaultViewOptions } from './store-initials';
import { GeneratorOptions, ShowRects, UIOptions, ViewOptions } from "./store-types";

namespace Storage {
    const KEY = 'simple-border-radius22';

    type Store = {
        generatorOptions: GeneratorOptions;
        viewOptions: ViewOptions;
        uiOptions: UIOptions;
    };

    export let initialData: Store = {
        generatorOptions: defaultGeneratorOptions,
        viewOptions: defaultViewOptions,
        uiOptions: defaultUIOptions,
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
            generatorOptions: {
                shapes: get(generatorOptions.shapesAtom),
                borderWidth: get(generatorOptions.borderWidthAtom),
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
            }
        };
        localStorage.setItem(KEY, JSON.stringify(newStore));
    }, 1000);

    export const save = ({ get }: { get: Getter; }) => saveDebounced(get);

} //namespace Storage

///////////////

export const generatorOptions: Atomize<GeneratorOptions> = {
    shapesAtom: atomWithCallback<number>(Storage.initialData.generatorOptions.shapes, Storage.save),
    borderWidthAtom: atomWithCallback<number>(Storage.initialData.generatorOptions.borderWidth, Storage.save),
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
