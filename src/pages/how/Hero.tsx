import { memo } from "react"
import { tss, Text, breakpointValues } from "@/theme";
import { MiniArticle } from "@/components/MiniArticle";
import { Article } from "@/components/Article";
import { useTranslation } from "@/i18n";
import fresquePng from "@/assets/png/comment/fresque-comment.png";
import fresqueMobilePng from "@/assets/png/comment/fresque-comment-mobile.png";
import { Logo } from "@/components/Logo";
import logoSvg from "@/assets/svg/logo.svg";

export const Hero = memo(() => {

    const { t } = useTranslation("How")
    const { classes, theme } = useStyles();

    return <section className={classes.root}>
        {
            (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return <div className={classes.mobileVersionWrapper}>
                        <Logo 
                        className={classes.mobileLogo}
                            logoUrl={logoSvg}
                            width={70}
                        />
                        <Text style={{
                            "color": theme.colors.bloodOrange
                        }} className={classes.mobileText} typo="additionalTitle">{t("introSurtitle")}</Text>
                        <Text className={classes.mobileText} typo="heading1">{t("introTitle")}</Text>
                        <div className={classes.mobileImageWrapper}>
                            <img className={classes.mobileImage} src={fresqueMobilePng} alt="fresque" />
                        </div>
                        <Text className={classes.mobileText} typo="paragraph">{`${t("introSecondParagraph")} ${t("introParagraph")}`}</Text>
                        <div className={classes.mobileSeparator}></div>

                    </div>;
                }
                return <>
                    <div className={classes.articleWrapper}>
                        <MiniArticle
                            numberTitle={t("careerBoostTitle")}
                            subtitle={t("careerBoostSubtitle")}
                            paragraph={t("careerBoostParagraph")}
                            titleColor={theme.colors.linden}
                            isAnimated={true}
                            animationDelay={2.8}
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
                            isAnimated={true}
                            animationDelay={2.2}
                        />

                    </div>

                    <div className={classes.fresque}>
                        <div className={classes.imageWrapper}>
                            <img className={classes.image} src={fresquePng} alt="fresque decorative" />
                        </div>
                        <div className={classes.background}>

                        </div>


                    </div>
                </>
            })()
        }

    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){

                    return undefined;
                }
                return {
                    "display": "flex",
                    "flexDirection": "column",
                    "paddingTop": 200

                }
            })()
        },
        "articleWrapper": {
            "display": "flex",
            ...(() => {
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
            "borderLeft": `solid ${theme.colors.backgroundTertiary} 2px`,
            ...(() => {
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
            "width": 650
        },
        "fresque": {
            ...(() => {
                const value = 120;
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }
            })(),
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
            "height": "85%",
            "backgroundColor": theme.colors.backgroundTertiary,
            "position": "absolute",
            "bottom": -70,
            "left": 0,
            "zIndex": 199

        },
        "mobileVersionWrapper": {
            ...(() => {
                const value = 25;
                return {
                    "paddingLeft": value,
                    "paddingRight": value,
                    "paddingTop": value
                }
            })(),
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",

        },
        "mobileText": {
            "textAlign": "center",
            "marginBottom": 30
        },
        "mobileImageWrapper": {
            "marginBottom": 40

        },
        "mobileImage": {
            "objectFit": "cover",
            "width": "100%",
            "height": "100%"

        },
        "mobileLogo": {
            "marginBottom": 50,
        },
        "mobileSeparator": {
            "width": "80%",
            "height": 0,
            "borderTop": `solid ${theme.colors.backgroundTertiary} 2px`,
            "marginTop": 30
        }
    })
})