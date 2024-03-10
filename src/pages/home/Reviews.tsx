import { memo } from "react";
import { tss, breakpointValues, Text } from "@/theme";
import { useTranslation } from "@/i18n";
import { CardSlider } from "@/components/CardSlider";
import { Article } from "@/components/Article";
import { routes } from "@/router";




export const Reviews = memo(() => {
    const { classes, theme } = useStyles();
    const { t } = useTranslation("Home");
    return <section className={classes.root}>
        {
            (()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return <Text className={classes.mobileTitle} typo="additionalTitle">{t("reviewArticleSurtitle")}</Text>
                }
                return <Article
                    className={classes.article}
                    smallSurtitle={t("reviewArticleSurtitle")}
                    title={t("reviewArticleTitle")}
                    hasSmallLine={true}
                    paragraph={t("reviewArticleParagraph")}
                    button={{
                        "label": t("reviewArticleButtonLabel"),
                        ...routes.contact().link
                    }}
                    isAnimated={true}

                />
            })()
        }
        <CardSlider
            className={classes.slider}
            cards={[
                {
                    "title": t("review1Title"),
                    "subtitle": t("review1Subtitle"),
                    "paragraph": t("review1Paragraph"),
                    "stars": 5
                },
                {
                    "title": t("review2Title"),
                    "subtitle": t("review2Subtitle"),
                    "paragraph": t("review2Paragraph"),
                    "stars": 5
                },
                {
                    "title": t("review3Title"),
                    "subtitle": t("review3Subtitle"),
                    "paragraph": t("review3Paragraph"),
                    "stars": 5
                },
            ]}
        />
        {
            (()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return <Article 
                        className={classes.mobileArticle}
                        isCentered={true}
                        paragraph={t("reviewArticleParagraph")}
                        button={{
                            "label": t("reviewArticleButtonLabel"),
                            ...routes.contact().link
                        }}

                    />
                }
            })()
        }

    </section>
})

const useStyles = tss.create(({theme}) => {
    return ({
        "root": {
            "display": "flex",
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                        "flexDirection": "column",

                        ...(()=>{
                            const value = 25;
                            return {
                                "paddingRight": value,
                                "paddingLeft": value
                            }
                        })()
                    }
                }
                return {
                    "justifyContent": "center",
                }
            })()
        },
        "mobileTitle": {
            "color": theme.colors.bloodOrange,
            "textAlign": "center",
            "marginBottom": 90

        },
        "article": {
            "width": 292,
            "marginRight": 140

        },
        "mobileArticle": {
            "marginTop": 90

        },
        "slider": {


            "marginLeft": (()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return undefined;
                }
                return 140;
            })(),

        }

    })
})