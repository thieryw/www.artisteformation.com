import { tss, Text } from "@/theme"
import { declareComponentKeys, useTranslation } from "@/i18n";
import { Hero } from "./Hero";
import { Intro } from "./Intro";
import pianistJpg from "@/assets/jpg/home/pianist-pic.jpeg";
import pianistWebp from "@/assets/webp/home/pianist-pic.webp";
import pianistIllustrationJpg from "@/assets/jpg/home/pianist-illustration.jpeg";
import pianistIllustrationWebp from "@/assets/webp/home/pianist-illustration.webp";
import { Slider } from "@/components/Slider";
import { Certification } from "./Certification";
import { Customers } from "./Customers";
import { Reviews } from "./Reviews";
import { History } from "./History";
import { Teachers } from "./Teachers";
import { breakpointValues } from "@/theme";
import { MobileTabs } from "./MobileTabs";
import { PictureAnimator } from "@/components/PictureAnimator";


export function Home() {


    const { t } = useTranslation("Home");

    const { classes, theme } = useStyles()


    return (
        <div>
            <Hero />
            <Intro />
            <section className={classes.visionSection}>
                <div className={classes.backgroundSection}></div>
                <div className={classes.visionLeft}>
                    {
                        (() => {
                            if (theme.windowInnerWidth < breakpointValues.sm) {
                                return undefined;
                            }

                            return <Text className={classes.visionTitle} typo="heading2">{t("visionTitle")}</Text>

                        })()
                    }

                    <PictureAnimator
                        src={pianistWebp}
                        classes={{
                            "image": classes.visionPicture
                        }}
                        sources={[
                            {
                                "srcSet": pianistWebp,
                                "type": "image/webp"
                            },
                            {
                                "srcSet": pianistJpg,
                                "type": "image/jpeg"
                            }
                        ]}

                    />

                    {
                        (() => {
                            if (theme.windowInnerWidth >= breakpointValues.sm) {
                                return undefined;
                            }

                            return <Text className={classes.visionTitleMobile} typo="heading2">{t("visionTitle")}</Text>

                        })()
                    }
                </div>
                {
                    (() => {
                        if (theme.windowInnerWidth < breakpointValues.sm) {
                            return undefined
                        }
                        return <div className={classes.visionRight}>
                            <PictureAnimator
                                className={classes.visionIllustration}
                                classes={{
                                    "image": classes.visionPicture
                                }}
                                src={pianistIllustrationWebp}
                                sources={[
                                    {
                                        "srcSet": pianistIllustrationWebp,
                                        "type": "image/webp"
                                    },
                                    {
                                        "srcSet": pianistIllustrationJpg,
                                        "type": "image/jpeg"
                                    }
                                ]}
                            />
                            <div className={classes.captionWrapper}>
                                <div className={classes.smallDivider}></div>
                                <Text style={{
                                    "color": theme.colors.darkGray2
                                }} className={classes.visionParagraph} typo="paragraph">{t("visionSmallCaption")}</Text>
                                <Text style={{
                                    "color": theme.colors.darkGray2
                                }} typo="paragraph">{t("visionSmallCaptionDate")}</Text>

                            </div>

                        </div>
                    })()

                }

            </section>
            {
                (() => {
                    if (theme.windowInnerWidth < breakpointValues.sm) {
                        return <MobileTabs />;
                    }
                    return <section className={classes.sliderSection}>
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
                })()
            }
            <Certification />
            <Customers />
            <Reviews />
            <History />
            <Teachers />
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
            ...(() => {
                if (theme.windowInnerWidth >= breakpointValues.sm) {
                    return {
                        "width": "100%",
                        "height": 590,
                        "top": 277,

                    }
                }
                return {
                    "width": "80%",
                    "height": "100%",
                    "left": "20%"
                }
            })()

        },
        "visionPicture": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {

                        /*"width": "100%",
                        "objectFit": "cover"*/
                        "width": theme.windowInnerWidth,
                        "objectFit": "cover"
                    }
                }

                return {
                    "width": 570
                }

            })()
        },
        "visionTitle": {
            "width": 430,
            "marginBottom": 330

        },
        "visionTitleMobile": {
            "color": theme.colors.white,
            "position": "relative",
            "top": -150,
            ...(() => {
                const value = 40;
                return {
                    "paddingLeft": value,
                    "paddingRight": value,
                }
            })()

        },
        "visionParagraph": {

        },
        "smallDivider": {
            "width": 41,
            "height": 0,
            "borderTop": `solid ${theme.colors.indigo} 2px`
        },
        "visionLeft": {
            "marginRight": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return undefined;
                }
                return 210;
            })(),
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
            "paddingBottom": 300,
            "paddingTop": 315,
            "paddingLeft": 185
        },
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
    "sliderMiniTitle" |
    "certificationParagraph" |
    "certificationTitle" |
    "customerSmallTitle" |
    "customerTitle" |
    "customerMusicTitle" |
    "customerMusicParagraph" |
    "customerCinemaTitle" |
    "customerCinemaParagraph" |
    "customerTheatreTitle" |
    "customerTheatreParagraph" |
    "customerMediaTitle" |
    "customerMediaParagraph" |
    "customerBusinessTitle" |
    "customerBusinessParagraph" |
    "customerButton" |
    "review1Title" |
    "review1Subtitle" |
    "review1Paragraph" |
    "review2Title" |
    "review2Subtitle" |
    "review2Paragraph" |
    "review3Title" |
    "review3Subtitle" |
    "review3Paragraph" |
    "reviewArticleSurtitle" |
    "reviewArticleTitle" |
    "reviewArticleParagraph" |
    "reviewArticleButtonLabel" |
    "historySubtitle" |
    "historyTitle" |
    "historyParagraph" |
    "historyButtonLabel" |
    "teachersSurTitle" |
    "teachersTitle" |
    "teachersParagraph" |
    "teachersButtonLabel" |
    "mobileTabSurtitle" |
    "mobileTabTitle"


>()({ Home });