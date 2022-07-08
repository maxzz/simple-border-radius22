import React, { HTMLAttributes } from 'react';
import { Atom, PrimitiveAtom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { UISlider } from '../UI/UISlider';
import { SliderProps } from '@radix-ui/react-slider';
import { generatorOptions, uiOptions, viewOptions } from '@/store/store';

function SliderGroup({ label, valueAtom, ...rest }: { label: string; valueAtom: PrimitiveAtom<number>; } & SliderProps) {
    const [value, setValue] = useAtom(valueAtom);
    return (
        <label className="flex flex-col space-y-1 whitespace-nowrap">
            <div className="">{label}</div>
            <div className="flex items-center space-x-1">
                <UISlider value={[value]} onValueChange={(v: number[]) => setValue(v[0])} {...rest} />
                <div className="min-w-[4ch] text-[0.65rem]">{value}</div>
            </div>
        </label>
    );
}

function Checkbox({ label, valueAtom, ...rest }: { label: string; valueAtom: PrimitiveAtom<boolean>; } & HTMLAttributes<HTMLLabelElement>) {
    const [value, setValue] = useAtom(valueAtom);
    return (
        <label className="flex items-center space-x-1 select-none" {...rest}>
            <input
                className="form-checkbox rounded text-primary-500 focus:ring-primary-500"
                type="checkbox"
                checked={value}
                onChange={() => setValue((v) => !v)}
            />
            <div className="">{label}</div>
        </label>
    );
}

export function Controls() {
    return (<>
        <div className="p-2 frame-box text-sm space-y-2">
            <SliderGroup label="Number of shapes" min={1} max={20} valueAtom={generatorOptions.shapesAtom} />
            <SliderGroup label="Shape border width" min={1} max={100} valueAtom={generatorOptions.borderWidthAtom} />
            <SliderGroup label="Step scale" min={0.001} max={2} step={0.001} valueAtom={generatorOptions.scaleAtom} />

            <SliderGroup label="Step x shift" min={-50} max={50} step={1} valueAtom={generatorOptions.shiftXAtom} />
            <SliderGroup label="Step y shift" min={-50} max={50} step={1} valueAtom={generatorOptions.shiftYAtom} />

            <Checkbox label="Generate symmetrical" valueAtom={generatorOptions.symmetricalAtom} />

            <div className="py-2">
                <hr />
            </div>

            <fieldset className="px-4 border rounded">
                <legend className="px-0.5">Show options</legend>
                <div className="pt-1 pb-2 space-y-1">
                    <Checkbox label="Show CSS corner rectangles" valueAtom={viewOptions.showCssRectsAtom} />
                    <Checkbox label="Show SVG corner rectangles" valueAtom={viewOptions.showSvgRectsAtom} />
                    <Checkbox label="Show SVG frame" valueAtom={viewOptions.showSvgFrameAtom} />
                    <Checkbox label="Show borders" valueAtom={viewOptions.showBorderAtom} />
                </div>
            </fieldset>
        </div>
    </>);
}

