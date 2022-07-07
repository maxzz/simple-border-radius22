import React from 'react';
import { useAtomValue, useSetAtom } from 'jotai';

export function CanvasContainer() {
    return (<>
        <div
            className="
                relative w-full
                border-8 border-primary-200 shadow-lg
                before:block before:pb-[100%]
                after:absolute after:inset-0 after:border after:border-primary-400/50 after:pointer-events-none"
        >
            <div className="absolute inset-0">
                Canvas
            </div>

            <div className="absolute left-2 bottom-2">
            </div>
        </div>
    </>);
}

