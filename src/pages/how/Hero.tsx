import { memo } from "react"
import { tss, Text } from "@/theme";
import { MiniArticle } from "@/components/MiniArticle";
import { Article } from "@/components/Article";
import { useTranslation } from "@/i18n";

export const Hero = memo(() => {

    const { t } = useTranslation("How")
    const { classes, theme } = useStyles();
    return <section className={classes.root}>
        <MiniArticle 
            numberTitle={t("careerBoostTitle")}
            subtitle={t("careerBoostSubtitle")}
            paragraph={t("careerBoostParagraph")}
            titleColor={theme.colors.linden}
        />
        <div></div>

        <Article 
            smallSurtitle={t("introSurtitle")}
            title={<Text typo="heading1">{t("introTitle")}</Text>}
            paragraph={t("introParagraph")}
            secondParagraph={t("introSecondParagraph")}
        />

    </section>
})

const useStyles = tss.create(() => {
    return ({
        "root": {}
    })
})