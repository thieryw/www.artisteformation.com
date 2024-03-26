import { memo, useEffect } from "react";
import { tss, Text } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import { breakpointValues } from "@/theme";
import type { Variant } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const titleWrapperVariants: Record<string, Variant> = {
    "hidden": {
        "opacity": 1
    },
    "visible": {
        "opacity": 1,
        "transition": {
            "staggerChildren": 0.4
        }
    },

}
const titleVariants: Record<string, Variant> = {
    "hidden": {
        "y": "100%",
    },
    "visible": {
        "y": 0,
    }
};

export const Intro = memo(() => {
    const { classes } = useStyles();
    const { t } = useTranslation("Home");
    const [ref, inView] = useInView({ "triggerOnce": true, "threshold": 0.3 })
    const controls = useAnimation();
    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }

    }, [controls, inView])

    return <div className={classes.root}>
        <Article
            className={classes.article}
            title={t("introTitle")}
            smallSubtitle={t("introSubtitle")}
            paragraph={t("introParagraph")}
            isCentered={true}
            classes={{ "paragraphWrapper": classes.paragraph }}
            isAnimated={true}
        />
        <div className={classes.divider}></div>
        <div
            ref={ref}
            className={classes.stats}
        >
            <motion.div
                className={classes.statWrapper}
                variants={titleWrapperVariants}
                animate={controls}
                initial="hidden"
            >
                <div className={classes.animatedWrapper}>
                    <motion.div
                        variants={titleVariants}
                        transition={{
                            "ease": "easeInOut",
                            "duration": 0.7
                        }}
                    >

                        <Text className={classes.partners} typo="heading1">{t("introPartnerNumber")}</Text>
                    </motion.div>
                </div>
                <div className={classes.animatedWrapper}>
                    <motion.div
                        variants={titleVariants}
                        transition={{
                            "ease": "easeInOut",
                            "duration": 0.7
                        }}
                    >
                        <Text className={classes.statName} typo="additionalTitle">{t("introPartner")}</Text>

                    </motion.div>
                </div>
            </motion.div>

            <div className={classes.verticalDivider}></div>
            <motion.div
                className={classes.statWrapper}
                variants={titleWrapperVariants}
                animate={controls}
                initial="hidden"
            >
                <div className={classes.animatedWrapper}>
                    <motion.div
                        variants={titleVariants}
                        transition={{
                            "ease": "easeInOut",
                            "duration": 0.7,
                            "delay": 0.4
                        }}
                    >

                        <Text className={classes.carers} typo="heading1">{t("introCarerNumber")}</Text>
                    </motion.div>
                </div>
                <div className={classes.animatedWrapper}>
                    <motion.div
                        variants={titleVariants}
                        transition={{
                            "ease": "easeInOut",
                            "duration": 0.7,
                            "delay": 0.4
                        }}
                    >
                        <Text className={classes.statName} typo="additionalTitle">{t("introCarer")}</Text>

                    </motion.div>
                </div>
            </motion.div>

            <div className={classes.verticalDivider}></div>
            <motion.div
                className={classes.statWrapper}
                variants={titleWrapperVariants}
                animate={controls}
                initial="hidden"
            >
                <div className={classes.animatedWrapper}>
                    <motion.div
                        variants={titleVariants}
                        transition={{
                            "ease": "easeInOut",
                            "duration": 0.7,
                            "delay": 0.8
                        }}
                    >

                        <Text className={classes.satisfaction} typo="heading1">{t("introSatisfactionPercentage")}</Text>
                    </motion.div>
                </div>
                <div className={classes.animatedWrapper}>
                    <motion.div

                        variants={titleVariants}
                        transition={{
                            "ease": "easeInOut",
                            "duration": 0.7,
                            "delay": 0.8
                        }}
                    >
                        <Text className={classes.statName} typo="additionalTitle">{t("introSatisfaction")}</Text>

                    </motion.div>
                </div>
            </motion.div>

        </div>
    </div>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "grid",
            "gridTemplateColumns": "1fr",
            "justifyItems": "center",
            "gap": 65,
            "marginBottom": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return 40;
                }
                return 300
            })(),
            ...(() => {
                const value = 20;
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "paddingLeft": value,
                        "paddingRight": value
                    }
                }

                return undefined;
            })()

        },
        "animatedWrapper": {
            "overflow": "hidden"

        },
        "article": {
            "width": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return undefined;
                }
                return 950;
            })()
        },
        "paragraph": {
            "marginBottom": 0

        },
        "divider": {
            "height": 0,
            "width": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return 250;
                }
                return 1090;
            })(),
            "borderTop": `solid ${theme.colors.darkGray3} 1px`
        },
        "stats": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return "column";
                }

                return undefined
            })()

        },
        "verticalDivider": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "display": "none"


                    }
                }
                return {
                    "marginLeft": 90,
                    "marginRight": 90,
                    "height": 66,
                    "width": 0,
                    "borderLeft": `solid ${theme.colors.darkGray3} 1px`,

                }
            })()

        },
        "statWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "marginBottom": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return 45;
                }
                return undefined;
            })()

        },
        "partners": {
            "color": theme.colors.darkYellow

        },
        "statName": {
            "textTransform": "uppercase"

        },
        "carers": {
            "color": theme.colors.linden
        },
        "satisfaction": {
            "color": theme.colors.bloodOrange

        }

    })
})