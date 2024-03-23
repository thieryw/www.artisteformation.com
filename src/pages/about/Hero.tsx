import { memo } from "react"
import { tss, Text, breakpointValues } from "@/theme";
import { useTranslation } from "@/i18n";
import fresquePng from "@/assets/png/a-propos/fresque-a-propos.png"
import fresqueMobilePng from "@/assets/png/a-propos/fresque-a-propos-mobile.png";
import logoSvg from "@/assets/svg/logo.svg";
import { Logo } from "@/components/Logo";
import { motion } from "framer-motion";

export const Hero = memo(() => {

    const { t } = useTranslation("About")
    const { classes, theme } = useStyles();

    return <section className={classes.root}>
        {
            (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {

                    return <div className={classes.mobileVersionWrapper}>
                        <Logo
                            className={classes.mobileLogo}
                            logoUrl={logoSvg}
                            width={70}
                        />
                        <Text style={{
                            "color": theme.colors.bloodOrange
                        }} className={classes.mobileText} typo="sectionPageOrButton">{t("pageSubtitle")}</Text>
                        <Text className={classes.mobileText} typo="heading1">{t("pageTitle")}</Text>
                        <div className={classes.mobileImageWrapper}>
                            <img className={classes.mobileImage} src={fresqueMobilePng} alt="fresque" />
                        </div>
                        <Text className={classes.mobileText} typo="paragraph">{t("introParagraph")}</Text>
                        <div className={classes.mobileSeparator}></div>

                    </div>;

                }

                return <>
                    <div className={classes.articleWrapper}>
                        <div className={classes.background}></div>
                        <div style={{
                            "overflow": "hidden",
                            "marginBottom": 90
                        }}>
                            <motion.div
                                initial={{
                                    "y": "100%"
                                }}
                                animate={{
                                    "y": 0,
                                    "transition": {
                                        "ease": "easeInOut",
                                        "duration": 0.7,
                                        "delay": 2.4
                                    }
                                }}
                            >
                                <Text className={classes.title} typo="heading1">{t("pageTitle")}</Text>
                            </motion.div>
                        </div>
                        <div className={classes.subtitleAndParagraph}>
                            <div style={{
                                "overflow": "hidden",
                                "top": "0.5rem",
                                "position": "relative"
                            }}>
                                <motion.div
                                    initial={{
                                        "y": "100%"
                                    }}
                                    animate={{
                                        "y": 0,
                                        "transition": {
                                            "ease": "easeInOut",
                                            "duration": 0.7,
                                            "delay": 2.7
                                        }
                                    }}
                                >
                                    <Text className={classes.subtitle} typo="sectionPageOrButton">{t("pageSubtitle")}</Text>
                                </motion.div>
                            </div>
                            <div style={{
                                "overflow": "hidden"
                            }}>
                                <motion.div
                                    initial={{
                                        "opacity": 0
                                    }}
                                    animate={{
                                        "opacity": 1,
                                        "transition": {
                                            "ease": "easeInOut",
                                            "duration": 0.7,
                                            "delay": 3
                                        }
                                    }}
                                >
                                    <Text className={classes.paragraph} typo="paragraph">{t("introParagraph")}</Text>
                                </motion.div>
                            </div>

                        </div>
                    </div>

                    <div className={classes.fresque}>
                        <div className={classes.imageWrapper}>
                            <img className={classes.image} src={fresquePng} alt="fresque decorative" />
                        </div>
                    </div>
                </>


            })()
        }

    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return undefined;
                }
                return {

                    "display": "flex",
                    "flexDirection": "column",
                    "paddingTop": 290,
                }
            })()
        },
        "articleWrapper": {
            "marginBottom": 130,
            "paddingLeft": 425,
            "position": "relative"


        },
        "subtitle": {
            "marginRight": 180,
            "color": theme.colors.bloodOrange,
        },
        "subtitleAndParagraph": {
            "display": "flex",
            "alignItems": "flex-start",
            "position": "relative",

        },
        "paragraph": {
            "color": theme.colors.indigo,
            "width": 518,
        },
        "title": {
            "width": 620,
            "position": "relative"
        },
        "fresque": {
            ...(() => {
                const value = 120;
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }
            })(),
            "width": "100%",
            "boxSizing": "border-box",
            "position": "relative",

        },
        "image": {
            "objectFit": "cover",
            "width": "100%",
            "height": "100%"

        },
        "imageWrapper": {
            "position": "relative",
            "zIndex": 200

        },
        "background": {
            "width": "45%",
            "height": "200%",
            "backgroundColor": theme.colors.backgroundTertiary,
            "position": "absolute",
            "top": 0,
            "right": 0,

        },
        "mobileVersionWrapper": {
            ...(() => {
                const value = 25;
                return {
                    "paddingLeft": value,
                    "paddingRight": value,
                    "paddingTop": value
                }
            })(),
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",

        },
        "mobileText": {
            "textAlign": "center",
            "marginBottom": 30
        },
        "mobileImageWrapper": {
            "marginBottom": 40

        },
        "mobileImage": {
            "objectFit": "cover",
            "width": "100%",
            "height": "100%"

        },
        "mobileLogo": {
            "marginBottom": 50,
        },
        "mobileSeparator": {
            "width": "80%",
            "height": 0,
            "borderTop": `solid ${theme.colors.backgroundTertiary} 2px`,
            "marginTop": 30
        }
    })
})