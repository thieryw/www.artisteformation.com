import { memo } from "react";
import { tss , Text} from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import { breakpointValues } from "@/theme";



export const Intro = memo(() => {
    const { classes } = useStyles();
    const { t } = useTranslation("Home");
    return <div className={classes.root}>
        <Article
            className={classes.article}
            title={t("introTitle")}
            smallSubtitle={t("introSubtitle")}
            paragraph={t("introParagraph")}
            isCentered={true}
            classes={{ "paragraphWrapper": classes.paragraph }}
            isAnimated={true}
        />
        <div className={classes.divider}></div>
        <div className={classes.stats}>
            <div className={classes.statWrapper}>
                <Text className={classes.partners} typo="heading1">{t("introPartnerNumber")}</Text>
                <Text className={classes.statName} typo="additionalTitle">{t("introPartner")}</Text>
            </div>
            <div className={classes.verticalDivider}></div>
            <div className={classes.statWrapper}>
                <Text className={classes.carers} typo="heading1">{t("introCarerNumber")}</Text>
                <Text className={classes.statName} typo="additionalTitle">{t("introCarer")}</Text>

            </div>
            <div className={classes.verticalDivider}></div>
            <div className={classes.statWrapper}>
                <Text className={classes.satisfaction} typo="heading1">{t("introSatisfactionPercentage")}</Text>
                <Text className={classes.statName} typo="additionalTitle">{t("introSatisfaction")}</Text>
            </div>

        </div>
    </div>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "grid",
            "gridTemplateColumns": "1fr",
            "justifyItems": "center",
            "gap": 65,
            "marginBottom": (()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return 40;
                }
                return 300
            })(),
            ...(() => {
                const value = 20;
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "paddingLeft": value,
                        "paddingRight": value
                    }
                }

                return undefined;
            })()

        },
        "article": {
            "width": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return undefined;
                }
                return 950;
            })()
        },
        "paragraph": {
            "marginBottom": 0

        },
        "divider": {
            "height": 0,
            "width": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return 250;
                }
                return 1090;
            })(),
            "borderTop": `solid ${theme.colors.darkGray3} 1px`
        },
        "stats": {
            "display": "flex",
            "alignItems": "center",
            "flexDirection": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return "column";
                }

                return undefined
            })()

        },
        "verticalDivider": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "display": "none"


                    }
                }
                return {
                    "marginLeft": 90,
                    "marginRight": 90,
                    "height": 66,
                    "width": 0,
                    "borderLeft": `solid ${theme.colors.darkGray3} 1px`,

                }
            })()

        },
        "statWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "marginBottom": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return 45;
                }
                return undefined;
            })()

        },
        "partners": {
            "color": theme.colors.darkYellow

        },
        "statName": {
            "textTransform": "uppercase"

        },
        "carers": {
            "color": theme.colors.linden
        },
        "satisfaction": {
            "color": theme.colors.bloodOrange

        }

    })
})