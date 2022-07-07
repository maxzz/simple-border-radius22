import React from 'react';
import { Controls } from './Controls/Controls';
import { CanvasContainer } from './Editor/EditorCanvas';

export function Section2_Main() {
    return (<>
        <main className="flex-1 w-full lg:flex items-center justify-center">

            {/* <div className="mx-auto max-w-[600px] lg:max-w-max lg:w-auto select-none"> */}
            {/* <div className="select-none"> */}
                {/* <div className="select-none max-w-full sm:max-w-max lg:w-auto mx-auto"> */}

                {/* Viewer and Controls */}
                {/* <div className={`grid grid-cols-[1fr_max-content]`}> */}
                <div className={`grid grid-cols-[minmax(200px,1fr)_auto]`}>
                    <CanvasContainer />
                    <Controls />
                </div>

            {/* </div> */}
        </main>
    </>);
}
