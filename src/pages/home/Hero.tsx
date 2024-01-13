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




export const Hero = memo(() => {
    const { classes } = useStyles();
    const { t } = useTranslation("Home");
    const fresqueJpg = useRef([jpgFresque1, jpgFresque3, jpgFresque2, jpgFresque4]);
    const fresqueWebp = useRef([webpFresque1, webpFresque3, webpFresque2, webpFresque4]);
    return <div className={classes.root}>
        <div className={classes.illustrationWrapper}>
            {
                fresqueWebp.current.map((webp, index) => <picture key={index}>
                    <source srcSet={webp} type="image/webp" />
                    <source srcSet={fresqueJpg.current[index]} type="image/jpeg" />
                    <img className={classes.image} src={webp} alt="fresque de la banniere" />
                </picture>)
            }
        </div>
        <div className={classes.titleWrapper}>
            <Logo width={180} logoUrl={siteLogo} />
            <Text className={classes.title} typo="siteTitle">{t("title")}</Text>
            <div className={classes.divider}></div>
            <Text className={classes.subtitle} typo="heading4">{t("subtitle")}</Text>

        </div>
    </div>
})

const useStyles = tss.create(({theme}) => {
    return ({
        "root": {
            "display": "flex",
            "minHeight": 700,
            "boxSizing": "border-box",
            "marginBottom": 266
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
            "width": "50%",
            "position": "relative",
            "left": -15

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

        }
    })
})