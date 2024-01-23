import { memo } from "react";
import { tss, Text, breakpointValues } from "@/theme";
import { useTranslation } from "@/i18n";
import { CardSlider } from "@/components/CardSlider";
import { LinkButton } from "@/components/LinkButton";
import cinemaJpg from "@/assets/jpg/home/cinema.jpeg";
import cinemaWebp from "@/assets/webp/home/cinema.webp";
import enterpriseJpg from "@/assets/jpg/home/entreprenariat.jpeg";
import enterpriseWebp from "@/assets/webp/home/entreprenariat.webp";
import musicJpg from "@/assets/jpg/home/musique.jpeg";
import musicWebp from "@/assets/webp/home/musique.webp";
import mediaJpg from "@/assets/jpg/home/media.jpeg";
import mediaWebp from "@/assets/webp/home/media.webp";
import theatreJpg from "@/assets/jpg/home/theatre.jpeg";
import theatreWebp from "@/assets/webp/home/theatre.webp";




export const Customers = memo(() => {
    const { classes, cx, theme } = useStyles();
    const { t } = useTranslation("Home");
    return <section className={classes.root}>
        <div className={classes.inner}>
            <div className={classes.titleWrapper}>
                <Text className={classes.title} typo="additionalTitle">{t("customerSmallTitle")}</Text>
                <Text className={cx(classes.title, classes.mainTitle)} typo="heading1">{t("customerTitle")}</Text>
            </div>
            {
                (() => {
                    if (theme.windowInnerWidth < breakpointValues.sm) {
                        return <CardSlider 
                            cards={[
                                {
                                    "title": t("customerMusicTitle"),
                                    "paragraph": t("customerMusicParagraph"),
                                    "image": {
                                        "src": musicWebp,
                                        "sources": [
                                            {
                                                "srcSet": musicWebp,
                                                "type": "image/webp"
                                            },
                                            {
                                                "srcSet": musicJpg,
                                                "type": "image/jpeg"
                                            }
                                        ]

                                    }
                                },
                                {
                                    "title": t("customerCinemaTitle"),
                                    "paragraph": t("customerCinemaParagraph"),
                                    "image": {
                                        "src": cinemaWebp,
                                        "sources": [
                                            {
                                                "srcSet": cinemaWebp,
                                                "type": "image/webp"
                                            },
                                            {
                                                "srcSet": cinemaJpg,
                                                "type": "image/jpeg"
                                            }
                                        ]

                                    }
                                },
                                {
                                    "title": t("customerTheatreTitle"),
                                    "paragraph": t("customerTheatreParagraph"),
                                    "image": {
                                        "src": musicWebp,
                                        "sources": [
                                            {
                                                "srcSet": theatreWebp,
                                                "type": "image/webp"
                                            },
                                            {
                                                "srcSet": theatreJpg,
                                                "type": "image/jpeg"
                                            }
                                        ]

                                    }
                                },
                                {
                                    "title": t("customerMediaTitle"),
                                    "paragraph": t("customerMediaParagraph"),
                                    "image": {
                                        "src": mediaWebp,
                                        "sources": [
                                            {
                                                "srcSet": mediaWebp,
                                                "type": "image/webp"
                                            },
                                            {
                                                "srcSet": mediaJpg,
                                                "type": "image/jpeg"
                                            }
                                        ]

                                    }
                                },
                                {
                                    "title": t("customerBusinessTitle"),
                                    "paragraph": t("customerBusinessParagraph"),
                                    "image": {
                                        "src": enterpriseWebp,
                                        "sources": [
                                            {
                                                "srcSet": enterpriseWebp,
                                                "type": "image/webp"
                                            },
                                            {
                                                "srcSet": enterpriseJpg,
                                                "type": "image/jpeg"
                                            }
                                        ]

                                    }
                                },
                            ]}
                        />;
                    }
                    return <div className={classes.gridWrapper}>
                        <div className={classes.firstGrid}>
                            <div className={classes.firstGridTextWrapper}>
                                <Text typo="heading2">{t("customerMusicTitle")}</Text>
                                <Text typo="paragraph">{t("customerMusicParagraph")}</Text>
                                <LinkButton
                                    href=""
                                    label={t("customerButton")}
                                    variant="filled"
                                />
                            </div>
                            <div>
                                <picture>
                                    <source srcSet={musicWebp} type="image/webp" />
                                    <source srcSet={musicJpg} type="image/jpeg" />
                                    <img className={classes.picture} src={musicWebp} alt="string musicians playing" />
                                </picture>
                            </div>
                            <div>
                                <picture>
                                    <source srcSet={cinemaWebp} type="image/webp" />
                                    <source srcSet={cinemaJpg} type="image/jpeg" />
                                    <img className={classes.picture} src={cinemaWebp} alt="camera filming" />
                                </picture>
                            </div>
                            <div className={classes.firstGridTextWrapper}>
                                <Text typo="heading2">{t("customerCinemaTitle")}</Text>
                                <Text typo="paragraph">{t("customerCinemaParagraph")}</Text>
                                <LinkButton
                                    variant="filled"
                                    href=""
                                    label={t("customerButton")}
                                />
                            </div>

                        </div>
                        <div className={classes.secondGrid}>
                            <div className={classes.secondGridTextWrapper}>
                                <Text typo="heading4">{t("customerTheatreTitle")}</Text>
                                <Text typo="paragraph">{t("customerTheatreParagraph")}</Text>
                            </div>
                            <div>
                                <picture>
                                    <source srcSet={enterpriseWebp} type="image/webp" />
                                    <source srcSet={enterpriseJpg} type="image/jpeg" />
                                    <img className={classes.picture} src={enterpriseWebp} alt="laptop" />
                                </picture>
                            </div>
                            <div className={classes.secondGridTextWrapper}>
                                <Text typo="heading4">{t("customerMediaTitle")}</Text>
                                <Text typo="paragraph">{t("customerMediaParagraph")}</Text>
                            </div>
                            <div>
                                <picture>
                                    <source srcSet={theatreWebp} type="image/webp" />
                                    <source srcSet={theatreJpg} type="image/jpeg" />
                                    <img className={classes.picture} src={theatreWebp} alt="theatre scene" />
                                </picture>
                            </div>
                            <div className={classes.secondGridTextWrapper}>
                                <Text style={{
                                    "wordBreak": "break-all"
                                }} typo="heading4">{t("customerBusinessTitle")}</Text>
                                <Text typo="paragraph">{t("customerBusinessParagraph")}</Text>
                            </div>
                            <div>
                                <picture>
                                    <source srcSet={mediaWebp} type="image/webp" />
                                    <source srcSet={mediaJpg} type="image/jpeg" />
                                    <img className={classes.picture} src={mediaWebp} alt="man being interviewed" />
                                </picture>
                            </div>
                        </div>
                    </div>
                })()

            }

        </div>
    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "flex",
            "position": "relative",
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "marginBottom": 100,
                        "borderTop": `solid ${theme.colors.darkYellow} 10px`
                    }
                }
                return {
                    "left": -120,
                    "justifyContent": "center",

                }
            })(),

        },
        "inner": {
            "backgroundColor": theme.colors.indigo,
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        ...(()=>{
                            const topBottom = 100;
                            const rightLeft = 25;
                            return {
                                "paddingLeft": rightLeft,
                                "paddingRight": rightLeft,
                                "paddingTop": topBottom,
                                "paddingBottom": topBottom
                            }
                        })()

                    }
                }
                return {
                    "borderLeft": `solid ${theme.colors.darkYellow} 10px`,
                    "width": 940,
                    "marginBottom": 400,

                }
            })()
        },
        "titleWrapper": {
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                        "marginBottom": 150,
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "flex-end",
                        "paddingRight": 30
                    }
                }
                return {
            "paddingTop": 100,
            "paddingLeft": 113,

                }
            })()
        },
        "title": {
            "color": theme.colors.white
        },
        "mainTitle": {
            "position": "relative",
            "top": 50

        },
        "firstGrid": {
            "display": "grid",
            "gridTemplateColumns": "repeat(2, 1fr)"
        },
        "secondGrid": {
            "display": "grid",
            "gridTemplateColumns": "repeat(3, 1fr)"

        },
        "gridWrapper": {
            "width": 940,
            "backgroundColor": theme.colors.white,
            "position": "relative",
            "left": 120,
            "top": 150,
            "boxShadow": "0px 2px 20px 2px rgba(0, 0, 0, 0.1)"
        },
        "picture": {
            "objectFit": "cover",
            "height": "100%",
            "width": "100%",
        },
        "firstGridTextWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "flex-start",
            "justifyContent": "center",
            ...(() => {
                const value = 85;
                return {
                    "paddingRight": value,
                    "paddingLeft": value
                }
            })(),
            "& > p": {
                "color": theme.colors.darkGray,
                ...(() => {
                    const value = 40;
                    return {
                        "marginTop": value,
                        "marginBottom": value

                    }
                })()
            }
        },
        "secondGridTextWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "flex-start",
            ...(() => {
                const value = 50;
                return {
                    "paddingRight": value,
                    "paddingLeft": value
                }
            })(),
            "& > p": {
                "color": theme.colors.darkGray,
                "marginTop": 25
            }
        }

    })
})