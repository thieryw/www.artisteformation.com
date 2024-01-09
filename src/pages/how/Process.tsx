import { memo } from "react"
import { tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import logo from "@/assets/svg/logo.svg";
import { Logo } from "@/components/Logo";


export const Process = memo(() => {

    const { t } = useTranslation("How")
    const { classes, theme } = useStyles();

    return <section className={classes.root}>

        <Article
            className={classes.article}
            isCentered={true}
            title={t("processTitle")}
            smallSubtitle={t("processSubtitle")}
            paragraph={t("processParagraph")}
        />

        <Logo fill={theme.colors.darkGray3} width={145} logoUrl={logo} />


    </section>
})

const useStyles = tss.create(({theme}) => {
    return ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "backgroundColor": theme.colors.backgroundTertiary,
            "paddingTop": 360,
            "paddingBottom": 160
        },
        "article": {
            "width": 680,
        }

    })
})