import { CSSObject } from "@emotion/react";
import { createTss } from "tss-react";
import { useWindowInnerSize } from "powerhooks/useWindowInnerSize";

export type Typography =
    "transition" |
    "carousel" |
    "splashScreen" |
    "siteTitle" |
    "heading1" |
    "menuItem" |
    "heading2" |
    "heading3" |
    "heading4" |
    "heading5" |
    "sectionPageOrButton" |
    "additionalTitle" |
    "carouselItem" |
    "paragraph" |
    "quote";


export const baseFontSizePx = parseInt(window.
    getComputedStyle(document.documentElement).
    fontSize.match(/\d+/g)?.[0] ?? "");



export const typography: Record<Typography, CSSObject> = {
    "transition": {
        "color": "#FFFFFF",
        "fontSize": `${196 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular"
    },
    "carousel": {
        "color": "rgba(125, 125, 125, 0.09)",
        "fontFamily": "Satoshi-Bold",
        "fontSize": `${130 / baseFontSizePx}em`,
        "marginBlock": 0
    },
    "splashScreen": {
        "color": "#3B3051",
        "fontSize": `${128 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "0.03em",
        "lineHeight": "1em"
    },
    "siteTitle": {
        "color": "#3B3051",
        "fontSize": `${110 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "0.03em",
        "lineHeight": "1em",
        "marginBlock": 0

    },
    "heading1": {
        "color": "#3B3051",
        "fontSize": `${96 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Light",
        "letterSpacing": "0.03em",
        "lineHeight": "1.1em",
        "marginBlock": 0
    },
    "menuItem": {
        "color": "#3B3051",
        "fontSize": `${75 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "0.03em",
        "listStyleType": "none",
        "lineHeight": "1em"
    },
    "heading2": {
        "color": "#3B3051",
        "fontSize": `${64 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "0.03em",
        "lineHeight": "1.15em",
        "marginBlock": 0
    },
    "heading3": {
        "color": "#3B3051",
        "fontSize": `${48 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "0.03em",
        "lineHeight": "1.20em",
        "marginBlock": 0
    },
    "heading4": {
        "color": "#3B3051",
        "fontSize": `${40 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "0.03em",
        "marginBlock": 0
    },
    "heading5": {
        "color": "#3B3051",
        "fontSize": `${36 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "0.03em",
        "lineHeight": "1.2em",
        "marginBlock": 0
    },
    "sectionPageOrButton": {
        "fontFamily": "Satoshi-Bold",
        "letterSpacing": "0.12em",
        "color": "#F14C2C",
        "fontSize": `${14 / baseFontSizePx}em`
    },
    "additionalTitle": {
        "fontFamily": "Satoshi-Bold",
        "color": "rgba(125, 125, 125, 0.6)",
        "fontSize": `${14 / baseFontSizePx}em`,
        "marginBlock": 0,
        "letterSpacing": "0.2em"
    },
    "carouselItem": {
        "fontFamily": "Satoshi-Medium",
        "color": "rgba(125, 125, 125, 0.6)",
        "fontSize": `${21 / baseFontSizePx}em`,
        "marginBlock": 0
    },
    "paragraph": {
        "fontFamily": "Satoshi-Regular",
        "fontSize": `${18 / baseFontSizePx}em`,
        "color": "#3B3051",
        "marginBlock": 0,
        "lineHeight": "2em"
    },
    "quote": {
        "fontFamily": "Satoshi-Medium",
        "fontSize": `${13 / baseFontSizePx}em`,
        "color": "#7D7D7D",
        "marginBlock": 0,
        "lineHeight": "2em"
    }
}

function useContext() {
    const windowInnerWidth = useWindowInnerSize().windowInnerWidth;
    const windowInnerHeight = useWindowInnerSize().windowInnerHeight;
    const theme = {
        "spacing": {
            "sectionTopBottomPadding": 220,
            "textGap": 50,
            "sectionTitleGap": 70,
            "buttonGap": 75,
            "pageTitleGap": 110,
            "nonCenteredHeroSide": 430,
            "nonCenteredSectionSide": 190,
            "listElementGap": 40,
            "iconSpacing": 18,
            "footerPaddingRightLeft": 210,
            "titleWidth": 300
        
        },
        "colors": {
            "backgroundMain": "#fafafa",
            "backgroundSecondary": "#F6F6F6",
            "backgroundTertiary": "#F2F2F2",
            "darkGray": "#7D7D7D",
            "bloodOrange": "#F14C2C",
            "linden": "#72B0A8",
            "darkYellow": "#FAA219",
            "indigo": "#3B3051",
            "lighterGray": "#FAFAFA",
            "darkGray2": "rgba(125, 125, 125, 0.8)",
            "darkGray3": "rgba(125, 125, 125, 0.6)",
            "bloodOrangeVariant": "#E45437",
            "white": "#FFFFFF"
        },
        windowInnerWidth,
        windowInnerHeight,
        typography
    };


    // You can return anything here, you decide what's the context.
    return { theme };
}

export const breakpointValues = {
    "xl": 1920,
    "lg+": 1440,
    "lg": 1280,
    "md": 960,
    "sm": 600
} as const;

export const { tss } = createTss({ useContext });

export const useStyles = tss.create({});

