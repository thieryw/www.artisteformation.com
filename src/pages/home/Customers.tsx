import { memo, useEffect } from "react";
import { tss, Text, breakpointValues } from "@/theme";
import { useTranslation } from "@/i18n";
import { CardSlider } from "@/components/CardSlider";
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
import patternSvg from "@/assets/svg/pattern.svg";
import { Article } from "@/components/Article";
import type { Variant } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PictureAnimator } from "@/components/PictureAnimator";
import { routes } from "@/router";


const titleVariants: Record<string, Variant> = {
    "hidden": {
        "y": "100%",
    },
    "visible": {
        "y": 0,
    }
};

export const Customers = memo(() => {
    const { classes, cx, theme } = useStyles();
    const { t } = useTranslation("Home");
    const [ref, inView] = useInView({ "triggerOnce": true, "threshold": 0.7 })
    const controls = useAnimation();
    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }

    }, [controls, inView])
    return <><section className={classes.root}>
        <div className={classes.inner}>
            <div ref={ref} className={classes.titleWrapper}>
                <div>
                    <div style={{
                        "overflow": "hidden"
                    }}>
                        <motion.div
                            variants={titleVariants}
                            animate={controls}
                            initial="hidden"
                            transition={{
                                "ease": "easeInOut",
                                "duration": 0.7
                            }}
                        >
                            <Text className={classes.title} typo="additionalTitle">{t("customerSmallTitle")}</Text>
                        </motion.div>

                    </div>
                    <div style={{
                        "overflow": "hidden",
                        "top": 50,
                        "position": "relative",
                    }}>
                        <motion.div
                            variants={titleVariants}
                            animate={controls}
                            initial="hidden"
                            transition={{
                                "ease": "easeInOut",
                                "duration": 0.7,
                                "delay": 0.4
                            }}
                        >

                            <Text className={cx(classes.title, classes.mainTitle)} typo="heading1">{t("customerTitle")}</Text>
                        </motion.div>

                    </div>
                </div>
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
                            <Article
                                className={classes.firstGridArticle}
                                title={t("customerMusicTitle")}
                                paragraph={t("customerMusicParagraph")}
                                button={{
                                    ...routes.contact().link,
                                    "label": t("customerButton"),
                                    "variant": "filled"
                                }}
                                isAnimated={true}
                            />

                            <div>
                                <PictureAnimator
                                    src={musicWebp}
                                    sources={[
                                        {
                                            "srcSet": musicWebp,
                                            "type": "image/webp"
                                        },
                                        {
                                            "srcSet": musicJpg,
                                            "type": "image/jpeg"
                                        }
                                    ]}
                                    classes={{
                                        "image": classes.picture
                                    }}
                                />
                            </div>
                            <div>
                                <PictureAnimator
                                    src={cinemaWebp}
                                    sources={[
                                        {
                                            "srcSet": cinemaWebp,
                                            "type": "image/webp"
                                        },
                                        {
                                            "srcSet": cinemaJpg,
                                            "type": "image/jpeg"
                                        }
                                    ]}
                                    classes={{
                                        "image": classes.picture
                                    }}
                                />
                            </div>
                            <Article
                                className={classes.firstGridArticle}
                                title={t("customerCinemaTitle")}
                                paragraph={t("customerCinemaParagraph")}
                                button={{
                                    ...routes.contact().link,
                                    "label": t("customerButton"),
                                    "variant": "filled"
                                }}
                                isAnimated={true}
                            />

                        </div>
                        <div className={classes.secondGrid}>
                            <Article
                                title={<Text typo="heading4">{t("customerTheatreTitle")}</Text>}
                                paragraph={t("customerTheatreParagraph")}
                                isAnimated={true}
                                className={classes.secondGridArticle}
                                classes={{
                                    "titleWrapper": classes.secondGridTitleWrapper,
                                    "paragraphWrapper": classes.secondGridParagraph
                                }}
                            />
                            <div>
                                <PictureAnimator
                                    src={enterpriseWebp}
                                    sources={[
                                        {
                                            "srcSet": enterpriseWebp,
                                            "type": "image/webp"
                                        },
                                        {
                                            "srcSet": enterpriseJpg,
                                            "type": "image/jpeg"
                                        }
                                    ]}
                                    classes={{
                                        "image": classes.picture
                                    }}
                                />
                            </div>
                            <Article
                                title={<Text typo="heading4">{t("customerMediaTitle")}</Text>}
                                paragraph={t("customerMediaParagraph")}
                                isAnimated={true}
                                className={classes.secondGridArticle}
                                classes={{
                                    "titleWrapper": classes.secondGridTitleWrapper,
                                    "paragraphWrapper": classes.secondGridParagraph
                                }}
                            />
                            <div>

                                <PictureAnimator
                                    src={theatreWebp}
                                    sources={[
                                        {
                                            "srcSet": theatreWebp,
                                            "type": "image/webp"
                                        },
                                        {
                                            "srcSet": theatreJpg,
                                            "type": "image/jpeg"
                                        }
                                    ]}
                                    classes={{
                                        "image": classes.picture
                                    }}
                                />
                            </div>
                            <Article
                                title={<Text typo="heading4">{t("customerBusinessTitle")}<br/>{t("customerBusinessTitle2")}</Text>}
                                paragraph={t("customerBusinessParagraph")}
                                isAnimated={true}
                                className={classes.secondGridArticle}
                                classes={{
                                    "titleWrapper": classes.secondGridTitleWrapper,
                                    "paragraphWrapper": classes.secondGridParagraph
                                }}
                            />
                            <div>
                                <PictureAnimator
                                    src={mediaWebp}
                                    sources={[
                                        {
                                            "srcSet": mediaWebp,
                                            "type": "image/webp"
                                        },
                                        {
                                            "srcSet": mediaJpg,
                                            "type": "image/jpeg"
                                        }
                                    ]}
                                    classes={{
                                        "image": classes.picture
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                })()

            }

        </div>
    </section>
        {
            (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return undefined;

                }
                return <div className={classes.bottomDiv}>

                </div>;
            })()
        }
    </>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "flex",
            "position": "relative",
            "zIndex": 4001,
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "marginBottom": 100,
                        "borderTop": `solid ${theme.colors.darkYellow} 10px`
                    }
                }
                return {
                    "left": -60,
                    "justifyContent": "center",

                }
            })(),

        },
        "bottomDiv": {
            "backgroundColor": theme.colors.bloodOrange,
            "backgroundImage": `url("${patternSvg}")`,
            "backgroundBlendMode": "overlay",
            "backgroundSize": "cover",
            "backgroundRepeat": "no-repeat",
            "width": "100%",
            "height": 680,
            "position": "relative",
            "top": -300,
            "zIndex": 4000

        },
        "inner": {
            "backgroundColor": theme.colors.indigo,
            "backgroundSize": "cover",
            "backgroundBlendMode": "overlay",
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "width": "100%",
                        ...(() => {
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
                    //"marginBottom": 400,

                }
            })()
        },
        "titleWrapper": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
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

        },
        "firstGrid": {
            "display": "grid",
            "gridTemplateColumns": `repeat(2, ${940 / 2}px)`
        },
        "secondGrid": {
            "display": "grid",
            "gridTemplateColumns": `repeat(3, ${940 / 3}px)`

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
            /*"objectFit": "cover",
            "height": "100%",
            "width": "100%",*/
        },
        "firstGridArticle": {
            ...(() => {
                const value = 85;

                return {
                    "paddingRight": value,
                    "paddingLeft": value
                }

            })()

        },
        "secondGridArticle": {
            ...(() => {
                const value = 50;
                return {
                    "paddingRight": value,
                    "paddingLeft": value
                }
            })(),

        },
        "secondGridTitleWrapper": {
            "marginBottom": 25
        },
        "secondGridParagraph": {
            "marginBottom": 0

        }

    })
})