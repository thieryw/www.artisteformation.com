import { ReactNode, memo } from "react";
import { tss } from "./tss";
import type { Typography } from "./tss";

export type TextProps = {
    typo: Typography;
    className?: string;
    children: ReactNode;
    style?: React.CSSProperties;
};

const tagMap: Record<Typography, keyof JSX.IntrinsicElements> = {
    "transition": "h1",
    "carousel": "h6",
    "splashScreen": "h1",
    "siteTitle": "h1",
    "heading1": "h1",
    "menuItem": "li",
    "heading2": "h2",
    "heading3": "h3",
    "heading4": "h4",
    "heading5": "h5",
    "sectionPageOrButton": "h6",
    "additionalTitle": "h6",
    "carouselItem": "h6",
    "paragraph": "p",
    "quote": "p"
}

export const Text = memo((props: TextProps) => {
    const { children, typo, className, style } = props;
    const { classes, cx } = useStyles({ typo })
    const ComponentTag = tagMap[typo];

    return <ComponentTag style={style} className={cx(classes.root, className)}>{children}</ComponentTag>

})

const useStyles = tss
    .withParams<{ typo: Typography }>()
    .create(({ theme, typo }) => ({
        "root": {
            ...theme.typography[typo]
        }

    }))
