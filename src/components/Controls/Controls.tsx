import React from 'react';
import { Atom, PrimitiveAtom, useAtom, useAtomValue, useSetAtom } from 'jotai';
import { UISlider } from '../UI/UISlider';
import { SliderProps } from '@radix-ui/react-slider';
import { generatorOptions, uiOptions } from '@/store/store';

function SliderGroup({ label, valueAtom, ...rest }: { label: string; valueAtom: PrimitiveAtom<number>; } & SliderProps) {
    const [value, setValue] = useAtom(valueAtom);
    return (
        <label className="flex flex-col space-y-1 whitespace-nowrap">
            <div className="">{label}</div>
            <div className="flex items-center space-x-2">
                <UISlider value={[value]} onValueChange={(v: number[]) => setValue(v[0])} {...rest} />
                <div className="">{value}</div>
            </div>
        </label>
    );
}

export function Controls() {
    return (<>
        <div className="p-2 frame-box text-sm space-y-2">
            <SliderGroup label="Number of shapes" min={1} max={20} valueAtom={generatorOptions.shapesAtom} />
            <SliderGroup label="Shape border width" min={1} max={100} valueAtom={generatorOptions.borderWidthAtom} />
            <SliderGroup label="Step scale" min={0.0001} max={2} step={0.0001} valueAtom={generatorOptions.scaleAtom} />
            
            <SliderGroup label="Step x shift" min={-50} max={50} step={1} valueAtom={generatorOptions.shiftXAtom} />
            <SliderGroup label="Step y shift" min={-50} max={50} step={1} valueAtom={generatorOptions.shiftYAtom} />

            <label className="flex items-center space-x-1">
                <input className="form-checkbox rounded" type="checkbox" />
                <div className="">Generate symmetrical</div>
            </label>

            <hr/>
        </div>
    </>);
}

