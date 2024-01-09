import { memo } from "react"
import { tss, Text } from "@/theme";
import { MiniArticle } from "@/components/MiniArticle";
import { Article } from "@/components/Article";
import { useTranslation } from "@/i18n";
import fresquePng from "@/assets/png/comment/fresque-comment.png"

export const Hero = memo(() => {

    const { t } = useTranslation("How")
    const { classes, theme } = useStyles();

    return <section className={classes.root}>
        <div className={classes.articleWrapper}>
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
                title={<Text className={classes.title} typo="heading1">{t("introTitle")}</Text>}
                paragraph={t("introParagraph")}
                secondParagraph={t("introSecondParagraph")}
            />

        </div>

        <div className={classes.fresque}>
            <div className={classes.imageWrapper}>
                <img className={classes.image} src={fresquePng} alt="fresque decorative"/>
            </div>
            <div className={classes.background}>

            </div>


        </div>

    </section>
})

const useStyles = tss.create(({theme}) => {
    return ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "marginTop": 290,
        },
        "articleWrapper": {
            "display": "flex",
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
        },
        "title": {
            "width": 800
        },
        "fresque": {
            "padding": 120,
            "width": "100%",
            "boxSizing": "border-box",
            "position": "relative"

        },
        "image": {
            "objectFit": "cover",
            "width": "100%",
            "height": "100%"

        },
        "imageWrapper": {
            "position": "relative",
            "zIndex": 200

        },
        "background": {
            "width": "70%",
            "height": "70%",
            "backgroundColor": theme.colors.backgroundTertiary,
            "position": "absolute",
            "bottom": 0,
            "left": 0,
            "zIndex": 199

        }
    })
})