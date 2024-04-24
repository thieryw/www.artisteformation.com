import { memo } from "react";
import { tss, Text, breakpointValues } from "@/theme";
import { useTranslation } from "@/i18n";
import badge from "@/assets/svg/home/badge-qualiopi.svg";
import card from "@/assets/jpg/home/backgroundCert.png";
import certificate from "@/assets/pdf/certificat-Qualiopi-Artiste-Formation.pdf"




export const Certification = memo(() => {
    const { classes } = useStyles();
    const { t } = useTranslation("Home");
    return <section className={classes.root}>
        <div className={classes.inner}>
            <div className={classes.badge}>
                <img className={classes.svg} src={badge} alt="badge qualiopi certification" />
            </div>
            <div className={classes.textWrapper}>
                <Text className={classes.paragraph} typo="paragraph">{t("certificationParagraph1")} <a className={classes.certificateLink} href={certificate} download="certificat-Qualiopi-Artiste-Formation.pdf">{t("certificationParagraphLink")}</a>  {t("certificationParagraph2")}</Text>
                <Text className={classes.title} typo="carouselItem">{t("certificationTitle")}</Text>
            </div>
        </div>

    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
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
        "certificateLink": {
            "color": theme.colors.white

        },
        "inner": {
            "display": "flex",
                    "boxShadow": "0px 2px 20px 2px rgba(0, 0, 0, 0.1)",
            ...(() => {
                const value = 90;
                return {
                    "paddingTop": value,
                    "paddingBottom": value
                }
            })(),
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
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
                    "backgroundImage": `url(${card})`,
                    "backgroundSize": "cover",
                    "backgroundRepeat": "no-repeat",
                    "border": "solid white 10px"
                }
            })()
        },
        "badge": {

            "marginBottom": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return 65;

                }
            })()
        },
        "svg": {
            "width": "100%",

        },
        "textWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return "center"
                }
            })(),
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    const value = 30;
                    return {
                        "paddingLeft": value,
                        "paddingRight": value
                    }
                }
            })()
        },
        "paragraph": {
            "marginBottom": 15,
            "color": theme.colors.white,
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
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
            "textAlign": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return "center";
                }
                return undefined;
            })()
        }

    })
})