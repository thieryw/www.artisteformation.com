import { memo } from "react";
import { declareComponentKeys } from "@/i18n";
import { Slider } from "./Slider";
import { Hero } from "./Hero";
import { Family } from "./Family";




export const Teachers = memo(() => {
    return <div>
        <Hero />
        <Slider />
        <Family />
    </div>

});

export const { i18n } = declareComponentKeys<
    "partnerNumberTitle" |
    "partnerNumberSubtitle" |
    "partnerNumberParagraph" |
    "introSurtitle" |
    "introTitle" |
    "introParagraph" |
    "introSecondParagraph" |
    "familyTitle" |
    "familySubtitle" |
    "familyParagraph" |
    "suggestionTitle" |
    "suggestionParagraph" |
    "suggestionButtonLabel"
>()({ Teachers })