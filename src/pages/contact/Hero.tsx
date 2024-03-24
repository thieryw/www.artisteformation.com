import { memo } from "react"
import { tss, Text, breakpointValues } from "@/theme";
import { useTranslation } from "@/i18n";
import instaIcon from "@/assets/svg/insta-icon.svg";
import fbIcon from "@/assets/svg/fb-icon.svg";
import youtubeIcon from "@/assets/svg/youtube-icon.svg";
import logoSvg from "@/assets/svg/logo.svg";
import { Logo } from "@/components/Logo";
import { motion } from "framer-motion";
const socialMediaLinks = [
    {
        "href": "https://www.facebook.com/artisteformation/",
        "logo": fbIcon
    },
    {
        "href": "",
        "logo": instaIcon
    },
    {
        "href": "https://www.youtube.com/@cfj757683",
        "logo": youtubeIcon
    },
]

export const Hero = memo(() => {

    const { t } = useTranslation("Contact")
    const { classes, theme } = useStyles();

    return <section className={classes.root}>
        <div>
            {
                (() => {
                    if (theme.windowInnerWidth < breakpointValues.sm) {
                        return <>
                            <Logo className={classes.mobileLogo} logoUrl={logoSvg} width={70} />
                            <Text className={classes.subtitleMobile} typo="sectionPageOrButton">{t("pageSubtitle")}</Text>
                        </>
                    }
                })()
            }
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
                <motion.div
                    className={classes.socialMedia}
                    initial={{
                        "opacity": 0,
                        "x": 40
                    }}
                    animate={{
                        "opacity": 1,
                        "x": 0,
                        "transition": {
                            "ease": "easeInOut",
                            "duration": 0.7,
                            "delay": 3.3
                        }
                    }}
                >
                    {
                        socialMediaLinks.map(({ href, logo }, index) => <a className={classes.link} href={href} key={index}><Logo logoUrl={logo} width={60} /></a>)
                    }

                </motion.div>
            </div>
        </div>
    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "position": "relative",
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "center",
                        ...(() => {
                            const value = 25;
                            return {
                                "paddingRight": value,
                                "paddingLeft": value
                            }
                        })()
                    }
                }
                return {
                    "marginBottom": 200,
                    "paddingTop": 290,

                }
            })(),
            ...(theme.windowInnerWidth > 2000 ? {
                "display": "flex",
                "justifyContent": "center"
            } : {
                "paddingLeft": 425,

            })
        },
        "link": {
            "transition": "transform 600ms",
            ":hover": {
                "transform": "scale(1.1)"
            }

        },
        "socialMedia": {
            "gap": 10,
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "display": "flex",
                        "justifyContent": "center",
                        "marginBottom": 60

                    }
                }
                return {
                    "display": "grid",

                }
            })()

        },
        "subtitle": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "display": "none"

                    }
                }
                return {
                    "marginRight": 180,
                    "color": theme.colors.bloodOrange,
                    "position": "relative",

                }
            })()
        },
        "subtitleMobile": {
            "color": theme.colors.bloodOrange,
            "marginBottom": 30

        },
        "mobileLogo": {
            "marginTop": 40,
            "marginBottom": 40

        },
        "subtitleAndParagraph": {
            "display": "flex",
            "position": "relative",
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "flexDirection": "column-reverse"

                    }
                }
                return {
                    "alignItems": "flex-start",

                }
            })()

        },
        "paragraph": {
            "color": theme.colors.indigo,
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "textAlign": "center"
                    }
                }
                return {
                    "width": 518,
                    "marginRight": 205,

                }
            })()

        },
        "title": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "textAlign": "center",
                        "marginBottom": 60

                    }
                }
                return {
                    "width": 800,
                    "position": "relative",

                }
            })()
        },
    })
})