import React from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { borderRadiusesAtom, generatorOptions } from '@/store/store';
import { borderRadiusesStr } from '@/store/store-utils';

function Bubba() {
    const borderRadiuses = useAtomValue(borderRadiusesAtom);
    const borderWidth = useAtomValue(generatorOptions.borderWidthAtom);
    return (
        <div
            className="absolute inset-2 bg-red-500"
            style={{
                borderRadius: borderRadiusesStr(borderRadiuses),
                borderColor: '#bb0000',
                borderStyle: 'solid',
                borderWidth: borderWidth,
            }}>
        </div>
    );
}

export function CanvasContainer() {
    return (<>
        <div
            className="relative frame-box frame-square bg-[color:var(--tm-ui-bg)]">

            <Bubba />

            <div className="absolute left-2 bottom-2">
            </div>
        </div>
    </>);
}

