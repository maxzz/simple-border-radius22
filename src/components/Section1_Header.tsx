import React, { CSSProperties, HTMLAttributes } from 'react';
import { css } from '@stitches/react';
import { InfoAppLogo } from './UI/UIIcons';
import { classNames } from '@/utils/classnames';

const HeroTitleStyles = css({
    $$color: '#9494e440',
    $$borderColor: '#8e34eb7a', // '#8c01ff7a'
    $$shadow: `-2px -2px 0 $$borderColor, 2px -2px 0 $$borderColor, -2px 2px 0 $$borderColor, 2px 2px 0 $$borderColor`,

    color: '$$color',
    // textShadow: '$$shadow',
    'WebkitTextStroke': '1px #8c01ff30',
    'WebkitTextFillColor': '$$color',
});

const previewStyles: CSSProperties = {
    backgroundColor: '#9494e440',
    borderRadius: '91% 9% 59% 41% / 41% 55% 45% 59%',
    borderColor: '#8c01ff30',
    borderStyle: 'solid',
    borderWidth: '1px',
};

function Logo2({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={className} {...rest}>
            <div className="relative w-full h-full">
                <div className="absolute inset-1" style={{ ...previewStyles, transform: 'scale(1) translate(0%, 0%)' }} />
                <div className="absolute inset-1" style={{ ...previewStyles, transform: 'scale(0.835) translate(-1%, 3%)' }} />
                <div className="absolute inset-1" style={{ ...previewStyles, transform: 'scale(0.67) translate(-2%, 6%)' }} />
            </div>
        </div>
    );
}

export function Section1_Header({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <header className={classNames("", className)} {...rest}>

            {/* Logo and explanation */}
            <div className="flex items-center">
                {/* <InfoAppLogo width="256px" height="256px" stroke="#8c00ff" fill="#9494e4" /> */}
                <Logo2 className="w-48 h-48" />

                {/* <h1 className={`text-[5rem] -ml-4 self-end tracking-tighter font-black ${HeroTitleStyles()}`}> */}
                <h1 className={`text-[5rem] self-end tracking-tighter font-black ${HeroTitleStyles()}`}>
                    CSS borders
                </h1>
            </div>

            <div className="ml-16 mb-4 text-base">
                {/* 
                <p>Toggle each of the curve types to activate / deactivate the curve. <br className="hidden md:inline" />
                    You can also add/remove/drag the points to change the shape of the curve.</p> 
                */}
            </div>
        </header>
    );
}
