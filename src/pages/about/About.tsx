import { memo } from "react";
import { declareComponentKeys } from "@/i18n";
import { Hero } from "./Hero";
import { Bio } from "./Bio";




export const About = memo(() => {
    return <div>
        <Hero />
        <Bio />
    </div>

});

export const { i18n } = declareComponentKeys<
    "pageTitle" |
    "pageSubtitle" |
    "introParagraph" |
    "valuesTitle" |
    "valuesSubtitle" |
    "valuesParagraph" |
    "teachingTitle" |
    "teachingParagraph" |
    "goodWillTitle" |
    "goodWillParagraph" |
    "adaptationTitle" |
    "adaptationParagraph" |
    "sharingTitle" |
    "sharingParagraph" |
    "responsibilityTitle" |
    "responsibilityParagraph" |
    "approachTitle" |
    "approachParagraph" |
    "employeesTitle" |
    "employeesSubtitle" |
    "employeesParagraph"
>()({ About })