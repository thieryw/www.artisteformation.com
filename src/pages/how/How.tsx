import { memo } from "react";
import { declareComponentKeys } from "@/i18n";
import { Hero } from "./Hero";
import { NamedSlider } from "./NamedSlider";



export const How = memo(() => {
    return <div>
        <Hero />
        <NamedSlider />
    </div>
});

export const { i18n } = declareComponentKeys<
    "careerBoostTitle" |
    "careerBoostSubtitle" |
    "careerBoostParagraph" |
    "introSurtitle" |
    "introTitle" |
    "introParagraph" |
    "introSecondParagraph" |
    "sliderIntermittentName" |
    "sliderIntermittentTitle" |
    "sliderIntermittentParagraph" |
    "sliderTenantName" |
    "sliderTenantTitle" |
    "sliderTenantParagraph" |
    "sliderCreatorName" |
    "sliderCreatorTitle" |
    "sliderCreatorParagraph" |
    "sliderIndependentName" |
    "sliderIndependentTitle" |
    "sliderIndependentParagraph" |
    "sliderCompanyName" |
    "sliderCompanyTitle" |
    "sliderCompanyParagraph" |
    "sliderButtonLabel" |
    "sliderSurtitle" |
    "processTitle" |
    "processSubtitle" |
    "processParagraph" |
    "numberedSliderNeedsTitle" |
    "numberedSliderNeedsParagraph" |
    "numberedSliderNeedsSecondParagraph" |
    "numberedSliderNeedsButtonLabel" |
    "numberedSliderCreationTitle" |
    "numberedSliderCreationParagraph" |
    "numberedSliderCreationSecondParagraph" |
    "numberedSliderCreationButtonLabel" |
    "numberedSliderPilotingTitle" |
    "numberedSliderPilotingParagraph" |
    "numberedSliderPilotingSecondParagraph" |
    "numberedSliderPilotingButtonLabel" |
    "valuesSurtitle" |
    "valuesTitle" |
    "valuesParagraph" |
    "valuesButtonLabel" |
    "handicapTitle" |
    "handicapSubtitle" |
    "handicapParagraph"
>()({ How })