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
        <div className={classes.separator}></div>

        <Article 
            classes={{
                "firstParagraph": classes.paragraph,
                "secondParagraph": classes.paragraph
            }}
            smallSurtitle={t("introSurtitle")}
            title={<Text typo="heading1">{t("introTitle")}</Text>}
            paragraph={t("introParagraph")}
            secondParagraph={t("introSecondParagraph")}
        />

    </section>
})

const useStyles = tss.create(({theme}) => {
    return ({
        "root": {
            "display": "flex",
            "marginTop": 290,
            ...(()=>{
                const value = 242;
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }
                
            })()
        },
        "separator": {
            "width": 0,
            "height": 640,
            "borderLeft": `solid ${theme.colors.darkGray3} 1px`,
            ...(()=>{
                const value = 155;
                return {
                    "marginLeft": value,
                    "marginRight": value
                }

            })()
        },
        "paragraph": {
            "color": theme.colors.indigo
        }
    })
})