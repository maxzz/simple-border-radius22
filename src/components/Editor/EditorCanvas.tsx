import React, { CSSProperties } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { borderRadiusesAtom, generatorOptions, viewOptions } from '@/store/store';
import { borderRadiusesArr, borderRadiusesStr } from '@/store/store-utils';
import './EditorCanvas.scss';
import { classNames } from '@/utils/classnames';

function RectsCss({ corners }: { corners: number[]; }) {
    const showCssRects = useAtomValue(viewOptions.showCssRectsAtom);
    return (<>
        {showCssRects &&
            <div className="markers">
                <div className="css-marker bm-tl" title={`top-left: ${corners[0]}%, ${corners[4]}%`}> </div>
                <div className="css-marker bm-tr" title={`top-right: ${corners[1]}%, ${corners[5]}%`}> </div>
                <div className="css-marker bm-br" title={`bottom-right: ${corners[2]}%, ${corners[6]}%`}> </div>
                <div className="css-marker bm-bl" title={`bottom-left: ${corners[3]}%, ${corners[7]}%`}> </div>
            </div>
        }
    </>);
}

function Bubba() {
    const borderRadiuses = useAtomValue(borderRadiusesAtom);
    const borderWidth = useAtomValue(generatorOptions.borderWidthAtom);

    const corners = borderRadiusesArr(borderRadiuses);
    const cornersCss = {
        '--w0': `${corners[0]}%`,
        '--w1': `${corners[1]}%`,
        '--w2': `${corners[2]}%`,
        '--w3': `${corners[3]}%`,
        '--h0': `${corners[4]}%`,
        '--h1': `${corners[5]}%`,
        '--h2': `${corners[6]}%`,
        '--h3': `${corners[7]}%`,
        // '--border-width': `${borderWidth}px`,
    } as CSSProperties;

    const showBorder = useAtomValue(viewOptions.showBorderAtom);

    return (
        <div
            className={classNames(
                "absolute inset-2 bg-red-500/20",
                "bubba",  showBorder && "bubba-borders",
            )}
            style={{
                borderRadius: borderRadiusesStr(borderRadiuses),
                borderStyle: 'solid',
                borderWidth: borderWidth,
                ...cornersCss,
            }}
        >
            <RectsCss corners={corners} />
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

