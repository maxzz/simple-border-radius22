import React, { CSSProperties, HTMLAttributes, SVGAttributes } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { borderRadiusesAtom, generatorOptions, viewOptions } from '@/store/store';
import { borderCSSProps, borderRadiusesArr, borderRadiusesStr } from '@/store/store-utils';
import './EditorCanvas.scss';
import { classNames } from '@/utils/classnames';

function RectsCss({ corners, className, ...rest }: { corners: number[]; } & HTMLAttributes<HTMLDivElement>) {
    const showCssRects = useAtomValue(viewOptions.showCssRectsAtom);
    return (<>
        {showCssRects &&
            <div className={classNames("markers", className)} {...rest}>
                <div className="css-marker bm-tl" title={`top-left: ${corners[0]}%, ${corners[4]}%`}> </div>
                <div className="css-marker bm-tr" title={`top-right: ${corners[1]}%, ${corners[5]}%`}> </div>
                <div className="css-marker bm-br" title={`bottom-right: ${corners[2]}%, ${corners[6]}%`}> </div>
                <div className="css-marker bm-bl" title={`bottom-left: ${corners[3]}%, ${corners[7]}%`}> </div>
            </div>
        }
    </>);
}

function RectsSvgPart({ id, coords, ...rest }: { coords: SVGAttributes<SVGEllipseElement>; } & SVGAttributes<SVGSVGElement>) {
    return (
        <svg {...rest}>
            <defs>
                <clipPath id={`clip-svg-part-${id}`}>
                    <ellipse {...coords} />
                </clipPath>
            </defs>
            <ellipse {...coords} clipPath={`url(#clip-svg-part-${id})`} pathLength="4" />
        </svg>
    );
}

function RectsSvg({ corners, className, ...rest }: { corners: number[]; } & HTMLAttributes<HTMLDivElement>) {
    const showSvgRects = useAtomValue(viewOptions.showSvgRectsAtom);
    const style = { fill: showSvgRects ? 'rgba(0, 255, 0, .2)' : 'none' };
    const locations: SVGAttributes<SVGEllipseElement>[] = [
        { cx: "100%", cy: "100%", rx: "100%", ry: "100%" },
        { cx: "0%", cy: "100%", rx: "100%", ry: "100%" },
        { cx: "0%", cy: "0%", rx: "100%", ry: "100%" },
        { cx: "100%", cy: "0%", rx: "100%", ry: "100%" },
    ];
    return (<>
        {showSvgRects &&
            <div className={classNames("markers", className)} {...rest}>
                <RectsSvgPart id="tl" className="svg-marker bm-tl" style={style} coords={locations[0]} />
                <RectsSvgPart id="tr" className="svg-marker bm-tr" style={style} coords={locations[1]} />
                <RectsSvgPart id="br" className="svg-marker bm-br" style={style} coords={locations[2]} />
                <RectsSvgPart id="bl" className="svg-marker bm-bl" style={style} coords={locations[3]} />
            </div>
        }
    </>);
}

// function BubbaView({ corners }: { corners: number[]; }) {
//     const showBorder = useAtomValue(viewOptions.showBorderAtom);
//     const borderWidth = useAtomValue(generatorOptions.borderWidthAtom);

//     const borderRadiuses = useAtomValue(borderRadiusesAtom);

//     const cornersCss = {
//         '--w0': `${corners[0]}%`,
//         '--w1': `${corners[1]}%`,
//         '--w2': `${corners[2]}%`,
//         '--w3': `${corners[3]}%`,
//         '--h0': `${corners[4]}%`,
//         '--h1': `${corners[5]}%`,
//         '--h2': `${corners[6]}%`,
//         '--h3': `${corners[7]}%`,
//         '--border-width': `${borderWidth}px`,
//     } as CSSProperties;

//     return (
//         <div
//             className={classNames("absolute inset-2 bg-red-500/20",)}
//         />
//     );
// }

function Bubba() {
    const showBorder = useAtomValue(viewOptions.showBorderAtom);
    const borderWidth = useAtomValue(generatorOptions.borderWidthAtom);

    const borderRadiuses = useAtomValue(borderRadiusesAtom);
    const corners = borderRadiusesArr(borderRadiuses);
    const cornersCss = borderCSSProps(corners, borderWidth);

    return (
        <div className="absolute inset-0" style={cornersCss}>
            <div
                className={classNames(
                    "absolute inset-2 bg-red-500/20",
                    "bubba", showBorder && "bubba-borders",
                )}
                style={{
                    borderRadius: borderRadiusesStr(borderRadiuses),
                    borderStyle: 'solid',
                    borderWidth: borderWidth,
                }}
            />
            <RectsCss className="absolute inset-2" corners={corners} />
            <RectsSvg className="absolute inset-2" corners={corners} />
        </div>
    );
}

export function CanvasContainer() {
    return (<>
        <div className="relative frame-box frame-square bg-[color:var(--tm-ui-bg)]">

            <Bubba />

            {/* <div className="absolute left-2 bottom-2"> </div> */}
        </div>
    </>);
}

