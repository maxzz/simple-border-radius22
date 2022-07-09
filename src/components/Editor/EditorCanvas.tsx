import React from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { borderRadiusesAtom } from '@/store/store';
import { borderRadiusesStr } from '@/store/store-utils';

function Bubba() {
    const borderRadiuses = useAtomValue(borderRadiusesAtom);
    return (
        <div className="absolute inset-0 bg-red-500" style={{borderRadius: borderRadiusesStr(borderRadiuses)}}>
        </div>
    );
    // <div className="absolute inset-0 bg-red-500" style={{borderRadius: '23% 77% 82% 18% / 59% 21% 79% 41%'}}>
    // </div>
}

export function CanvasContainer() {
    return (<>
        <div
            className="relative frame-box frame-square">
                <Bubba />

            <div className="absolute left-2 bottom-2">
            </div>
        </div>
    </>);
}

