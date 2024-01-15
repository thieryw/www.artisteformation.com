import { memo } from "react"
import { tss, Text } from "@/theme";
import { useTranslation } from "@/i18n";
import instaIcon from "@/assets/svg/insta-icon.svg";
import fbIcon from "@/assets/svg/fb-icon.svg";
import youtubeIcon from "@/assets/svg/youtube-icon.svg";
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
    const { classes } = useStyles();

    return <section className={classes.root}>
        <Text className={classes.title} typo="heading1">{t("pageTitle")}</Text>
        <div className={classes.subtitleAndParagraph}>
            <Text className={classes.subtitle} typo="additionalTitle">{t("pageSubtitle")}</Text>
            <Text className={classes.paragraph} typo="paragraph">{t("introParagraph")}</Text>
            <div className={classes.socialMedia}>
                {
                    socialMediaLinks.map(({href, logo}, index) => <a href={href} key={index}><Logo logoUrl={logo} width={60} /></a>)
                }

            </div>
        </div>
    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "marginBottom": 200,
            "paddingLeft": 425,
            "position": "relative",
            "paddingTop": 290,
        },
        "socialMedia": {
            "display": "grid",
            "gap": 10

        },
        "subtitle": {
            "marginRight": 180,
            "color": theme.colors.bloodOrange
        },
        "subtitleAndParagraph": {
            "display": "flex",
            "alignItems": "flex-start",
            "position": "relative",

        },
        "paragraph": {
            "color": theme.colors.indigo,
            "width": 518,
            "marginRight": 205

        },
        "title": {
            "width": 800,
            "marginBottom": 90,
            "position": "relative"
        },
    })
})