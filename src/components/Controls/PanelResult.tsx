import { borderRadiusesAtom, generatorOptions } from '@/store/store';
import { borderRadiusesStr, generateTransforms } from '@/store/store-utils';
import { classNames } from '@/utils/classnames';
import { useAtomValue } from 'jotai';
import React, { HTMLAttributes } from 'react';

function Preview({ cornersStr, shapes }: { cornersStr: string; shapes: string[] }) {
    return (<>
        {shapes.map((transform, idx) => (
            <div
                className="absolute inset-1 bubba"
                style={{
                    borderRadius: cornersStr,
                    borderStyle: 'solid',
                    borderWidth: 1,
                    transform,
                }}
                key={idx}
            />

        ))}
    </>);
}

export function PanelResult({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const borderRadiuses = useAtomValue(borderRadiusesAtom);
    const cornersStr = borderRadiusesStr(borderRadiuses);
    //const borderWidth = useAtomValue(generatorOptions.borderWidthAtom);

    const scale = useAtomValue(generatorOptions.scaleAtom);
    const shiftX = useAtomValue(generatorOptions.shiftXAtom);
    const shiftY = useAtomValue(generatorOptions.shiftYAtom);
    const nShapes = useAtomValue(generatorOptions.nShapesAtom);

    const shapes = generateTransforms(nShapes, scale, shiftX, shiftY);
    return (
        <div className={classNames("text-sm flex items-center justify-between", className)} {...rest}>
            <div>
                {`border-radius: ${cornersStr};`}
            </div>

            <div className="relative w-12 h-12 bg-red-300/40 overflow-hidden">
                <Preview cornersStr={cornersStr} shapes={shapes} />
            </div>
        </div>
    );
}
