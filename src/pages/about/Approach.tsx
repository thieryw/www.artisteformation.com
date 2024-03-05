import { memo } from "react"
import { tss, Text, breakpointValues } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import approachJpg from "@/assets/jpg/a-propos/valeurs-2.jpeg";
import approachWebp from "@/assets/webp/a-propos/valeurs-2.webp";
import approachMobileJpg from "@/assets/jpg/a-propos/valeurs-mobile.jpeg";
import approachMobileWebp from "@/assets/webp/a-propos/valeurs-mobile.webp";


export const Approach = memo(() => {

    const { t } = useTranslation("About")
    const { classes, theme } = useStyles();

    const images = (() => {
        if (theme.windowInnerWidth < breakpointValues.sm) {
            return {
                "webp": approachMobileWebp,
                "jpg": approachMobileJpg
            }
        }
        return {
            "webp": approachWebp,
            "jpg": approachJpg
        }
    })()

    return <section className={classes.root}>
        {
            (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return undefined
                }
                return <Article
                    title={<Text className={classes.title} typo="heading4">{t("approachTitle")}</Text>}
                    paragraph={t("approachParagraph")}
                    classes={{
                        "paragraph": classes.paragraph
                    }}
                    className={classes.article}
                />
            })()
        }

        <picture>
            <source srcSet={images.webp} type="image/webp" />
            <source srcSet={images.jpg} type="image/jpeg" />
            <img className={classes.image} src={images.webp} alt="approach" />
        </picture>


    </section>
})

const useStyles = tss.create(({ theme }) => {
    const margin = 105;
    return ({
        "root": {
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                        "marginTop": 90
                    };
                }
                return {
                    "display": "flex",
                    "backgroundColor": theme.colors.backgroundTertiary,
                    "justifyContent": "center",

                }
            })()

        },
        "image": {
            "boxShadow": "0px 2px 20px 2px rgba(0, 0, 0, 0.1)",
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                        "objectFit": "cover",
                        "width": "100%"
                    };
                }
                return {
                    "maxWidth": 605,
                    "marginLeft": margin,
                    "position": "relative",
                    "top": -215,

                }
            })()

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