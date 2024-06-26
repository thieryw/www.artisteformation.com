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


function getTypography(windowInnerWidth: number): Record<Typography, CSSObject>{

    return {
        "transition": {
            "color": "#FFFFFF",
            "fontSize": `${(()=>{
                /*if(windowInnerWidth < 1200 && windowInnerWidth >= 600 ){
                    return 64;
                }*/
                if(windowInnerWidth < 600){
                    return 52;
                }
                return 196;

            })() / baseFontSizePx}rem`,
            "fontFamily": "Zodiak-Regular",
            "fontWeight": 300
        },
        "carousel": {
            "color": "rgba(125, 125, 125, 0.09)",
            "fontFamily": "Satoshi-Bold",
            "fontSize": `${130 / baseFontSizePx}rem`,
            "marginBlock": 0
        },
        "splashScreen": {
            "color": "#3B3051",
            "fontSize": `${(()=>{
            /*if(windowInnerWidth  < 1200 && windowInnerWidth >= 600){
                return 45;
            }*/
                if (windowInnerWidth < 600) {
                    return 40;
                }
                return 128;
            })() / baseFontSizePx}rem`,
            "fontFamily": "Zodiak-Regular",
            "letterSpacing": "-0.03em",
            "lineHeight": "1em",
            "fontWeight": 300
        },
        "siteTitle": {
            "color": "#3B3051",
            "fontSize": `${(() => {
                if (windowInnerWidth < 600) {
                    return 52;
                }
                return 110;
            })() / baseFontSizePx}rem`,
            "fontFamily": "Zodiak-Regular",
            "letterSpacing": "-0.03em",
            "lineHeight": "1em",
            "marginBlock": 0,
            "fontWeight": 300

        },
        "heading1": {
            "color": "#3B3051",
            "fontSize": `${(() => {
                if (windowInnerWidth > 600) {
                    return 96;
                }
                return 50;
            })() / baseFontSizePx}rem`,
            "fontFamily": "Zodiak-Regular",
            "letterSpacing": "-0.03em",
            "lineHeight": "1.1em",
            "marginBlock": 0,
            "fontWeight": 300
        },
        "menuItem": {
            "color": "#3B3051",
            "fontSize": `${(() => {
                if (windowInnerWidth < 600) {
                    return 40;
                }
                return 75;
            })() / baseFontSizePx}rem`,
            "fontFamily": "Zodiak-Regular",
            "letterSpacing": "-0.03em",
            "listStyleType": "none",
            "lineHeight": "1em"
        },
        "heading2": {
            "color": "#3B3051",
            "fontSize": `${(()=>{
                /*if(windowInnerWidth < 1200 && windowInnerWidth >= 600){
                    return 40;
                }*/
                if(windowInnerWidth < 600){
                    return 52;
                }
                return 64;
            })() / baseFontSizePx}rem`,
            "fontFamily": "Zodiak-Regular",
            "letterSpacing": "-0.03em",
            "lineHeight": "1.15em",
            "marginBlock": 0,
            "fontWeight": 300,
        },
        "heading3": {
            "color": "#3B3051",
            "fontSize": `${(() => {
                /*if (windowInnerWidth < 1200 && windowInnerWidth >= 600) {
                    return 32;
                }*/
                if (windowInnerWidth < 600) {
                    return 30;
                }
                return 48;
            })() / baseFontSizePx}rem`,
            "fontFamily": "Zodiak-Regular",
            "letterSpacing": "-0.03em",
            "lineHeight": "1.20em",
            "marginBlock": 0,
            "fontWeight": 300
        },
        "heading4": {
            "color": "#3B3051",
            "fontSize": `${(() => {
                if (windowInnerWidth < 600) {
                    return 23;
                }
                return 40;
            })() / baseFontSizePx}rem`,
            "fontFamily": "Zodiak-Regular",
            "letterSpacing": "-0.03em",
            "marginBlock": 0,
            "fontWeight": 300
        },
        "heading5": {
            "color": "#3B3051",
            "fontSize": `${36 / baseFontSizePx}rem`,
            "fontFamily": "Zodiak-Regular",
            "letterSpacing": "-0.03em",
            "lineHeight": "1.2em",
            "marginBlock": 0,
            "fontWeight": 300
        },
        "sectionPageOrButton": {
            "fontFamily": "Satoshi-Bold",
            "letterSpacing": "0.12em",
            "color": "#F14C2C",
            "fontSize": `${14 / baseFontSizePx}rem`,
            "marginBlock": "0",
        },
        "additionalTitle": {
            "fontFamily": "Satoshi-Bold",
            "color": "rgba(125, 125, 125, 0.6)",
            "fontSize": `${13 / baseFontSizePx}rem`,
            "marginBlock": 0,
            "letterSpacing": "0.03em"
        },
        "carouselItem": {
            "fontFamily": "Satoshi-Medium",
            "color": "rgba(125, 125, 125, 0.6)",
            "fontSize": `${(()=>{
                /*if(windowInnerWidth < 1200 && windowInnerWidth >= 600){
                    return 18;
                }*/
                if(windowInnerWidth < 600){
                    return 18;
                }
                return 20
                
            })() / baseFontSizePx}rem`,
            "marginBlock": 0
        },
        "paragraph": {
            "fontFamily": "Satoshi-Medium",
            "fontSize": `${(()=>{
                /*if(windowInnerWidth < 1200 && windowInnerWidth >= 600){
                    return 13;
                }*/
                if(windowInnerWidth < 600){
                    return 17
                }
                return 18;

            })() / baseFontSizePx}rem`,
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
}


export function useContext() {
    let {windowInnerHeight, windowInnerWidth} = useWindowInnerSize();
    const theme = {
        "spacing": {
            "sectionTopBottomPadding": 220,
            "textGap": (()=>{
                if(windowInnerWidth < breakpointValues.sm){
                    return 25;
                }
                return 50;
            })(),
            "sectionTitleGap": 70,
            "buttonGap": (() => {
                if (windowInnerWidth < breakpointValues.sm) {
                    return 40;
                }
                return 75
            })(),
            "pageTitleGap": 110,
            "nonCenteredHeroSide": 430,
            "nonCenteredSectionSide": 190,
            "listElementGap": (() => {
                if (windowInnerWidth < breakpointValues.sm) {
                    return 20;
                }
                return 40;
            })(),
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
            "lightGray": "#D9D9D9",
            "lighterGray": "#FAFAFA",
            "darkGray2": "rgba(125, 125, 125, 0.8)",
            "darkGray3": "rgba(125, 125, 125, 0.6)",
            "bloodOrangeVariant": "#E45437",
            "white": "#FFFFFF"
        },
        windowInnerWidth,
        windowInnerHeight,
        "typography": getTypography(windowInnerWidth)
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

