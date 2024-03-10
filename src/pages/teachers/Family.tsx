import { memo } from "react";
import { Article } from "@/components/Article";
import familyJpg from "@/assets/jpg/formateurs/devenir-intervenant.jpeg";
import familyWebp from "@/assets/webp/formateurs/devenir-intervenant.webp";
import familyMobileJpg from "@/assets/jpg/formateurs/devenir-intervenant-mobile.jpeg";
import familyMobileWebp from "@/assets/webp/formateurs/devenir-intervenant-mobile.webp";
import { breakpointValues, tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { routes } from "@/router";
import { Text } from "@/theme"
import { PictureAnimator } from "@/components/PictureAnimator";



export const Family = memo(() => {
    const { t } = useTranslation("Teachers");
    const { classes, theme } = useStyles();

    const images = (() => {
        if (theme.windowInnerWidth < breakpointValues.sm) {
            return {
                "webp": familyMobileWebp,
                "jpg": familyMobileJpg
            }
        }
        return {
            "webp": familyWebp,
            "jpg": familyJpg
        }
    })()
    return <>
        <section className={classes.root}>
            <div className={classes.wrapper}>
                {
                    (()=>{
                        if(theme.windowInnerWidth < breakpointValues.sm){
                            return undefined;
                        }
                        return <Article
                            className={classes.article}
                            isCentered={true}
                            title={t("familyTitle")}
                            smallSubtitle={t("familySubtitle")}
                            paragraph={t("familyParagraph")}
                            isAnimated={true}

                        />
                    })()
                }
                <div className={classes.titleAndImageWrapper}>
                    <div className={classes.imageWrapper}>
                        {
                            (() => {
                                if (theme.windowInnerWidth < breakpointValues.sm) {
                                    return <picture>
                                        <source srcSet={images.webp} type="image/webp" />
                                        <source srcSet={images.jpg} type="image/jpeg" />

                                        <img className={classes.image} src={images.webp} alt="famille" />
                                    </picture>
                                }
                                return <PictureAnimator 
                                    src={images.webp}
                                    sources={[
                                        {
                                            "srcSet": images.webp,
                                            "type": "image/webp"
                                        },
                                        {
                                            "srcSet": images.jpg,
                                            "type": "image/jpeg"
                                        },
                                    ]}
                                />
                            })()
                        }

                    </div>

                    {
                        (() => {
                            if (theme.windowInnerWidth < breakpointValues.sm) {
                                return <div className={classes.mobileTitle}>
                                    <Text style={{
                                        "color": theme.colors.white,
                                        "marginTop": 25
                                    }} typo="heading1">{t("familyTitle")}</Text>
                                </div>
                            }
                        })()
                    }

                </div>
            </div>

        </section>
        <section className={classes.suggestions}>
            <Article
                className={classes.suggestionsArticle}
                title={t("suggestionTitle")}
                isCentered={true}
                paragraph={t("suggestionParagraph")}
                smallSurtitle={(() => {
                    if (theme.windowInnerWidth < breakpointValues.sm) {
                        return t("familySubtitle")
                    }
                })()}
                button={{
                    "label": t("suggestionButtonLabel"),
                    ...routes.contact().link
                }}
                isAnimated={true}
            />
        </section>
    </>
});


const useStyles = tss.create(({ theme }) => {
    const imageHeight = 490;
    const articleWidth = 600;
    return ({
        "root": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "marginTop": 90,
                        "marginBottom": 60
                    }
                }
                return {
                    "backgroundColor": theme.colors.backgroundTertiary,

                }
            })()

        },
        "wrapper": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "marginTop": 20

                    }

                }
                return {
                    "display": "flex",
                    "flexDirection": "column",
                    "alignItems": "center",
                    "justifyContent": "center",
                    "position": "relative",
                    "top": imageHeight / 2,

                }
            })()

        },
        "article": {
            "width": articleWidth,
            "marginBottom": 40,

        },
        "image": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "objectFit": "cover",
                        "width": "100%",
                        "height": "100%"

                    }
                }
                return {
                    "height": imageHeight,
                }
            })()


        },
        "suggestions": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "marginBottom": 90

                    }
                }
                return {
                    "display": "flex",
                    "justifyContent": "center",

                }
            })()
        },
        "suggestionsArticle": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        ...(() => {
                            const value = 25;
                            return {
                                "paddingLeft": value,
                                "paddingRight": value
                            }
                        })()

                    }
                }
                return {
                    "width": articleWidth,
                    "paddingTop": imageHeight / 2 + 100,
                    "paddingBottom": 220,

                }
            })()
        },

        "imageWrapper": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "width": "100%",
                        "height": "100%",
                        "gridRow": 1,
                        "gridColumn": 1,

                    }
                }
            })()

        },
        "titleAndImageWrapper": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "display": "grid",
                        "marginBottom": 35
                    }
                }
            })()

        },
        "mobileTitle": {
            "gridRow": 1,
            "gridColumn": 1,
            "backdropFilter": "brightness(70%)",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "flex-end",
            "paddingLeft": 25,
            "paddingRight": 50,
            "paddingBottom": 45

        },
    })
})