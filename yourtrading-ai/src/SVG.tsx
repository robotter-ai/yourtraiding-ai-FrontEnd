import React, { CSSProperties } from 'react';
import { ReactSVG } from 'react-svg';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        inherit: { color: 'inherit' },
        secondary: { color: theme.palette.secondary.main },
        textPrimary: { color: theme.palette.text.primary },
        textSecondary: { color: theme.palette.text.secondary },
        default: { color: theme.palette.secondary.main },
        none: { color: 'transparent' },
    }),
);

export type IconColors = 'none' | 'default' | 'inherit' | 'secondary' | 'textSecondary' | 'textPrimary';
export interface ISVGProps {
    src: string;
    color?: IconColors;
    className?: string;
    style?: CSSProperties;
    fallbackComp?: React.ReactNode;
}

function SVG({ src, color, className, style, fallbackComp }: ISVGProps) {
    const classes = useStyles();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fallback: React.ReactType | undefined = fallbackComp ? () => fallbackComp : undefined;
    return (
        <ReactSVG
            style={{
                lineHeight: 0,
                width: style?.maxWidth,
                height: style?.maxHeight,
                ...style,
            }}
            fallback={fallback}
            className={clsx('svg', className, classes[color ?? 'default'])}
            src={src}
        />
    );
}

export default React.memo(SVG);
