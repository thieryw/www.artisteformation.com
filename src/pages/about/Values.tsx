import { memo } from "react"
import { tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import { Logo } from "@/components/Logo";
import logoSvg from "@/assets/svg/logo.svg";


export const Values = memo(() => {

    const { t } = useTranslation("About")
    const { classes } = useStyles();

    return <section className={classes.root}>
        <Article
            className={classes.article}
            isCentered={true}
            title={t("valuesTitle")}
            smallSubtitle={t("valuesSubtitle")}
            paragraph={t("valuesParagraph")}
        />
        <Logo width={145} logoUrl={logoSvg} />


    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "backgroundColor": theme.colors.backgroundTertiary,
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "justifyContent": "center",
            ...(()=>{
                const value = 195;
                return {
                    "paddingTop": value,
                    "paddingBottom": value

                }
            })()

        },
        "article": {
            "width": 950
        }

    })
})