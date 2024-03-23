import { memo, useState, useEffect } from "react";
import { biography } from "@/user/biography";
import { loadWebpImage } from "@/tools/loadWebpImage";
import { Text, breakpointValues, tss } from "@/theme";
import { DropDown } from "@/components/DropDown";
import { PictureAnimator } from "@/components/PictureAnimator";
import { motion, useAnimation } from "framer-motion";
import type { Variant } from "framer-motion";
import { useInView } from "react-intersection-observer";


const titleVariants: Record<string, Variant> = {
    "hidden": {
        "y": "100%"
    },
    "visible": {
        "y": 0
    },

}
const paragraphVariants: Record<string, Variant> = {
    "hidden": {
        "y": 40,
        "opacity": 0
    },
    "visible": {
        "y": 0,
        "opacity": 1
    }
}


const bioImageName = biography.imageUrl.match(/([^\/]+)(?=\.\w+$)/)?.[0]


export const Bio = memo(() => {
    const [webpImage, setWebpImage] = useState<string | undefined>();

    const controls = useAnimation();
    const [ref, inView] = useInView({ "triggerOnce": true, "threshold": 0.5 })

    useEffect(() => {
        if (!inView) {
            return;
        }
        controls.start("visible")
    }, [controls, inView])

    useEffect(() => {
        if (bioImageName === undefined) {
            return;
        }
        loadWebpImage("/www.artisteformation.com/src/assets/webp/a-propos/", bioImageName)
            .then(loadedImages => {
                setWebpImage(loadedImages);
            })


    }, [])

    const { classes, theme, cx } = useStyles();


    return <div ref={ref} className={classes.root}>
        <div className={classes.titleWrapper}>
            <div className={classes.titleInnerWrapper}>
                <div
                    style={{
                        "overflow": "hidden",
                        "marginBottom": 60,
                    }}
                >
                    <motion.div
                        variants={titleVariants}
                        animate={controls}
                        initial="hidden"
                        transition={{
                            "ease": "easeInOut",
                            "duration": 0.7,
                            "delay": 0.4
                        }}

                    >
                        <Text className={classes.surtitle} typo="sectionPageOrButton">{biography.fr.surtitle}</Text>
                    </motion.div>
                </div>
                <div
                    style={{
                        "overflow": "hidden",
                        "marginBottom": 60,
                    }}
                >
                    <motion.div
                        variants={titleVariants}
                        animate={controls}
                        initial="hidden"
                        transition={{
                            "ease": "easeInOut",
                            "duration": 0.7,
                        }}
                    >
                        <Text typo="heading2">{biography.fr.title}</Text>
                    </motion.div>
                </div>
            </div>
        </div>
        <div className={classes.inner}>
            <div className={classes.firstColumn}>

                <div className={classes.imageWrapper}>
                    {
                        (() => {
                            if (theme.windowInnerWidth < breakpointValues.sm) {
                                return <picture>
                                    <source srcSet={webpImage} type="image/webp" />
                                    <source srcSet={biography.imageUrl} type="image/jpeg" />
                                    <img className={classes.image} src={webpImage} alt="author portrait" />
                                </picture>
                            }
                            return <PictureAnimator
                                src={webpImage ?? biography.imageUrl}
                                sources={[
                                    {
                                        "srcSet": webpImage ?? biography.imageUrl,
                                        "type": webpImage !== undefined ? "image/webp" : "image/jpeg"
                                    },
                                    {
                                        "srcSet": biography.imageUrl,
                                        "type": "image/jpeg"
                                    }
                                ]}
                                alt="Cesar portrait"
                            />
                        })()
                    }

                </div>
                {
                    (() => {
                        if (theme.windowInnerWidth < breakpointValues.sm) {
                            return biography.mobileDeviceTabs.map(({ fr }, index) => <DropDown
                                tabName={fr.title}
                                key={index}
                                tabContent={fr.paragraphs.map((paragraph, index) => <Text
                                    key={index}
                                    typo="paragraph"
                                    style={{
                                        "color": theme.colors.darkGray,
                                        "marginBottom": (() => {
                                            if (fr.paragraphs.length < 2 || index >= fr.paragraphs.length - 1) {
                                                return undefined;
                                            }
                                            return 20;
                                        })()
                                    }}
                                >
                                    {paragraph}
                                </Text>)}
                            />)
                        }

                        return <>
                            <motion.div
                                variants={paragraphVariants}
                                animate={controls}
                                initial="hidden"
                                transition={{
                                    "ease": "easeInOut",
                                    "duration": 0.7,
                                    "delay": 0.8
                                }}
                                className={classes.paragraphWrapper}
                            >
                                <Text className={classes.cap} typo="heading2">{biography.paragraphs[0].fr.slice(0, 2)}</Text>
                                <Text className={classes.text} typo="paragraph">{biography.paragraphs[0].fr.slice(2)}</Text>
                            </motion.div>
                            <div className={classes.smallDivider}></div>
                        </>
                    })()
                }

            </div>
            {
                (() => {
                    if (theme.windowInnerWidth < breakpointValues.sm) {
                        return undefined;
                    }
                    return <div className={classes.secondColumn}>
                        {
                            biography.paragraphs.map((paragraph, index) => {
                                if (index === 0) {
                                    return undefined;
                                }
                                return <motion.div
                                    key={index}
                                    variants={paragraphVariants}
                                    animate={controls}
                                    initial="hidden"
                                    transition={{
                                        "ease": "easeInOut",
                                        "duration": 0.7,
                                        "delay": 0.8 + 0.4 * index
                                    }}
                                >
                                    <Text

                                        className={cx(classes.paragraph, classes.text)}
                                        typo="paragraph"
                                    >
                                        {paragraph.fr}
                                    </Text>
                                </motion.div>
                            })
                        }
                    </div>
                })()
            }

        </div>

    </div>
});



const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    const value = 25;

                    return {
                        "paddingRight": value,
                        "paddingLeft": value,
                        "marginTop": 70
                    }
                }
                const value = 210;
                return {
                    "paddingTop": value,
                    "paddingBottom": value
                }
            })()

        },
        "inner": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {}
                }
                return {
                    "display": "grid",
                    "gridTemplateColumns": "repeat(2, 450px)",
                    "gap": 50,
                    "justifyContent": "center",

                }
            })()

        },
        "paragraphWrapper": {

        },
        "cap": {
            "float": "left",
            "marginRight": 10,
            "lineHeight": "1em",
        },
        "text": {
            "color": theme.colors.darkGray
        },
        "firstColumn": {
            "display": "grid",
            "gap": 50

        },
        "titleWrapper": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {}
                }
                return {
                    "display": "grid",
                    "gridTemplateColumns": "repeat(2, 450px)",
                    "gap": 55,
                    "justifyContent": "center",

                }
            })()
        },
        "titleInnerWrapper": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "center"
                    }
                }
            })()

        },
        "pictureAndParagraph": {},
        "image": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "width": "100%",
                        "height": "100%",
                        "objectFit": "cover"

                    }
                }
                return {
                    "width": 450,
                }
            })()
        },
        "smallDivider": {
            "width": 40,
            "height": 0,
            "borderTop": `solid ${theme.colors.indigo} 3px`,
            "position": "relative",
            "top": -30
        },
        "secondColumn": {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "flex-start"
        },
        "imageWrapper": {
        },
        "surtitle": {
            "color": theme.colors.bloodOrange,
        },
        "paragraph": {
            "marginBottom": 40

        }
    })
})