import { memo } from "react"
import { breakpointValues, tss, Text } from "@/theme";
import { useTranslation } from "@/i18n";
import { Slider } from "@/components/Slider"
import { routes } from "@/router";
import jpgIntermittent from "@/assets/jpg/comment/slider/1-intermittent-du-spectacle.jpeg";
import jpgSalarier from "@/assets/jpg/comment/slider/2-salarie.jpeg";
import jpgCreator from "@/assets/jpg/comment/slider/3-createur-dentreprise.jpeg";
import jpgIndependent from "@/assets/jpg/comment/slider/4-travailleur-independant.jpeg";
import jpgCompany from "@/assets/jpg/comment/slider/5-entreprise.jpeg";
import webpIntermittent from "@/assets/webp/comment/slider/1-intermittent-du-spectacle.webp";
import webpSalarier from "@/assets/webp/comment/slider/2-salarie.webp";
import webpCreator from "@/assets/webp/comment/slider/3-createur-dentreprise.webp";
import webpIndependent from "@/assets/webp/comment/slider/4-travailleur-independant.webp";
import webpCompany from "@/assets/webp/comment/slider/5-entreprise.webp";
import { CardSlider } from "@/components/CardSlider";
import { LinkButton } from "@/components/LinkButton";


export const NamedSlider = memo(() => {

    const { t } = useTranslation("How")
    const { classes, theme } = useStyles();

    return <section className={classes.root}>
        {
            (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return <div className={classes.mobileWrapper}>
                        <Text style={{
                            "color": theme.colors.bloodOrange,
                            "marginBottom": 90
                        }} typo="additionalTitle">{t("sliderSurtitle")}</Text>
                        <CardSlider
                            cards={[
                                {
                                    "title": t("sliderIntermittentTitle"),
                                    "paragraph": t("sliderIntermittentParagraph")
                                },
                                {
                                    "title": t("sliderTenantTitle"),
                                    "paragraph": t("sliderTenantParagraph")
                                },
                                {
                                    "title": t("sliderCreatorTitle"),
                                    "paragraph": t("sliderCreatorParagraph")
                                },
                                {
                                    "title": t("sliderIndependentTitle"),
                                    "paragraph": t("sliderIndependentParagraph")
                                },
                                {
                                    "title": t("sliderCompanyTitle"),
                                    "paragraph": t("sliderCompanyParagraph")
                                },
                            ]}
                        />
                        <div className={classes.mobileDivider}></div>
                        <LinkButton
                            {
                            ...routes.contact().link
                            }
                            label={t("sliderButtonLabel")}
                        />
                    </div>

                }
                return <Slider
                    className={classes.slider}
                    variant="named"
                    slides={[
                        {
                            "name": t("sliderIntermittentName"),
                            "imageUrl": webpIntermittent,
                            "imageSources": [
                                {
                                    "srcSet": webpIntermittent,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": jpgIntermittent,
                                    "type": "image/jpeg"
                                }
                            ],
                            "smallSurtitle": t("sliderSurtitle"),
                            "title": <Text typo="heading3">{t("sliderIntermittentTitle")}</Text>,
                            "paragraph": t("sliderIntermittentParagraph"),
                            "button": {
                                "label": t("sliderButtonLabel"),
                                ...routes.contact().link
                            }
                        },
                        {
                            "name": t("sliderTenantName"),
                            "imageUrl": webpSalarier,
                            "imageSources": [
                                {
                                    "srcSet": webpSalarier,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": jpgSalarier,
                                    "type": "image/jpeg"
                                }
                            ],
                            "smallSurtitle": t("sliderSurtitle"),
                            "title": <Text typo="heading3">{t("sliderTenantTitle")}</Text>,
                            "paragraph": t("sliderTenantParagraph"),
                            "button": {
                                "label": t("sliderButtonLabel"),
                                ...routes.contact().link
                            }
                        },
                        {
                            "name": t("sliderCreatorName"),
                            "imageUrl": webpCreator,
                            "imageSources": [
                                {
                                    "srcSet": webpCreator,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": jpgCreator,
                                    "type": "image/jpeg"
                                }
                            ],
                            "smallSurtitle": t("sliderSurtitle"),
                            "title": <Text typo="heading3">{t("sliderCreatorTitle")}</Text>,
                            "paragraph": t("sliderCreatorParagraph"),
                            "button": {
                                "label": t("sliderButtonLabel"),
                                ...routes.contact().link
                            }
                        },
                        {
                            "name": t("sliderIndependentName"),
                            "imageUrl": webpIndependent,
                            "imageSources": [
                                {
                                    "srcSet": webpIndependent,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": jpgIndependent,
                                    "type": "image/jpeg"
                                }
                            ],
                            "smallSurtitle": t("sliderSurtitle"),
                            "title": <Text typo="heading3">{t("sliderIndependentTitle")}</Text>,
                            "paragraph": t("sliderIndependentParagraph"),
                            "button": {
                                "label": t("sliderButtonLabel"),
                                ...routes.contact().link
                            }
                        },
                        {
                            "name": t("sliderCompanyName"),
                            "imageUrl": webpCompany,
                            "imageSources": [
                                {
                                    "srcSet": webpCompany,
                                    "type": "image/webp"
                                },
                                {
                                    "srcSet": jpgCompany,
                                    "type": "image/jpeg"
                                }
                            ],
                            "smallSurtitle": t("sliderSurtitle"),
                            "title": <Text typo="heading3">{t("sliderCompanyTitle")}</Text>,
                            "paragraph": t("sliderCompanyParagraph"),
                            "button": {
                                "label": t("sliderButtonLabel"),
                                ...routes.contact().link
                            }
                        },
                    ]}

                />
            })()
        }


    </section>
})

const useStyles = tss.create(({theme}) => {
    return ({
        "root": {
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return undefined;

                }
                return {
                    "marginTop": 80,
                    "position": "relative",
                    "top": 100,

                }
            })()
        },
        "slider": {
            "position": "relative",
            "left": 260
        },
        "mobileWrapper": {
            ...(() => {
                const leftRight = 25;
                const topBottom = 70;
                return {
                    "paddingLeft": leftRight,
                    "paddingRight": leftRight,
                    "paddingTop": topBottom,
                    "paddingBottom": topBottom
                }
            })(),
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
        },
        "mobileDivider": {
            "width": 90,
            "height": 0,
            "borderTop": `solid ${theme.colors.darkGray3} 2px`,
            "transform": "rotate(90deg)",
            "transformOrigin": "center",
            "position": "relative",
            "zIndex": 300,
            "marginBottom": 90
            //"top": -90
        }
    })
})