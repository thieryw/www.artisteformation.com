import { memo } from "react"
import { breakpointValues, tss, Text } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import { routes } from  "@/router";
import valuesJpg from "@/assets/jpg/comment/valeurs.jpeg";
import valuesWebp from "@/assets/webp/comment/valeurs.webp";
import valuesMobileJpg from "@/assets/jpg/comment/valeurs-mobile.jpeg"
import valuesMobileWebp from "@/assets/webp/comment/valeurs-mobile.webp"


export const Values = memo(() => {

    const { t } = useTranslation("How")
    const { classes, theme } = useStyles();

    const images = (()=>{
        if(theme.windowInnerWidth < breakpointValues.sm){
            return {
                "webp": valuesMobileWebp,
                "jpg": valuesMobileJpg
            }
        }
        return {
            "webp": valuesWebp,
            "jpg": valuesJpg
        }
    })()

    return <section className={classes.root}>
        <Article
            className={classes.article}
            paragraph={t("valuesParagraph")}
            button={{
                "label": t("valuesButtonLabel"),
                ...routes.about().link
            }}
            isAnimated={true}
            {...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                        "isCentered": true

                    }
                }
                return {
                    "smallSurtitle": t("valuesSurtitle"),
                    "title": t("valuesTitle")

                }
            })()}
        />

        <div className={classes.titleAndImageWrapper}>
            <div className={classes.imageWrapper}>
                <picture>
                    <source srcSet={images.webp} type="image/webp" />
                    <source srcSet={images.jpg} type="image/jpeg" />

                    <img className={classes.image} src={images.webp} alt="valeurs" />
                </picture>

            </div>

            {
                (() => {
                    if (theme.windowInnerWidth < breakpointValues.sm) {
                        return <div className={classes.mobileTitle}>
                            <Text style={{
                                "color": theme.colors.white
                            }} typo="additionalTitle">{t("valuesSurtitle")}</Text>
                            <Text style={{
                                "color": theme.colors.white,
                                "marginTop": 25
                            }} typo="heading1">{t("valuesTitle")}</Text>
                        </div>
                    }
                })()
            }

        </div>



    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "flexDirection": "column-reverse",
                        "paddingTop": 30,
                        "paddingBottom": 80
                    };
                }
                return {
                    ...(() => {
                        const value = 210;
                        return {
                            "paddingTop": value,
                            "paddingBottom": value
                        }
                    })()

                };

            })(),
        },
        "article": {
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
                    };
                }
                return {
                    "width": 455,
                    "marginRight": 85,

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
                    "width": 660,
                    "marginLeft": 85,

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
        "titleAndImageWrapper": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "display": "grid",
                        "marginBottom": 35
                    }
                }
            })()

        }

    })
})