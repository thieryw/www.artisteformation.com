import { memo, useState } from "react"
import { tss, Text } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";


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
    const { classes } = useStyles();

    return <section className={classes.root}>
        {
            articles.map(({paragraph, title}, index) => <div

                key={index}
                style={{
                    "marginTop": (()=>{
                        if(index === 0){
                            return undefined;
                        }
                        if(index < 3){
                            return 350 * index
                        }

                        const deductible = 150

                        return (350 * (articles.length - (index + 1))) - deductible;
                    })()
                }}
            >
                <Text className={classes.number} typo="quote">{
                    (()=>{
                        if(index < 3){
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
        }



    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "grid",
            "gridTemplateColumns": "repeat(3, 385px)",
            "justifyContent": "center",
            ...(()=>{
                const value = 145;
                return {
                    "paddingTop": value,
                    "paddingBottom": value,
                    "columnGap": value
                }

            })()

        },
        "number": {
            "marginBottom": 65,
            "color": theme.colors.darkGray3

        }

    })
})