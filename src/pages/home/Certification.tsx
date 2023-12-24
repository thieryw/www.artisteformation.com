import { memo } from "react";
import { tss, Text } from "@/theme";
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
                <ReactSVG className={classes.svg} src={badge} />
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
            "paddingLeft": theme.spacing.nonCenteredSectionSide,
            "paddingRight": theme.spacing.nonCenteredSectionSide,
            "marginBottom": 350
        },
        "inner": {
            "background": `url(${card})`,
            "display": "flex",
            "justifyContent": "space-between",
            "alignItems": "center",
            "paddingLeft": 180,
            "paddingRight": theme.spacing.sectionTopBottomPadding,
            ...(()=>{
                const value = 90;
                return {
                    "paddingTop": value,
                    "paddingBottom": value
                }
            })()
        },
        "badge": {
        },
        "svg": {

        },
        "textWrapper": {},
        "paragraph": {
            "marginBottom": 15,
            "color": theme.colors.white,
        },
        "title": {
            "color": theme.colors.white
        }

    })
})