import { memo } from "react"
import { tss, Text, breakpointValues } from "@/theme";
import { useTranslation } from "@/i18n";
import { Slider } from "@/components/Slider"
import svg1 from "@/assets/svg/comment/Slide 2 - Processus/1- recueil-des-besoins.svg";
import svg2 from "@/assets/svg/comment/Slide 2 - Processus/2-creation-du-parcours.svg";
import svg3 from "@/assets/svg/comment/Slide 2 - Processus/3-pilotage.svg";
import patternSvg from "@/assets/svg/pattern.svg";
import { routes } from "@/router";


export const NumberedSlider = memo(() => {

    const { t } = useTranslation("How")
    const { classes } = useStyles();

    return <section className={classes.root}>
        <Slider
            variant="numbered"
            className={classes.slider}
            classes={{
                "inner": classes.sliderInner
            }}
            slides={[
                {
                    "title": <Text className={classes.sliderTitle} typo="heading3">{t("numberedSliderNeedsTitle")}</Text>,
                    "paragraph": t("numberedSliderNeedsParagraph"),
                    "secondParagraph": t("numberedSliderNeedsSecondParagraph"),
                    "button": {
                        ...routes.teachers().link,
                        "label": t("numberedSliderNeedsButtonLabel")
                    },
                    "leftIllustrationUrl": svg1
                },
                {
                    "title": <Text className={classes.sliderTitle} typo="heading3">{t("numberedSliderCreationTitle")}</Text>,
                    "paragraph": t("numberedSliderCreationParagraph"),
                    "secondParagraph": t("numberedSliderCreationSecondParagraph"),
                    "button": {
                        ...routes.contact().link,
                        "label": t("numberedSliderCreationButtonLabel")
                    },
                    "leftIllustrationUrl": svg2
                },
                {
                    "title": <Text className={classes.sliderTitle} typo="heading3">{t("numberedSliderPilotingTitle")}</Text>,
                    "paragraph": t("numberedSliderPilotingParagraph"),
                    "secondParagraph": t("numberedSliderPilotingSecondParagraph"),
                    "button": {
                        ...routes.contact().link,
                        "label": t("numberedSliderPilotingButtonLabel")
                    },
                    "leftIllustrationUrl": svg3
                }
            ]}

        />


    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "backgroundColor": theme.colors.indigo,
            "backgroundImage": `url("${patternSvg}")`,
            "backgroundBlendMode": "soft-light",
            "backgroundSize": "contain",
            ...(() => {
                const value = 150;
                return {
                    "paddingTop": value,
                    "paddingBottom": value

                }
            })(),
            ...(theme.windowInnerWidth > 2000 ? {
                "display": "flex",
                "justifyContent": "center",
            } : {
                "paddingLeft": 340,
                "paddingRight": 150,

            })
        },
        "sliderTitle": {
            "width": 650
        },
        "slider": {
            "backgroundColor": theme.colors.white,
            "paddingTop": 155,
            "paddingBottom": 135
        },
        "sliderInner": {
            "position": "relative",
            "right": 175
        }
    })
})