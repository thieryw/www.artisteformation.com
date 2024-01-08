import { memo } from "react";
import { tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { CardSlider } from "@/components/CardSlider";
import { Article } from "@/components/Article";
import { routes } from "@/router";




export const Reviews = memo(() => {
    const { classes } = useStyles();
    const { t } = useTranslation("Home");
    return <section className={classes.root}>
        <Article
            className={classes.article}
            smallSurtitle={t("reviewArticleSurtitle")}
            title={t("reviewArticleTitle")}
            hasSmallLine={true}
            paragraph={t("reviewArticleParagraph")}
            button={{
                "label": t("reviewArticleButtonLabel"),
                ...routes.contact().link
            }}

        />
        <CardSlider
            className={classes.slider}
            cards={[
                {
                    "title": t("review1Title"),
                    "subtitle": t("review1Subtitle"),
                    "paragraph": t("review1Paragraph"),
                    "stars": 5
                },
                {
                    "title": t("review2Title"),
                    "subtitle": t("review2Subtitle"),
                    "paragraph": t("review2Paragraph"),
                    "stars": 5
                },
                {
                    "title": t("review3Title"),
                    "subtitle": t("review3Subtitle"),
                    "paragraph": t("review3Paragraph"),
                    "stars": 5
                },
            ]}
        />

    </section>
})

const useStyles = tss.create(() => {
    return ({
        "root": { 
            "display": "flex",
            "justifyContent": "center"
        },
        "article": {
            "width": 292,
            "marginRight": 140

        },
        "slider": {
            "marginLeft": 140

        }

    })
})