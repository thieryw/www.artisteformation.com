import { memo } from "react"
import { tss, Text } from "@/theme";
import { useTranslation } from "@/i18n";
import fresquePng from "@/assets/png/a-propos/fresque-a-propos.png"


export const Hero = memo(() => {

    const { t } = useTranslation("About")
    const { classes } = useStyles();

    return <section className={classes.root}>
        <div className={classes.articleWrapper}>
            <div className={classes.background}></div>
            <Text className={classes.title} typo="heading1">{t("pageTitle")}</Text>
            <div className={classes.subtitleAndParagraph}>
                <Text className={classes.subtitle} typo="additionalTitle">{t("pageSubtitle")}</Text>
                <Text className={classes.paragraph} typo="paragraph">{t("introParagraph")}</Text>
            </div>
        </div>

        <div className={classes.fresque}>
            <div className={classes.imageWrapper}>
                <img className={classes.image} src={fresquePng} alt="fresque decorative" />
            </div>
        </div>

    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "paddingTop": 290,
        },
        "articleWrapper": {
            "marginBottom": 130,
            "paddingLeft": 425,
            "position": "relative"


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
        },
        "title": {
            "width": 620,
            "marginBottom": 90,
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

        }
    })
})