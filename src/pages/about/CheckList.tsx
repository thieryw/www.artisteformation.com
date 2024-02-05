import { memo, useState } from "react"
import { tss, Text, breakpointValues } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import { CardSlider } from "@/components/CardSlider";
import { LinkButton } from "@/components/LinkButton";
import { routes } from "@/router";


export const CheckList = memo(() => {

    const { t } = useTranslation("About")
    const [articles] = useState([
        {
            "title": t("teachingTitle"),
            "paragraph": t("teachingParagraph")
        },
        {
            "title": t("goodWillTitle"),
            "paragraph": t("goodWillParagraph")
        },
        {
            "title": t("adaptationTitle"),
            "paragraph": t("adaptationParagraph")
        },
        {
            "title": t("responsibilityTitle"),
            "paragraph": t("responsibilityParagraph")
        },
        {
            "title": t("sharingTitle"),
            "paragraph": t("sharingParagraph")
        },
    ])
    const { classes, theme } = useStyles();

    return <section className={classes.root}>
        {
            (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return <div className={classes.mobileWrapper}>
                        <CardSlider
                            className={classes.cardSlider}
                            cards={articles}
                            classes={{
                                "cardTitle": classes.cardTitle,
                                "cardParagraph": classes.cardParagraph
                            }}
                        />
                        <div className={classes.verticalDivider}></div>
                        <LinkButton
                            {
                                ...routes.contact().link
                            }
                            label={t("contactButtonLabel")}

                        />
                    </div>
                }
                return articles.map(({ paragraph, title }, index) => <div

                    key={index}
                    style={{
                        "marginTop": (() => {
                            if (index === 0) {
                                return undefined;
                            }
                            if (index < 3) {
                                return 350 * index
                            }

                            const deductible = 150

                            return (350 * (articles.length - (index + 1))) - deductible;
                        })()
                    }}
                >
                    <Text className={classes.number} typo="quote">{
                        (() => {
                            if (index < 3) {
                                return `0${index + 1}.`
                            };
                            return `0${articles.length - (index - 3)}.`
                        })()
                    }</Text>
                    <Article
                        title={<Text typo="heading3">{title}</Text>}
                        paragraph={paragraph}
                        hasSmallLine={true}
                        key={title}
                    />
                </div>)

            })()
        }



    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    const value = 25;
                    return {
                        "paddingRight": value,
                        "paddingLeft": value,
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "center",
                        "boxSizing": "border-box",
                        "marginTop": 100

                    };
                }
                return {
                    "display": "grid",
                    "gridTemplateColumns": "repeat(3, 385px)",
                    "justifyContent": "center",
                    ...(() => {
                        const value = 145;
                        return {
                            "paddingTop": value,
                            "paddingBottom": value,
                            "columnGap": value
                        }

                    })(),

                }
            })()

        },
        "number": {
            "marginBottom": 65,
            "color": theme.colors.darkGray3

        },
        "cardSlider": {
            "alignItems": "flex-start"
        },
        "cardTitle": {
            "textAlign": "left",
            "wordBreak": "break-word"

        },
        "cardParagraph": {
            "textAlign": "left"

        },
        "mobileWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center"

        },
        "verticalDivider": {
            "width": 90,
            "height": 0,
            "borderTop": `solid ${theme.colors.darkGray3} 2px`,
            "position": "relative",
            "zIndex": 600,
            "transform": "rotate(90deg)",
            "marginBottom": 90

        }

    })
})