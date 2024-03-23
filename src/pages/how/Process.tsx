import { memo } from "react"
import { breakpointValues, tss, Text } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import logo from "@/assets/svg/grey-logo.svg";
import { Logo } from "@/components/Logo";
import jpg from "@/assets/jpg/comment/slider/1-intermittent-du-spectacle.jpeg";
import webp from "@/assets/webp/comment/slider/1-intermittent-du-spectacle.webp";


export const Process = memo(() => {

    const { t } = useTranslation("How")
    const { classes, theme } = useStyles();

    return <section className={classes.root}>
        {
            (()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return <div>
                        <div>
                            <picture>
                                <source srcSet={webp} type="image/webp" />
                                <source srcSet={jpg} type="image/jpeg" />
                                <img className={classes.mobileImage} src={webp} alt="photographer" />
                            </picture>

                        </div>
                        <Article 
                            smallSurtitle={t("processSubtitle")}
                            title={t("processTitle")}
                            isCentered={true}
                            className={classes.mobileArticle}
                        />
                    </div>

                }
                return <>
                    <Article
                        className={classes.article}
                        isCentered={true}
                        title={<Text typo="heading2">{t("processTitle")}<br/>{t("processTitle2")}</Text>}
                        smallSubtitle={t("processSubtitle")}
                        paragraph={t("processParagraph")}
                        isAnimated={true}
                    />

                    <Logo fill={theme.colors.darkGray3} width={145} logoUrl={logo} />
                </>
            })()
        }



    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return undefined;
                }
                return {

                    "backgroundColor": theme.colors.backgroundTertiary,
                    "paddingTop": 360,
                    "paddingBottom": 160,
                }
            })()
        },
        "article": {
            ...(()=>{
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                    }

                }
                return {
                    "width": 680

                }
            })()
        },
        "mobileImage": {
            "objectFit": "cover",
            "width": "100%",
            "marginBottom": 80
        },
        "mobileArticle": {
            ...(()=>{
                const value = 25;
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }
            })()
        }

    })
})