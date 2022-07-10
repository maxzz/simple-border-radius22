import { borderRadiusesAtom, generatorOptions } from '@/store/store';
import { borderCSSProps, borderRadiusesArr, borderRadiusesStr } from '@/store/store-utils';
import { classNames } from '@/utils/classnames';
import { useAtomValue } from 'jotai';
import React, { HTMLAttributes } from 'react';

export function PanelResult({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const borderRadiuses = useAtomValue(borderRadiusesAtom);

    const borderWidth = useAtomValue(generatorOptions.borderWidthAtom);

    const corners = borderRadiusesArr(borderRadiuses);
    const cornersCss = borderCSSProps(corners, borderWidth);
    const cornersStr = borderRadiusesStr(borderRadiuses);

    return (
        <div className={classNames("text-sm flex items-center justify-between", className)} {...rest}>
            <div>
                {`border-radius: ${cornersStr};`}
            </div>
            <div className="relative w-12 h-12 bg-red-300/40">
                <div
                    className="absolute inset-1 bubba"
                    style={{
                        borderRadius: cornersStr,
                        borderStyle: 'solid',
                        borderWidth: borderWidth,
                    }}
                />
            </div>
        </div>
    );
}
