import { memo } from "react"
import { tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import { routes } from  "@/router";
import valuesJpg from "@/assets/jpg/comment/valeurs.jpeg";
import valuesWebp from "@/assets/webp/comment/valeurs.webp";


export const Values = memo(() => {

    const { t } = useTranslation("How")
    const { classes } = useStyles();

    return <section className={classes.root}>
        <Article
            className={classes.article}
            smallSurtitle={t("valuesSurtitle")}
            title={t("valuesTitle")}
            paragraph={t("valuesParagraph")}
            button={{
                "label": t("valuesButtonLabel"),
                ...routes.about().link
            }}
        />

        <picture>
            <source srcSet={valuesWebp} type="image/webp" />
            <source srcSet={valuesJpg} type="image/jpeg" />

            <img className={classes.image} src={valuesWebp} alt="valeurs"/>
        </picture>



    </section>
})

const useStyles = tss.create(() => {
    return ({
        "root": {
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            ...(()=>{
                const value = 210;
                return {
                    "paddingTop": value,
                    "paddingBottom": value
                }
            })()
        },
        "article": {
            "width": 455,
            "marginRight": 85
        },
        "image": {
            "width": 660,
            "marginLeft": 85
        }

    })
})