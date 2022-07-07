import { classNames } from '@/utils/classnames';
import React, { HTMLAttributes } from 'react';
import { Controls } from './Controls/Controls';
import { CanvasContainer } from './Editor/EditorCanvas';

export function Section2_Main({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (<>
        <main className={classNames("md:flex items-center justify-center", className)} {...rest}>
            {/* <div className="mx-auto max-w-[600px] lg:max-w-max lg:w-auto select-none"> */}
            {/* <div className="select-none"> */}
            {/* <div className="select-none max-w-full sm:max-w-max lg:w-auto mx-auto"> */}

            {/* Viewer and Controls */}
            {/* <div className={`grid grid-cols-[1fr_max-content]`}> */}
            <div className={`p-4 grid grid-cols-[minmax(100px,1fr)_auto] sm:grid-cols-[minmax(400px,1fr)_auto] md:grid-cols-[minmax(500px,1fr)_auto] gap-2`}>
                <CanvasContainer />
                <Controls />
            </div>

            {/* </div> */}
        </main>
    </>);
}
