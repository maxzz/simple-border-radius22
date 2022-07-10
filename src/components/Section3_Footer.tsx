import { classNames } from '@/utils/classnames';
import React, { HTMLAttributes } from 'react';

export function Section3_Footer({className, ...rest}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("items-center text-sm", className)} {...rest}>
            <p>
            <span>Created by Max Zakharzhevskiy. </span>
            <span>Open sourced on <a className="underline" href="https://github.com/maxzz/simple-border-radius22" target="_blank" rel="noopener">Github</a></span>
            </p>
        </div>
    );
}
