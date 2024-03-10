import { memo } from "react";
import { tss, breakpointValues, Text } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import { routes } from "@/router";
import jpgCesar from "@/assets/jpg/formateurs/galerie-formateur/2-cesar-guigue.jpeg";
import jpgHerzog from "@/assets/jpg/formateurs/galerie-formateur/6-mathieu-herzog.jpeg";
import jpgPaillot from "@/assets/jpg/formateurs/galerie-formateur/4-laurence-paillot.jpeg";
import jpgRoger from "@/assets/jpg/formateurs/galerie-formateur/8-patrick-roger.jpeg";
import webpCesar from "@/assets/webp/formateurs/galerie-formateur/2-cesar-guigue.webp";
import webpHerzog from "@/assets/webp/formateurs/galerie-formateur/6-mathieu-herzog.webp";
import webpPaillot from "@/assets/webp/formateurs/galerie-formateur/4-laurence-paillot.webp";
import webpRoger from "@/assets/webp/formateurs/galerie-formateur/8-patrick-roger.webp";
import { PictureAnimator } from "@/components/PictureAnimator";


const jpgArray = [
    jpgCesar,
    jpgHerzog,
    jpgPaillot,
    jpgRoger
]

const webpArray = [
    webpCesar,
    webpHerzog,
    webpPaillot,
    webpRoger
]


export const Teachers = memo(() => {
    const { classes, theme } = useStyles();
    const { t } = useTranslation("Home");
    return <section className={classes.root}>
        {
            (()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return <div className={classes.mobileTitleWrapper}>
                        <Text className={classes.mobileTitle} typo="heading2">{t("teachersTitle")}</Text>
                        <Text className={classes.mobileSurtitle} typo="additionalTitle">{t("teachersSurTitle")}</Text>

                    </div>;
                }

                return <Article
                    className={classes.article}
                    smallSurtitle={t("teachersSurTitle")}
                    title={t("teachersTitle")}
                    paragraph={t("teachersParagraph")}
                    button={{
                        "label": t("teachersButtonLabel"),
                        ...routes.teachers().link,
                    }}
                    hasSmallLine={true}
                    isAnimated={true}

                />
            })()
        }

        <div className={classes.grid}>
            {
                webpArray.map((webp, index) => <div key={index}>
                    {
                        (()=>{
                            if (theme.windowInnerWidth < breakpointValues.sm) {
                                return <picture>
                                    <source srcSet={webp} type="image/webp" />
                                    <source srcSet={jpgArray[index]} type="image/jpeg" />
                                    <img className={classes.image} src={webp} alt="teacher portrait" />
                                </picture>
                            }
                            return <PictureAnimator 
                                src={webp}
                                alt="teacher portrait"
                                classes={{
                                    "image": classes.image
                                }}
                                animationDelay={400 * index}
                                sources={[
                                    {
                                        "srcSet": webp,
                                        "type": "images/webp"
                                    },
                                    {
                                        "srcSet": jpgArray[index],
                                        "type": "images/jpeg"
                                    }
                                ]}
                            />
                        })()
                    }
                </div>)
            }
        </div>
        {
            (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return <Article
                        paragraph={t("teachersParagraph")}
                        button={{
                            "label": t("teachersButtonLabel"),
                            ...routes.teachers().link,
                        }}
                        isCentered={true}
                    />
                }
            })()
        }


    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "flex",
            "alignItems": "center",
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "flexDirection": "column",
                        ...(() => {
                            const leftRight = 25;
                            const topBottom = 70;
                            return {
                                "paddingLeft": leftRight,
                                "paddingRight": leftRight,
                                "paddingTop": topBottom,
                                "paddingBottom": topBottom
                            }
                        })()
                    }
                }
                return {
                    "justifyContent": "center",
                    ...(() => {
                        const value = 245;
                        return {
                            "paddingTop": value,
                            "paddingBottom": value

                        }
                    })(),

                }
            })()
        },
        "mobileTitleWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center"

        },
        "mobileTitle": {
            "fontSize": "3rem",
            "marginBottom": 40,
            "textAlign": "center"
        },
        "mobileSurtitle": {
            "color": theme.colors.bloodOrange,
            "marginBottom": 55
        },
        "article": {
            "maxWidth": 319,
            "marginRight": 134
        },
        "grid": {
            "display": "grid",
            "gap": 8,
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "marginBottom": 50,
                        "gridTemplateColumns": "repeat(2, 1fr)",
                    }
                }
                return {
                    "marginLeft": 134,
                    "gridTemplateColumns": "repeat(2, 322px)",

                }
            })()
        },
        "image": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "objectFit": "cover",
                        "height": "100%",
                        "width": "100%",

                    }
                }
                return {
                    "objectFit": "cover",
                    "width": 322,
                }
            })()
        }

    })
})