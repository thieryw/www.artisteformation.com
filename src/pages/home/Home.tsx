import { tss, Text } from "@/theme"
import { declareComponentKeys, useTranslation } from "@/i18n";
import { Hero } from "./Hero";
import { Intro } from "./Intro";
import pianistJpg from "@/assets/jpg/home/pianist-pic.jpeg";
import pianistWebp from "@/assets/webp/home/pianist-pic.webp";
import pianistIllustrationJpg from "@/assets/jpg/home/pianist-illustration.jpeg";
import pianistIllustrationWebp from "@/assets/webp/home/pianist-illustration.webp";
import { Slider } from "@/components/Slider";


export function Home() {


    const { t } = useTranslation("Home");

    const { classes, cx } = useStyles()


    return (
        <div>
            <Hero />
            <Intro />
            <section className={classes.visionSection}>
                <div className={classes.backgroundSection}></div>
                <div className={classes.visionLeft}>
                    <Text className={classes.visionTitle} typo="heading2">{t("visionTitle")}</Text>
                    <picture>
                        <source srcSet={pianistWebp} type="image/webp" />
                        <source srcSet={pianistJpg} type="image/jpeg" />
                        <img className={classes.visionPicture} src={pianistWebp} alt="Pianist" />
                    </picture>
                </div>
                <div className={classes.visionRight}>
                    <picture>
                        <source srcSet={pianistIllustrationWebp} type="image/webp" />
                        <source srcSet={pianistIllustrationJpg} type="image/jpeg" />
                        <img className={cx(classes.visionPicture, classes.visionIllustration)} src={pianistIllustrationWebp} alt="Pianist" />
                    </picture>
                    <div className={classes.captionWrapper}>
                        <div className={classes.smallDivider}></div>
                        <Text className={classes.visionParagraph} typo="quote">{t("visionSmallCaption")}</Text>
                        <Text typo="quote">{t("visionSmallCaptionDate")}</Text>

                    </div>

                </div>

            </section>
            <section className={classes.sliderSection}>
                <Slider 
                    variant="named"
                    slides={[
                        {
                            "name": t("sliderEngagementName"),
                            "smallSurtitle": t("sliderMiniTitle"),
                            "title": t("sliderEngagementTitle"),
                            "paragraph": t("sliderEngagementParagraph1"),
                            "secondParagraph": t("sliderEngagementParagraph2"),
                            "button": {
                                "href": "",
                                "label": t("sliderButtonLabel")
                            }
                        },
                        {
                            "name": t("sliderFinancingName"),
                            "smallSurtitle": t("sliderMiniTitle"),
                            "title": t("sliderFinancingTitle"),
                            "paragraph": t("sliderFinancingParagraph1"),
                            "secondParagraph": t("sliderFinancingParagraph2"),
                            "button": {
                                "href": "",
                                "label": t("sliderButtonLabel")
                            }
                        },
                        {
                            "name": t("sliderResponseName"),
                            "smallSurtitle": t("sliderMiniTitle"),
                            "title": t("sliderResponseTitle"),
                            "paragraph": t("sliderResponseParagraph1"),
                            "secondParagraph": t("sliderResponseParagraph2"),
                            "button": {
                                "href": "",
                                "label": t("sliderButtonLabel")
                            }
                        }
                    ]}
                />
            </section>
        </div>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "visionSection": {
            "position": "relative",
            "display": "flex",
            //"alignItems": "center",
            "justifyContent": "center"
        },
        "backgroundSection": {
            "position": "absolute",
            "backgroundColor": theme.colors.backgroundTertiary,
            "width": "100%",
            "height": 590,
            "top": 277

        },
        "visionPicture": {
            "width": 570,
        },
        "visionTitle": {
            "width": 430,
            "marginBottom": 330

        },
        "visionParagraph": {

        },
        "smallDivider": {
            "width": 41,
            "height": 0,
            "borderTop": `solid ${theme.colors.indigo} 2px`
        },
        "visionLeft": {
            "marginRight": 210,
            "position": "relative"
        },
        "visionRight": { "position": "relative" },
        "captionWrapper": {
            "width": 300,
            "display": "grid",
            "gridTemplateColumns": "1fr",
            "gap": 45
        },
        "visionIllustration": {
            "marginBottom": 210
        },
        "sliderSection": {
            "paddingBottom": 165,
            "paddingTop": 315,
            "paddingLeft": 185
        }
    }))

export const { i18n } = declareComponentKeys<
    "title" |
    "subtitle" |
    "introTitle" |
    "introSubtitle" |
    "introParagraph" |
    "introPartnerNumber" |
    "introCarerNumber" |
    "introSatisfactionPercentage" |
    "introPartner" |
    "introCarer" |
    "introSatisfaction" |
    "visionTitle" |
    "visionSmallCaption" |
    "visionSmallCaptionDate" |
    "sliderEngagementName" |
    "sliderEngagementTitle" |
    "sliderEngagementParagraph1" |
    "sliderEngagementParagraph2" |
    "sliderFinancingName" |
    "sliderFinancingTitle" |
    "sliderFinancingParagraph1" |
    "sliderFinancingParagraph2" |
    "sliderResponseName" |
    "sliderResponseTitle" |
    "sliderResponseParagraph1" |
    "sliderResponseParagraph2" |
    "sliderButtonLabel" |
    "sliderMiniTitle"

>()({ Home });