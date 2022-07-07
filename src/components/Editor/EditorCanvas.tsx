import React from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

export function CanvasContainer() {
    return (<>
        <div
            className="frame-box frame-square">
            <div className="absolute inset-0">
                Canvas
            </div>

            <div className="absolute left-2 bottom-2">
            </div>
        </div>
    </>);
}

