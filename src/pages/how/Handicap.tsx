import { memo } from "react"
import { breakpointValues, tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";


export const Handicap = memo(() => {

    const { t } = useTranslation("How")
    const { classes, theme } = useStyles();

    return <section className={classes.root}>
        <Article
            isCentered={true}
            className={classes.article}
            title={t("handicapTitle")}
            paragraph={t("handicapParagraph")}
            {
                ...(()=>{
                    if(theme.windowInnerWidth < breakpointValues.sm){
                        return {
                            "smallSurtitle": t("handicapSubtitle")
                        }
                    }
                    return {
                        "smallSubtitle": t("handicapSubtitle")
                    }
                })()
            }
        />

    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "backgroundColor": theme.colors.backgroundTertiary,
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                        "paddingTop": 75,
                        "paddingBottom": 30,
                        ...(()=>{
                            const value = 25;
                            return {
                                "paddingLeft": value,
                                "paddingRight": value
                            }
                        })()
                    }
                }
                return {

                    "display": "flex",
                    "alignItems": "center",
                    "justifyContent": "center",
                    ...(() => {
                        const value = 210;
                        return {
                            "paddingTop": value,
                            "paddingBottom": value
                        }
                    })()
                }
            })()
        },
        "article": {
            "width": (()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return undefined
                }
                return 930;
            })(),
        },

    })
});