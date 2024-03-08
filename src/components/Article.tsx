import { memo, useEffect } from "react";
import type { ReactNode } from "react";
import { tss, Text, breakpointValues } from "../theme";
import { LinkButton, type LinkButtonProps } from "./LinkButton";
import { motion } from "framer-motion";
import { Variant, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type ArticleProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    isCentered?: boolean;
    title?: ReactNode;
    smallSurtitle?: string;
    smallSubtitle?: string;
    hasSmallLine?: boolean;
    paragraph?: string;
    secondParagraph?: string;
    button?: Omit<LinkButtonProps, "classes" | "className">;
    isAnimated?: boolean;
};

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
        "y": 100,
        "opacity": 0
    },
    "visible": {
        "y": 0,
        "opacity": 1
    }
};
const smallTitleVariants: Record<string, Variant> = {
    "hidden": {
        "y": 40
    },
    "visible": {
        "y": 0
    }
};

const paragraphAndButtonVariants: Record<string, Variant> = {
    "hidden": {
        "y": 40,
        "opacity": 0
    },
    "visible": {
        "y": 0,
        "opacity": 1
    }
};


export const Article = memo((props: ArticleProps) => {

    const {
        button,
        className,
        hasSmallLine,
        isCentered,
        paragraph,
        secondParagraph,
        smallSubtitle,
        smallSurtitle,
        title,
        isAnimated = false
    } = props;
    const controls = useAnimation();
    const [ref, inView] = useInView({ "triggerOnce": true, "threshold": 0.7 })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }

    }, [controls, inView])

    const { classes, cx } = useStyles({
        "isCentered": isCentered ?? false,
        "hasSecondParagraph": secondParagraph !== undefined,
        "classesOverrides": props.classes
    });



    return <motion.div
        className={cx(classes.root, className)}
        ref={ref}
        {
        ...(() => {
            if (!isAnimated) {
                return;
            }
            return {
                "variants": containerVariants,
                "animate": controls,
                "initial": "hidden"
            }
        })()
        }
    >

        {
            smallSurtitle !== undefined &&
            <motion.div
                className={classes.smallSurtitleWrapper}
            >
                <motion.div
                    {
                    ...(() => {
                        if (!isAnimated) {
                            return undefined;
                        }
                        return {
                            "variants": smallTitleVariants,
                            "transition": {
                                "ease": "easeInOut",
                                "duration": 0.7,
                                "delay": 0.4
                            },
                        }
                    })()

                    }
                >
                    <Text className={classes.smallTitle} typo="sectionPageOrButton">{smallSurtitle}</Text>
                </motion.div>
            </motion.div>
        }

        {
            title !== undefined &&
            <div className={classes.titleWrapper}>
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
                                "duration": 0.7
                            },
                        }
                    })()
                    }
                >
                    {
                        (() => {
                            if (typeof title === "string") {
                                return <Text className={classes.title} typo="heading2">{title}</Text>;
                            };
                            return title;
                        })()

                    }

                </motion.div>

            </div>
        }
        {
            smallSubtitle !== undefined &&
            <div

                className={classes.smallSubtitleWrapper}
            >
                <motion.div

                    {
                    ...(() => {
                        if (!isAnimated) {
                            return undefined;
                        }
                        return {
                            "variants": smallTitleVariants,
                            "transition": {
                                "ease": "easeInOut",
                                "duration": 0.7,
                                "delay": 0.4
                            },
                        }
                    })()
                    }
                >
                    <Text className={classes.smallTitle} typo="sectionPageOrButton">{smallSubtitle}</Text>
                </motion.div>
            </div>
        }
        {
            hasSmallLine &&
            <div className={classes.smallLine}></div>
        }
        {
            (paragraph !== undefined || secondParagraph) &&
            <div className={classes.paragraphWrapper}>
                {
                    paragraph !== undefined &&
                    <motion.div
                        {
                        ...(() => {
                            if (!isAnimated) {
                                return undefined;
                            }
                            return {
                                "variants": paragraphAndButtonVariants,
                                "transition": {
                                    "ease": "easeInOut",
                                    "duration": 0.7,
                                    "delay": 0.7
                                },
                            }
                        })()
                        }
                    >
                        <Text className={cx(classes.paragraph, classes.firstParagraph)} typo="paragraph">{paragraph}</Text>
                    </motion.div>
                }
                {
                    secondParagraph !== undefined &&
                    <motion.div
                        {
                        ...(() => {
                            if (!isAnimated) {
                                return undefined;
                            }
                            return {
                                "variants": paragraphAndButtonVariants,
                                "transition": {
                                    "ease": "easeInOut",
                                    "duration": 0.7,
                                    "delay": 0.9
                                },
                            }
                        })()
                        }
                    >

                        <Text className={cx(classes.paragraph, classes.secondParagraph)} typo="paragraph">{secondParagraph}</Text>
                    </motion.div>
                }
            </div>
        }
        {
            button !== undefined &&
            <motion.div
                {
                ...(() => {
                    if (!isAnimated) {
                        return undefined;
                    }
                    return {
                        "variants": paragraphAndButtonVariants,
                        "transition": {
                            "ease": "easeInOut",
                            "duration": 0.7,
                            "delay": 1.1
                        },
                    }
                })()
                }

            >
                <LinkButton
                    className={classes.button}
                    {
                    ...button
                    }
                />

            </motion.div>
        }
    </motion.div>
})


const useStyles = tss.withParams<
    Required<Pick<ArticleProps, "isCentered">> &
    {
        hasSecondParagraph: boolean;
    }
>().create(({ isCentered, theme, hasSecondParagraph }) => ({
    "root": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": isCentered ? "center" : "flex-start",
        "justifyContent": "center"
    },
    "smallTitle": {
        "color": theme.colors.bloodOrangeVariant,
        "textTransform": "uppercase"
    },
    "title": {
        "textAlign": isCentered ? "center" : "left"
    },
    "titleWrapper": {
        "overflow": "hidden",
        "marginBottom": theme.spacing.textGap,
        "& > *": {
            "textAlign": isCentered ? "center" : "left"

        }

    },
    "smallLine": {
        "width": theme.spacing.textGap,
        "height": 2,
        "backgroundColor": theme.colors.bloodOrange,
        "marginBottom": theme.spacing.textGap
    },
    "paragraphWrapper": {
        "marginBottom": theme.spacing.textGap,
        ...(hasSecondParagraph ? {
            "display": "flex",
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "flexDirection": "column"

                    }
                }
                return {
                    "flexDirection": isCentered ? "column" : undefined,

                }
            })()
        } : {})
    },
    "paragraph": {
        "textAlign": isCentered ? "center" : "left",
        "color": theme.colors.darkGray,
        "flex": 1,
    },
    "firstParagraph": {
        ...(() => {
            if (theme.windowInnerWidth < breakpointValues.sm) {
                return {
                    "marginBottom": theme.spacing.textGap
                }
            }
            if (!hasSecondParagraph) {
                return {};
            }
            const value = theme.spacing.textGap
            if (isCentered) {
                return {
                    "marginBottom": value
                };
            };

            return {
                "marginRight": value
            };

        })()

    },
    "secondParagraph": {},
    "button": {},
    "smallSurtitleWrapper": {
        "overflow": "hidden",
        "marginBottom": theme.spacing.textGap,
    },
    "smallSubtitleWrapper": {
        "overflow": "hidden",
        "marginBottom": theme.spacing.textGap,
    }
}))