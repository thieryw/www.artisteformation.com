import { memo } from "react"
import { breakpointValues, tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import { Logo } from "@/components/Logo";
import logoSvg from "@/assets/svg/logo.svg";


export const Values = memo(() => {

    const { t } = useTranslation("About")
    const { classes, theme } = useStyles();

    return <section className={classes.root}>
        <Article
            className={classes.article}
            isCentered={true}
            title={t("valuesTitle")}
            paragraph={t("valuesParagraph")}
            {
                ...(()=>{
                    if(theme.windowInnerWidth < breakpointValues.sm){
                        return {
                            "smallSurtitle": t("valuesSubtitle")
                        }
                    }
                    return {
                        "smallSubtitle": t("valuesSubtitle")
                    }
                })()
            }
            isAnimated={true}
        />
        <Logo className={classes.logo} width={145} logoUrl={logoSvg} />


    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {

                        "flexDirection": "column-reverse",
                        ...(()=>{
                            const value = 25;
                            return {
                                "paddingRight": value,
                                "paddingLeft": value,
                                "marginTop": 80
                            }
                        })()
                    }
                }
                return {
                    "backgroundColor": theme.colors.backgroundTertiary,
                    "flexDirection": "column",
                    ...(() => {
                        const value = 195;
                        return {
                            "paddingTop": value,
                            "paddingBottom": value

                        }
                    })(),

                }
            })()

        },
        "article": {
            "width": (()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return undefined;
                }
                return 700;
            })(),

        },
        "logo": {
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                        "marginBottom": 70
                    }
                }
                return undefined;
            })()
        }

    })
})