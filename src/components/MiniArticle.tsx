import { memo, useEffect } from "react";
import { tss, Text } from "@/theme";
import { motion } from "framer-motion";
import { Variant, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const containerVariants: Record<string, Variant> = {
    "hidden": {
        "opacity": 1
    },
    "visible": {
        "opacity": 1,
    },

}

const titleVariants: Record<string, Variant> = {
    "hidden": {
        "y": "100%",
    },
    "visible": {
        "y": 0,
    }
};

const paragraphVariants: Record<string, Variant> = {
    "hidden": {
        "y": 40,
        "opacity": 0
    },
    "visible": {
        "y": 0,
        "opacity": 1
    }
};
export type MiniArticleProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    numberTitle?: string;
    subtitle?: string;
    paragraph?: string;
    titleColor?: string;
    isAnimated?: boolean;
    animationDelay?: number;
}

export const MiniArticle = memo((props: MiniArticleProps) => {

    const { 
        numberTitle, 
        paragraph, 
        subtitle, 
        titleColor, 
        className, 
        isAnimated = false, 
        animationDelay = 0
    } = props;

    const { classes, cx } = useStyles({
        "classesOverrides": props.classes,
        titleColor
    });

    const controls = useAnimation();
    const [ref, inView] = useInView({ "triggerOnce": true, "threshold": 0.3 })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }

    }, [controls, inView])
    return <motion.div 
        ref={ref} 
        className={cx(classes.root, className)}
        {
        ...(() => {
            if (!isAnimated) {
                return;
            }
            return {
                "variants": containerVariants,
                "animate": controls,
                "initial": "hidden",
            }
        })()
        }
    >
        <div className={classes.titleWrapper}>
            <div
                style={{
                    "overflow": "hidden"
                }}
            >
                <motion.div
                    {
                    ...(() => {
                        if (!isAnimated) {
                            return undefined;
                        }
                        return {
                            "variants": titleVariants,
                            "transition": {
                                "ease": "easeInOut",
                                "duration": 0.7,
                                "delay": animationDelay
                            },
                        }
                    })()

                    }
                >
                    <Text className={classes.numberTitle} typo="heading1">{numberTitle}</Text>
                </motion.div>
            </div>
            <div style={{ "overflow": "hidden" }}>
                <motion.div
                    {
                    ...(() => {
                        if (!isAnimated) {
                            return undefined;
                        }
                        return {
                            "variants": titleVariants,
                            "transition": {
                                "ease": "easeInOut",
                                "duration": 0.7,
                                "delay": animationDelay + 0.4
                            },
                        }
                    })()

                    }
                >
                    <Text className={classes.subtitle} typo="additionalTitle">{subtitle}</Text>
                </motion.div>
            </div>
        </div>

        <motion.div

                    {
                    ...(() => {
                        if (!isAnimated) {
                            return undefined;
                        }
                        return {
                            "variants": paragraphVariants,
                            "transition": {
                                "ease": "easeInOut",
                                "duration": 0.7,
                                "delay": animationDelay + 0.8
                            },
                        }
                    })()

                    }
        >
            <Text className={classes.paragraph} typo="paragraph">{paragraph}</Text>
        </motion.div>

    </motion.div>
});

const useStyles = tss.withParams<Pick<MiniArticleProps, "titleColor">>().create(
    ({ titleColor, theme }) => {
        return ({
            "root": {
                "minWidth": 230,
                "display": "flex",
                "flexDirection": "column",
                "alignItems": "center",
                "justifyContent": "center",

            },
            "titleWrapper": {
                "marginBottom": 45

            },
            "paragraph": {
                "textAlign": "center",
                "color": theme.colors.darkGray3

            },
            "numberTitle": {
                "color": titleColor,
                "textAlign": "center",
            },
            "subtitle": {
                "textAlign": "center",
                "color": theme.colors.darkGray3
            }
        })
    })