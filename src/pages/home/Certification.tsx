import { memo } from "react";
import { tss, Text, breakpointValues } from "@/theme";
import { useTranslation } from "@/i18n";
import badge from "@/assets/svg/home/badge-qualiopi.svg";
import card from "@/assets/svg/home/certification-card.svg";
import { ReactSVG } from "react-svg";




export const Certification = memo(() => {
    const { classes } = useStyles();
    const { t } = useTranslation("Home");
    return <section className={classes.root}>
        <div className={classes.inner}>
            <div className={classes.badge}>
                {/*<ReactSVG className={classes.svg} src={badge} />*/}
                <img className={classes.svg} src={badge} alt="badge qualiopi certification" />
            </div>
            <div className={classes.textWrapper}>
                <Text className={classes.paragraph} typo="paragraph">{t("certificationParagraph")}</Text>
                <Text className={classes.title} typo="carouselItem">{t("certificationTitle")}</Text>
            </div>
        </div>

    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                    }
                }
                return {
                    "paddingLeft": theme.spacing.nonCenteredSectionSide,
                    "paddingRight": theme.spacing.nonCenteredSectionSide,
                    "marginBottom": 350,

                }
            })()
        },
        "inner": {
            "display": "flex",
            ...(() => {
                const value = 90;
                return {
                    "paddingTop": value,
                    "paddingBottom": value
                }
            })(),
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {

                        "flexDirection": "column",
                        "backgroundColor": theme.colors.bloodOrangeVariant
                    }
                }
                return {
                    "justifyContent": "space-between",
                    "alignItems": "center",
                    "paddingLeft": 180,
                    "paddingRight": theme.spacing.sectionTopBottomPadding,
                    "background": `url(${card})`,
                }
            })()
        },
        "badge": {
            "marginBottom": 65
        },
        "svg": {
            "width": "100%",

        },
        "textWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            ...(()=>{
                const value = 30;
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }
            })()
        },
        "paragraph": {
            "marginBottom": 15,
            "color": theme.colors.white,
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                        "textAlign": "center",
                        "marginBottom": 35

                    };
                }
                return undefined;
            })()
        },
        "title": {
            "color": theme.colors.white,
            "textAlign": (()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return "center";
                }
                return undefined;
            })()
        }

    })
})