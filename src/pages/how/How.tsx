import { memo } from "react";
import { declareComponentKeys } from "@/i18n";
import { Hero } from "./Hero";
import { NamedSlider } from "./NamedSlider";
import { Process } from "./Process";
import { NumberedSlider } from "./NumberedSlider";
import { Values } from "./Values";
import { Handicap } from "./Handicap";
import { Reviews } from "../home/Reviews";
import { MobileTabs } from "./MobileTabs";
import { breakpointValues, useContext } from "@/theme";




export const How = memo(() => {
    const { theme } = useContext();
    return <div>
        <Hero />
        <NamedSlider />
        <Process />
        {
            (() => {
                if (theme.windowInnerWidth < breakpointValues.sm){
                return <MobileTabs />
                }
                    return <NumberedSlider />
            })()
        }
        <Values />
        <Handicap />
        <div style={{
            ...(() => {
                const value = 230;
                return {
                    "paddingTop": value,
                    "paddingBottom": value
                }
            })()
        }}>
            <Reviews />
        </div>
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
    "handicapParagraph" |
    "mobileTabNeeds" |
    "mobileTabCreation" |
    "mobileTabPiloting"
>()({ How })