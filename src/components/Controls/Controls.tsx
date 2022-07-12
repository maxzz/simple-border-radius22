import React, { HTMLAttributes } from 'react';
import { Atom, PrimitiveAtom, useAtom, useAtomValue, useSetAtom, WritableAtom } from 'jotai';
import { UISlider } from '../UI/UISlider';
import { SliderProps } from '@radix-ui/react-slider';
import { doGenerateRadiusesAtom, generatorOptions, uiOptions, viewOptions } from '@/store/store';
import { classNames } from '@/utils/classnames';

function Separator() {
    return (
        <div className="h-0.5">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-ui-text/30 to-transparent" />
        </div>
    );
}

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
                className="form-checkbox rounded text-accent-bg focus:ring-accent-bg tm"
                type="checkbox"
                checked={value}
                onChange={() => setValue((v) => !v)}
            />
            <div className="">{label}</div>
        </label>
    );
}

function Button({ valueAtom, className, children, ...rest }: { valueAtom: WritableAtom<null, unknown>; } & HTMLAttributes<HTMLButtonElement>) {
    const doGenerateRadiuses = useSetAtom(valueAtom);
    return (
        <button
            className={classNames(
                "px-2 py-1 border-ui-text active:scale-[.97] border rounded shadow select-none",
                className
            )}
            onClick={doGenerateRadiuses}
            {...rest}
        >
            {children}
        </button>
    );
}

export function Controls() {
    return (<>
        <div className="p-2 frame-box bg-[color:var(--tm-ui-bg)] text-sm space-y-2">
            <SliderGroup label="Shape border width" min={0} max={50} valueAtom={generatorOptions.borderWidthAtom} />

            <Checkbox label="Generate symmetrical" valueAtom={generatorOptions.symmetricalAtom} />

            <Separator />

            <SliderGroup label="Number of shapes" min={1} max={20} valueAtom={generatorOptions.nShapesAtom} />
            <SliderGroup label="Step scale" min={0.001} max={2} step={0.001} valueAtom={generatorOptions.scaleAtom} />

            <div className="grid grid-cols-2">
                <SliderGroup label="Step x shift" min={-50} max={50} step={1} valueAtom={generatorOptions.shiftXAtom} />
                <SliderGroup label="Step y shift" min={-50} max={50} step={1} valueAtom={generatorOptions.shiftYAtom} />
            </div>

            <Separator />

            <div className="flex items-center justify-end">
                <Button valueAtom={doGenerateRadiusesAtom}>Generate</Button>
            </div>

            <Separator />

            <fieldset className="px-4 border-ui-text border rounded">
                <legend className="px-0.5">Show options</legend>
                <div className="pt-1 pb-2 space-y-1">
                    <Checkbox label="Show CSS corner rectangles" valueAtom={viewOptions.showCssRectsAtom} />
                    <Checkbox label="Show SVG corner rectangles" valueAtom={viewOptions.showSvgRectsAtom} />
                    <Checkbox label="Show SVG frame" valueAtom={viewOptions.showSvgFrameAtom} />
                    <Checkbox label="Show border parts" valueAtom={viewOptions.showBorderAtom} />
                </div>
            </fieldset>
        </div>
    </>);
}
