import { memo } from "react";
import { Article } from "@/components/Article";
import familyJpg from "@/assets/jpg/formateurs/devenir-intervenant.jpeg";
import familyWebp from "@/assets/webp/formateurs/devenir-intervenant.webp";
import { tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { routes } from "@/router";



export const Family = memo(() => {
    const { t } = useTranslation("Teachers");
    const { classes } = useStyles();
    return <>
        <section className={classes.root}>
            <div className={classes.wrapper}>
                <Article
                    className={classes.article}
                    isCentered={true}
                    title={t("familyTitle")}
                    smallSubtitle={t("familySubtitle")}
                    paragraph={t("familyParagraph")}

                />
                <picture>
                    <source srcSet={familyWebp} type="image/webp" />
                    <source srcSet={familyJpg} type="image/jpeg" />
                    <img className={classes.image} src={familyWebp} alt="family" />
                </picture>
            </div>

        </section>
        <section className={classes.suggestions}>
            <Article
                className={classes.suggestionsArticle}
                title={t("suggestionTitle")}
                isCentered={true}
                paragraph={t("suggestionParagraph")}
                button={{
                    "label": t("suggestionButtonLabel"),
                    ...routes.contact().link
                }}
            />
        </section>
    </>
});


const useStyles = tss.create(({ theme }) => {
    const imageHeight = 490;
    const articleWidth = 700;
    return ({
        "root": {
            "backgroundColor": theme.colors.backgroundTertiary,

        },
        "wrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "justifyContent": "center",
            "position": "relative",
            "top": imageHeight / 2

        },
        "article": {
            "width": articleWidth,
            "marginBottom": 40
        },
        "image": {
            "height": imageHeight

        },
        "suggestions": {
            "display": "flex",
            "justifyContent": "center"
        },
        "suggestionsArticle": {
            "width": articleWidth,
            "paddingTop": imageHeight / 2 + 100,
            "paddingBottom": 220
        }
    })
})