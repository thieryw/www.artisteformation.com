import { memo } from "react"
import { tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";


export const Handicap = memo(() => {

    const { t } = useTranslation("How")
    const { classes } = useStyles();

    return <section className={classes.root}>
        <Article
            isCentered={true}
            className={classes.article}
            title={t("handicapTitle")}
            smallSubtitle={t("handicapSubtitle")}
            paragraph={t("handicapParagraph")}
        />

    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "backgroundColor": theme.colors.backgroundTertiary,
            ...(()=>{
                const value = 210;
                return {
                    "paddingTop": value,
                    "paddingBottom": value
                }
            })()
        },
        "article": {
            "width": 930,
        },

    })
});