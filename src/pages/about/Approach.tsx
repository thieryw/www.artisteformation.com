import { memo } from "react"
import { tss, Text } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import approachJpg from "@/assets/jpg/a-propos/valeurs-2.jpeg";
import approachWebp from "@/assets/webp/a-propos/valeurs-2.webp";


export const Approach = memo(() => {

    const { t } = useTranslation("About")
    const { classes } = useStyles();

    return <section className={classes.root}>

        <Article 
            title={<Text className={classes.title} typo="heading4">{t("approachTitle")}</Text>}
            paragraph={t("approachParagraph")}
            classes={{
                "paragraph": classes.paragraph
            }}
            className={classes.article}
        />
        <picture>
            <source srcSet={approachWebp} type="image/webp" />
            <source srcSet={approachJpg} type="image/jpeg" />
            <img className={classes.image} src={approachWebp} alt="approach" />
        </picture>


    </section>
})

const useStyles = tss.create(({ theme }) => {
    const margin = 105;
    return ({
        "root": {
            "display": "flex",
            "backgroundColor": theme.colors.backgroundTertiary,
            "justifyContent": "center"

        },
        "image": {
            "maxWidth": 605,
            "marginLeft": margin,
            "position": "relative",
            "top": -215

        },
        "article": {
            "marginRight": margin

        },
        "title": {
            "width": 500
        },
        "paragraph": {
            "width": 400,
            "color": theme.colors.indigo
        }

    })
})