import { memo, useRef } from "react";
import { tss, Text } from "@/theme";
import { useTranslation } from "@/i18n";
import jpgFresque1 from "@/assets/jpg/home/fresque-home/fresque-home-01.jpeg";
import jpgFresque2 from "@/assets/jpg/home/fresque-home/fresque-home-02.jpeg";
import jpgFresque3 from "@/assets/jpg/home/fresque-home/fresque-home-03.jpeg";
import jpgFresque4 from "@/assets/jpg/home/fresque-home/fresque-home-04.jpeg";
import webpFresque1 from "@/assets/webp/home/fresque-home/fresque-home-01.webp";
import webpFresque2 from "@/assets/webp/home/fresque-home/fresque-home-02.webp";
import webpFresque3 from "@/assets/webp/home/fresque-home/fresque-home-03.webp";
import webpFresque4 from "@/assets/webp/home/fresque-home/fresque-home-04.webp";
import siteLogo from "@/assets/svg/logo.svg";
import { Logo } from "@/components/Logo";
import { breakpointValues } from "@/theme";




export const Hero = memo(() => {
    const { classes, theme } = useStyles();
    const { t } = useTranslation("Home");
    const fresqueJpg = useRef([jpgFresque1, jpgFresque3, jpgFresque2, jpgFresque4]);
    const fresqueWebp = useRef([webpFresque1, webpFresque3, webpFresque2, webpFresque4]);
    return <div className={classes.root}>
        <div className={classes.illustrationWrapper}>
            {
                theme.windowInnerWidth >= 600 &&
                fresqueWebp.current.map((webp, index) => <picture key={index}>
                    <source srcSet={webp} type="image/webp" />
                    <source srcSet={fresqueJpg.current[index]} type="image/jpeg" />
                    <img className={classes.image} src={webp} alt="fresque de la banniere" />
                </picture>)
            }
        </div>
        <div className={classes.titleWrapper}>
            <Logo width={(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return 95;
                }
                return 180;
            })()} logoUrl={siteLogo} />
            <Text className={classes.title} typo="siteTitle">{t("title")}</Text>
            {
                theme.windowInnerWidth < breakpointValues.sm &&
                <picture>
                    <source srcSet={fresqueWebp.current[1]} type="image/webp" />
                    <source srcSet={fresqueJpg.current[1]} type="image/jpeg" />
                    <img className={classes.image} src={fresqueWebp.current[1]} alt="fresque de la banniere" />
                </picture>
            }
            {
                theme.windowInnerWidth >= 600 &&
                <div className={classes.divider}></div>
            }
            <Text className={classes.subtitle} typo="heading4">{t("subtitle")}</Text>
            {
                theme.windowInnerWidth < breakpointValues.sm &&
                <div className={classes.verticalDivider}></div>
            }

        </div>
    </div>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "flex",
            "minHeight": 700,
            "boxSizing": "border-box",
            "marginBottom": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return 90;
                }
                return 265;
            })(),
            "flexDirection": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return "column";
                }
                return undefined;
            })()
        },
        "illustrationWrapper": {
            "width": "50%",
            "display": "grid",
            "gridTemplateColumns": "repeat(2, 1fr)",
            "padding": 30,
            "boxSizing": "border-box"

        },
        "image": {
            "width": "100%",
            "objectFit": "cover",
            "height": "100%"
        },
        "titleWrapper": {
            "display": "grid",
            "gridTemplateColumn": "1fr",
            "gap": theme.spacing.textGap,
            "alignContent": "center",
            "justifyItems": "center",
            "minHeight": "100%",
            ...(() => {
                const value = 25;
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "paddingLeft": value,
                        "paddingRight": value,
                    };
                }
                return undefined;

            })(),
            "width": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return undefined;
                }
                return "50%"
            })(),
            "position": "relative",
            "left": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return undefined;
                }
                return -15;
            })()

        },
        "title": {
            "textAlign": "center",
            "maxWidth": 600

        },
        "subtitle": {
            "textAlign": "center",
            "maxWidth": 450

        },
        "divider": {
            "width": 550,
            "height": 0,
            "borderTop": `solid ${theme.colors.bloodOrange} 2px`

        },
        "verticalDivider": {
            "width": 0,
            "height": 90,
            "border": `solid ${theme.colors.bloodOrange} 1px`

        }
    })
})