import { memo } from "react";
import { declareComponentKeys } from "@/i18n";




export const About = memo(() => {
    return <div>
        About
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