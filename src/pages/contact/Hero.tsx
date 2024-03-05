import { memo } from "react"
import { tss, Text, breakpointValues } from "@/theme";
import { useTranslation } from "@/i18n";
import instaIcon from "@/assets/svg/insta-icon.svg";
import fbIcon from "@/assets/svg/fb-icon.svg";
import youtubeIcon from "@/assets/svg/youtube-icon.svg";
import logoSvg from "@/assets/svg/logo.svg";
import { Logo } from "@/components/Logo";

const socialMediaLinks = [
    {
        "href": "",
        "logo": fbIcon
    },
    {
        "href": "",
        "logo": instaIcon
    },
    {
        "href": "",
        "logo": youtubeIcon
    },
]

export const Hero = memo(() => {

    const { t } = useTranslation("Contact")
    const { classes, theme } = useStyles();

    return <section className={classes.root}>
        {
            (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return <>
                        <Logo className={classes.mobileLogo} logoUrl={logoSvg} width={70} />
                        <Text className={classes.subtitleMobile} typo="additionalTitle">{t("pageSubtitle")}</Text>
                    </>
                }
            })()
        }
        <Text className={classes.title} typo="heading1">{t("pageTitle")}</Text>
        <div className={classes.subtitleAndParagraph}>
            <Text className={classes.subtitle} typo="additionalTitle">{t("pageSubtitle")}</Text>
            <Text className={classes.paragraph} typo="paragraph">{t("introParagraph")}</Text>
            <div className={classes.socialMedia}>
                {
                    socialMediaLinks.map(({ href, logo }, index) => <a href={href} key={index}><Logo logoUrl={logo} width={60} /></a>)
                }

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
                        ...(()=>{
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
                    "paddingLeft": 425,
                    "paddingTop": 290,

                }
            })()
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
                    "top": "0.5rem"

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
                    "marginBottom": 90,
                    "position": "relative",

                }
            })()
        },
    })
})