import { memo } from "react";
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
import { motion } from "framer-motion";




export const Hero = memo(() => {
    const { classes, theme } = useStyles();
    const { t } = useTranslation("Home");
    return <div className={classes.root}>
        <div 
            className={classes.illustrationWrapper}
        >
            {
                theme.windowInnerWidth >= 600 &&
                <>
                    <motion.div
                        initial={{
                            "opacity": 0, "x": -100, "y": -100
                        }}
                        animate={{
                            "opacity": 1, "x": 0, "y": 0
                        }}
                        transition={{
                            "ease": "easeOut",
                            "duration": 1,
                            "delay": 3
                        }}

                    >
                        <picture>

                            <source srcSet={webpFresque1} type="image/webp" />
                            <source srcSet={jpgFresque1} type="image/jpeg" />
                            <img className={classes.image} src={webpFresque1} alt="fresque de la banniere" />
                        </picture>

                    </motion.div>
                    <motion.div
                        initial={{
                            "opacity": 0, "x": 100, "y": -100
                        }}
                        animate={{
                            "opacity": 1, "x": 0, "y": 0
                        }}
                        transition={{
                            "ease": "easeOut",
                            "duration": 1,
                            "delay": 3.1
                        }}
                    >
                        <picture>

                            <source srcSet={webpFresque3} type="image/webp" />
                            <source srcSet={jpgFresque3} type="image/jpeg" />
                            <img className={classes.image} src={webpFresque3} alt="fresque de la banniere" />
                        </picture>

                    </motion.div>
                    <motion.div

                        initial={{
                            "opacity": 0, "x": -100, "y": 100
                        }}
                        animate={{
                            "opacity": 1, "x": 0, "y": 0
                        }}
                        transition={{
                            "ease": "easeOut",
                            "duration": 1,
                            "delay": 3.2
                        }}
                    >
                        <picture>

                            <source srcSet={webpFresque2} type="image/webp" />
                            <source srcSet={jpgFresque2} type="image/jpeg" />
                            <img className={classes.image} src={webpFresque2} alt="fresque de la banniere" />
                        </picture>

                    </motion.div>
                    <motion.div
                        initial={{
                            "opacity": 0, "x": 100, "y": 100
                        }}
                        animate={{
                            "opacity": 1, "x": 0, "y": 0
                        }}
                        transition={{
                            "ease": "easeOut",
                            "duration": 1,
                            "delay": 3.3
                        }}
                    >
                        <picture>

                            <source srcSet={webpFresque4} type="image/webp" />
                            <source srcSet={jpgFresque4} type="image/jpeg" />
                            <img className={classes.image} src={webpFresque4} alt="fresque de la banniere" />
                        </picture>

                    </motion.div>
                </>
            }
        </div>
        <div className={classes.titleWrapper}>
            <Logo width={(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return 95;
                }
                return 180;
            })()} logoUrl={siteLogo} />
            <motion.div
                initial={{"opacity": 0}}
                animate={{"opacity": 1}}
                transition={{
                    "ease": "easeOut",
                    "delay": 3.4,
                    "duration": 1
                }}
            >
                <Text className={classes.title} typo="siteTitle">{t("title")}</Text>
            </motion.div>
            {
                theme.windowInnerWidth < breakpointValues.sm &&
                <picture>
                    <source srcSet={webpFresque3} type="image/webp" />
                    <source srcSet={jpgFresque3} type="image/jpeg" />
                    <img className={classes.image} src={webpFresque3} alt="fresque de la banniere" />
                </picture>
            }
            {
                theme.windowInnerWidth >= 600 &&
                <motion.div 
                    className={classes.divider}
                    initial={{
                        "width": 0,
                    }}
                    animate={{
                        "width": 550
                    }}
                    transition={{
                        "delay": 3.5,
                        "ease": "easeInOut",
                        "duration": 1
                    }}
                >
                </motion.div>
            }
            <motion.div
                initial={{"opacity": 0}}
                animate={{"opacity": 1}}
                transition={{
                    "ease": "easeOut",
                    "delay": 3.7,
                    "duration": 1
                }}
            >
                <Text className={classes.subtitle} typo="heading4">{t("subtitle")}</Text>
            </motion.div>
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