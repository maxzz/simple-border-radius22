import React from 'react';
import { Controls } from './Controls/Controls';
import { CanvasContainer } from './Editor/EditorCanvas';

export function Section2_Main() {
    return (<>
        <div className="mx-auto max-w-[600px] lg:max-w-max lg:w-auto select-none">
            {/* <div className="select-none max-w-full sm:max-w-max lg:w-auto mx-auto"> */}

            {/* Viewer and Controls */}
            <div className={`grid grid-cols-1 lg:grid-cols-[minmax(604px,1fr)_max-content]`}>
                <CanvasContainer />
                <Controls />
            </div>

        </div>
    </>);
}
