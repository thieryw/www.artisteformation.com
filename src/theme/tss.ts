import { CSSObject } from "@emotion/react";
import { createTss } from "tss-react";

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


const baseFontSizePx = parseInt(window.
    getComputedStyle(document.documentElement).
    fontSize.match(/\d+/g)?.[0] ?? "");



export const typography: Record<Typography, CSSObject> = {
    "transition": {
        "color": "FFFFFF",
        "fontSize": `${196 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular"
    },
    "carousel": {
        "color": "7D7D7D",
        "fontFamily": "Satoshi-Bold",
        "fontSize": `${130 / baseFontSizePx}em`,
    },
    "splashScreen": {
        "color": "3B3051",
        "fontSize": `${128 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "3%",
        "lineHeight": "100%"
    },
    "siteTitle": {
        "color": "3B3051",
        "fontSize": `${110 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "3%",
        "lineHeight": "100%"

    },
    "heading1": {
        "color": "3B3051",
        "fontSize": `${96 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "3%",
        "lineHeight": "110%"
    },
    "menuItem": {
        "color": "3B3051",
        "fontSize": `${75 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "3%",
    },
    "heading2": {
        "color": "3B3051",
        "fontSize": `${64 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "3%",
        "lineHeight": "115%"
    },
    "heading3": {
        "color": "3B3051",
        "fontSize": `${48 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "3%",
        "lineHeight": "120%"
    },
    "heading4": {
        "color": "3B3051",
        "fontSize": `${40 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "3%",
        "lineHeight": "120%"
    },
    "heading5": {
        "color": "3B3051",
        "fontSize": `${36 / baseFontSizePx}em`,
        "fontFamily": "Zodiak-Regular",
        "letterSpacing": "3%",
        "lineHeight": "120%"
    },
    "sectionPageOrButton": {
        "fontFamily": "Satoshi-Bold",
        "letterSpacing": "12%",
        "color": "F14C2C",
        "fontSize": `${14 / baseFontSizePx}em`
    },
    "additionalTitle": {
        "fontFamily": "Satoshi-Bold",
        "color": "7D7D7D",
        "fontSize": `${14 / baseFontSizePx}em`
    },
    "carouselItem": {
        "fontFamily": "Satoshi-Bold",
        "color": "7D7D7D",
        "fontSize": `${20 / baseFontSizePx}em`
    },
    "paragraph": {
        "fontFamily": "Satoshi-Medium",
        "fontSize": `${18 / baseFontSizePx}em`,
        "lineHeight": "195%",
        "color": "3B3051"
    },
    "quote": {
        "fontFamily": "Satoshi-Medium",
        "fontSize": `${13 / baseFontSizePx}em`,
        "lineHeight": "195%",
        "color": "7D7D7D"
    }
}

function useContext() {
    const theme = {
        "primaryColor": "#32CD32", // This is LimeGreen in hex
        typography
    };


    // You can return anything here, you decide what's the context.
    return { theme };
}

export const { tss } = createTss({ useContext });

export const useStyles = tss.create({});

