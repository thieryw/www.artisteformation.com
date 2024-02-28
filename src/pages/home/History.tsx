import { memo } from "react";
import { breakpointValues, tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import { routes } from "@/router";




export const History = memo(() => {
    const { classes } = useStyles();
    const { t } = useTranslation("Home");
    return <section className={classes.root}>
        <Article
            isCentered={true}
            className={classes.article}
            smallSubtitle={t("historySubtitle")}
            title={t("historyTitle")}
            paragraph={t("historyParagraph")}
            button={{
                "label": t("historyButtonLabel"),
                ...routes.about().link,
                "variant": "filled"
            }}
            classes={{
                "title": classes.mobileTitle
            }}

        />


    </section>
})

const useStyles = tss.create(({theme}) => {
    return ({
        "root": {
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "backgroundColor": theme.colors.backgroundTertiary,
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    const leftRight = 25;
                    const topBottom = 80;
                    return {
                        "paddingTop": topBottom, 
                        "paddingBottom": topBottom,
                        "paddingLeft": leftRight,
                        "paddingRight": leftRight,
                        "marginTop": 100

                    }
                }
                const value = 175;

                return {
                    "paddingTop": value,
                    "paddingBottom": value,
                    "marginTop": 244,

                }
            })()
        },
        "mobileTitle": {
            ...(()=>{
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "fontSize": "3rem",
                        ...(() => {
                            const value = 40;
                            return {
                                "paddingRight": value,
                                "paddingLeft": value
                            }
                        })()

                    }
                }
            })()

        },
        "article": {
            "maxWidth": 950,


        },

    })
})