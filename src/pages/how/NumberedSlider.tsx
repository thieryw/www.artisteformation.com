import { memo } from "react"
import { tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { Slider } from "@/components/Slider"
import svg1 from "@/assets/svg/comment/Slide 2 - Processus/1- recueil-des-besoins.svg";
import svg2 from "@/assets/svg/comment/Slide 2 - Processus/2-creation-du-parcours.svg";
import svg3 from "@/assets/svg/comment/Slide 2 - Processus/3-pilotage.svg";


export const NumberedSlider = memo(() => {

    const { t } = useTranslation("How")
    const { classes } = useStyles();

    return <section className={classes.root}>
        <Slider 
            variant="numbered"
            className={classes.slider}
            classes={{
                "slideArticle": classes.slideArticle,
                "inner": classes.sliderInner
            }}
            slides={[
                {
                    "title": t("numberedSliderNeedsTitle"),
                    "paragraph": t("numberedSliderNeedsParagraph"),
                    "secondParagraph": t("numberedSliderNeedsSecondParagraph"),
                    "button": {
                        "href": "",
                        "label": t("numberedSliderNeedsButtonLabel")
                    },
                    "leftIllustrationUrl": svg1
                },
                {
                    "title": t("numberedSliderCreationTitle"),
                    "paragraph": t("numberedSliderCreationParagraph"),
                    "secondParagraph": t("numberedSliderCreationSecondParagraph"),
                    "button": {
                        "href": "",
                        "label": t("numberedSliderCreationButtonLabel")
                    },
                    "leftIllustrationUrl": svg2
                },
                {
                    "title": t("numberedSliderPilotingTitle"),
                    "paragraph": t("numberedSliderPilotingParagraph"),
                    "secondParagraph": t("numberedSliderPilotingSecondParagraph"),
                    "button": {
                        "href": "",
                        "label": t("numberedSliderPilotingButtonLabel")
                    },
                    "leftIllustrationUrl": svg3
                }
            ]}

        />


    </section>
})

const useStyles = tss.create(({theme}) => {
    return ({
        "root": {
            "paddingLeft": 340,
            "paddingRight": 150,
            "backgroundColor": theme.colors.indigo,
            ...(()=>{
                const value = 150;
                return {
                    "paddingTop": value,
                    "paddingBottom": value

                }
            })()
        },
        "slider": {
            "backgroundColor": theme.colors.white,
            "paddingTop": 155,
            "paddingBottom": 135
        },
        "slideArticle": {
            "height": 580
        },
        "sliderInner": {
            "position": "relative",
            "right": 175
        }
    })
})