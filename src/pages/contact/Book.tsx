import { memo, useEffect } from "react"
import { tss, Text, breakpointValues } from "@/theme";
import { useTranslation } from "@/i18n";
import { LinkButton } from "@/components/LinkButton";
import { motion, useAnimation } from "framer-motion";
import type { Variant } from "framer-motion";
import { useInView } from "react-intersection-observer";


const titleVariants: Record<string, Variant> = {
    "hidden": {
        "y": "100%",
    },
    "visible": {
        "y": 0,
    }
};

const buttonVariants: Record<string, Variant> = {
    "hidden": {
        "y": 40,
        "opacity": 0
    },
    "visible": {
        "y": 0,
        "opacity": 1
    }
};


export const Book = memo(() => {

    const { t } = useTranslation("Contact")
    const { classes, theme } = useStyles();
    const controls = useAnimation();
    const [ref, inView] = useInView({ "triggerOnce": true, "threshold": 0.3 })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }

    }, [controls, inView])

    return <section ref={ref} className={classes.root}>
        <div style={{"overflow": "hidden", "marginBottom": 110}}>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={titleVariants}
                transition={{
                    "ease": "easeInOut",
                    "duration": 0.7
                }}
            >

                <Text style={{
                    "color": theme.colors.darkGray3
                }} typo="sectionPageOrButton">{t("or")}</Text>
            </motion.div>

        </div>

        {
            (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return <>
                        <Text style={{
                            "marginBottom": 60
                        }} typo="additionalTitle">{t("or")}</Text>
                        <Text className={classes.title} typo="heading5">{t("bookingTitle")}</Text>
                    </>
                }
                return <div style={{ "overflow": "hidden", "marginBottom": 80 }}>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={titleVariants}
                        transition={{
                            "ease": "easeInOut",
                            "duration": 0.7,
                            "delay": 0.4
                        }}
                    >
                        <Text className={classes.title} typo="heading2">{t("bookingTitle")}</Text>
                    </motion.div>
                </div>
            })()
        }


        <motion.div
            initial="hidden"
            variants={buttonVariants}
            animate={controls}
            transition={{
                "ease": "easeInOut",
                "duration": 0.7,
                "delay": 0.8
            }}
        >
            <LinkButton
                variant="outlined"
                href="https://outlook.office365.com/book/cesarreservation@artisteformation.com/"
                label={t("bookingButtonLabel")}
            />

        </motion.div>

    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    const value = 80;
                    const paddingRightLeft = 25
                    return {
                        "marginTop": value,
                        "marginBottom": value,
                        "paddingLeft": paddingRightLeft,
                        "paddingRight": paddingRightLeft

                    }
                }
                return {
                    "marginTop": 150,
                    "marginBottom": 200,

                }
            })()
        },
        "title": {
            "textAlign": "center",
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "width": 300,
                        "marginBottom": 45

                    }
                }
                return {
                    "width": 650,

                }
            })()

        }
    })
})