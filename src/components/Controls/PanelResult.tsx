import { borderRadiusesAtom } from '@/store/store';
import { borderRadiusesStr } from '@/store/store-utils';
import { classNames } from '@/utils/classnames';
import { useAtomValue } from 'jotai';
import React, { HTMLAttributes } from 'react';

export function PanelResult({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    const borderRadiuses = useAtomValue(borderRadiusesAtom);

    return (
        <div className={classNames("text-sm", className)} {...rest}>
            {`border-radius: ${borderRadiusesStr(borderRadiuses)}`}
        </div>
    );
}
