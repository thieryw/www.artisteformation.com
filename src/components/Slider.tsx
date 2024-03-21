import { memo, useState, useEffect } from "react";
import { Text, tss } from "../theme";
import { useCallbackFactory } from "powerhooks/useCallbackFactory";
import { useConstCallback } from "powerhooks/useConstCallback";
import { Article } from "./Article";
import type { ArticleProps } from "./Article";
import { LinkButton } from "./LinkButton";
import { animate } from "@/tools/animate";

namespace Slider {
    export type Slide = Pick<ArticleProps, "smallSurtitle" | "title" | "paragraph" | "secondParagraph" | "button">
    export type Numbered = {
        variant: "numbered",
        className?: string;
        classes?: Partial<ReturnType<typeof useStyles>["classes"]>
        slides: (Slide & {
            leftIllustrationUrl?: string;
            illustrationSources?: {srcSet: string; type: string}[];
        })[];
    };
    export type Named = {
        variant: "named",
        className?: string;
        classes?: Partial<ReturnType<typeof useStyles>["classes"]>
        slides: (Slide & {
            name: string;
            imageUrl?: string;
            imageSources?: {srcSet: string; type: string}[];
        })[];
    }

}
export type SliderProps = Slider.Numbered | Slider.Named;



export const Slider = memo((props: SliderProps) => {
    const { slides, variant, className } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState<number | null>(null)
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {

        (async () => {
            if (isTransitioning) {
                return;
            }
            setIsTransitioning(true);
            await new Promise<void>(resolve => setTimeout(resolve, 1500));
            setIsTransitioning(false);

        })()

    }, [currentIndex])

    const handleNavigation = useCallbackFactory((
        [index]: [number]
    ) => {
        if (isTransitioning || index === currentIndex) {
            return;
        }
        setPreviousIndex(currentIndex);
        setCurrentIndex(index);

    });

    const calculateVector = useConstCallback((
        index: number
    ): Parameters<typeof Slide>["0"]["vector"] => {
        if (previousIndex === null) {
            if (currentIndex === index) {
                return "staticVisible";
            };
            return "staticHidden";
        }
        if (currentIndex === index && currentIndex < previousIndex) {
            return "comingFromTop";
        }
        if (currentIndex === index && currentIndex > previousIndex) {
            return "comingFromBottom";
        }
        if (previousIndex === index && currentIndex > previousIndex) {
            return "leavingToTop";
        }
        if (previousIndex !== index && currentIndex !== index) {
            return "staticHidden";
        }
        return "leavingToBottom";

    })


    const { classes, theme, cx } = useStyles({
        variant,
        "hasImage": variant === "named" && slides[0].imageUrl !== undefined,
        "classesOverrides": props.classes,
    });

    return <div className={cx(classes.root, className)}>

        <div className={classes.inner}>
            {

                (() => {
                    if (variant !== "numbered") {
                        return undefined;
                    }
                    return <div className={classes.illustrations}>{
                        slides.map(({ leftIllustrationUrl, illustrationSources }, index) => <Illustration
                            variant="numbered"
                            illustrationUrl={leftIllustrationUrl ?? ""}
                            vector={calculateVector(index)}
                            key={index}
                            sources={illustrationSources}
                        />)
                    }
                    </div>

                })()
            }
            {
                (() => {
                    if (variant !== "named") {
                        return undefined;
                    }

                    return <div className={classes.slideLinkWrapper}>
                        {
                            slides.map(({ name }, index) => <button key={name} onClick={handleNavigation(index)} style={{
                                "marginBottom": index !== slides.length - 1 ? 31 : undefined
                            }} className={classes.slideLink}>
                                <Text style={{
                                    "color": index === currentIndex ? theme.colors.bloodOrange : undefined
                                }} className={classes.slideLinkText} typo="carouselItem">{name}</Text>
                            </button>)
                        }

                    </div>

                })()
            }
            {
                (() => {
                    if (variant !== "named") {
                        return undefined;
                    }

                    return <div className={classes.illustrations}>{
                        slides.map(({ imageUrl, imageSources }, index) => imageUrl !== undefined ? <Illustration
                            variant="named"
                            illustrationUrl={imageUrl ?? ""}
                            vector={calculateVector(index)}
                            key={index}
                            sources={imageSources}
                        /> : undefined)
                    }
                    </div>
                })()
            }
            <div className={classes.slidesWrapper}>
                <div className={classes.slides}>
                    {
                        slides.map((slide, index) =>
                            <Slide
                                slide={slide}
                                key={index}
                                isActive={currentIndex === index}
                                vector={calculateVector(index)}
                                className={classes.slide}
                                classes={{
                                    "article": classes.slideArticle,
                                    "button": classes.slideButton,
                                    "firstParagraph": classes.slideFirstParagraph,
                                    "secondParagraph": classes.slideSecondParagraph,
                                    "paragraphWrapper": classes.slideParagraphWrapper,
                                    "paragraph": classes.slideParagraph,
                                    "smallSurtitleWrapper": classes.slideSmallSurtitleWrapper,
                                    "title": classes.slideTitle,
                                    "titleWrapper": classes.slideTitleWrapper
                                }}
                            />

                        )
                    }

                </div>
                {
                    variant === "numbered" &&
                    <Text className={classes.slideNumber} typo="carousel">0{currentIndex + 1}.</Text>
                }

            </div>

            {
                variant === "numbered" &&
                <div className={classes.numberedButtons}>
                    {slides.map((_slide, index) => <div className={classes.numberedButtonWrapper} key={index}><button onClick={handleNavigation(index)} style={{
                        ...(() => {
                            if (index !== currentIndex) {
                                return {
                                    "border": `solid 1px ${theme.colors.darkGray3}`
                                };
                            };

                            return {
                                "backgroundColor": theme.colors.bloodOrange,
                                "border": "none"
                            }
                        })()
                    }} className={classes.numberedButton}>
                        <Text className={classes.numberedButtonText} style={{
                            "color": index === currentIndex ? theme.colors.white : undefined

                        }} typo="additionalTitle">0{index + 1}.</Text>
                    </button>
                        {
                            index !== slides.length - 1 &&
                            <div className={classes.numberedButtonSeparator}></div>
                        }
                    </div>)}
                </div>
            }

        </div>
    </div>
})

const useStyles = tss
    .withParams<{ variant: SliderProps["variant"]; hasImage: boolean; }>()
    .create(({ theme, variant, hasImage }) => ({
        "root": {

        },
        "slideLinkWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "marginRight": 95,
            "alignSelf": "flex-start",
            "alignItems": "flex-start",
            "position": "relative",
            "top": hasImage ? 150 : 60
        },
        "imageWrapper": {},
        "slideLink": {
            "border": "none",
            "textAlign": "left",
            "backgroundColor": "transparent",
            "cursor": "pointer",
        },
        "slideLinkText": {
            "transition": "color 500ms",
            ":hover": {
                "color": theme.colors.bloodOrange
            }
        },
        "numberedButtons": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center"

        },
        "numberedButton": {
            "background": "none",
            "width": 96,
            "height": 96,
            "borderRadius": "100%",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "transition": "background 500ms",
            "cursor": "pointer"

        },
        "numberedButtonWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center"
        },
        "numberedButtonText": {
            "transition": "color 500ms"
        },
        "numberedButtonSeparator": {
            "width": 1,
            "height": 174,
            "backgroundColor": theme.colors.darkGray3

        },
        "inner": {
            "display": "flex",
            "position": "relative",
            "alignItems": variant === "numbered" ? "center" : undefined

        },
        "leftImageWrapper": {
            "marginRight": theme.spacing.nonCenteredSectionSide

        },
        "slideNumber": {
            "position": "absolute",
            "bottom": 0,
            "right": 0,
            "lineHeight": "0.8em"

        },
        "slides": {
            "overflowX": "hidden",
            "display": "grid",
            "alignItems": "start",

        },
        "slidesWrapper": {
            "position": "relative",
            "width": 780,
            "marginRight": variant === "numbered" ? 120 : undefined

        },
        "illustrations": {
            "display": "grid",
            "alignItems": "center",
            "marginRight": variant === "numbered" ? theme.spacing.nonCenteredSectionSide : theme.spacing.pageTitleGap,
            "marginTop": variant === "named" ? theme.spacing.sectionTitleGap : undefined

        },
        "slide": {},
        "slideArticle": {},
        "slideButton": {},
        "slideFirstParagraph": {},
        "slideSecondParagraph": {},
        "slideParagraphWrapper": {},
        "slideParagraph": {},
        "slideSmallSurtitleWrapper": {},
        "slideTitle": {},
        "slideTitleWrapper": {}
    }))




const { Slide } = (() => {

    type SlideProps = {
        className?: string;
        slide: SliderProps["slides"][number];
        isActive: boolean;
        vector: "comingFromTop" | "comingFromBottom" | "leavingToTop" | "leavingToBottom" | "staticHidden" | "staticVisible";
        classes?: Partial<ReturnType<typeof useStyles>["classes"]>

    };


    const Slide = memo((props: SlideProps) => {

        const {
            slide: { button, title, ...rest },
            vector,
            isActive,
        } = props;


        const { classes, cx } = useStyles({
            vector,
            isActive,
            "hasOnlyOneParagraph": (
                rest.paragraph === undefined ||
                rest.secondParagraph === undefined
            ) &&
                !(rest.paragraph === undefined &&
                    rest.paragraph === undefined),
            "classesOverrides": props.classes
        });
        return <div className={classes.root}>
            <Article
                {
                ...rest
                }
                title={<Text className={classes.title} typo="heading2">{title}</Text>}
                className={classes.article}

                classes={{
                    "titleWrapper": classes.titleWrapper,
                    "smallSurtitleWrapper": classes.smallSurtitleWrapper,
                    "smallTitle": classes.smallTitle,
                    "paragraphWrapper": classes.paragraphWrapper,
                    "firstParagraph": cx(classes.paragraph, classes.firstParagraph),
                    "secondParagraph": cx(classes.paragraph, classes.secondParagraph),
                    "root": cx(classes.article)

                }}
            />
            {
                button !== undefined &&
                <LinkButton
                    className={classes.button}
                    {
                    ...button
                    }
                />
            }
        </div>

    });

    const useStyles = tss
        .withParams<Pick<SlideProps, "vector" | "isActive"> & { hasOnlyOneParagraph: boolean }>()
        .create(({
            vector,
            isActive,
            hasOnlyOneParagraph
        }) => {


            return ({
                "root": {
                    "display": "flex",
                    "flexDirection": "column",
                    "alignItems": "flex-start",

                    "gridColumn": 1,
                    "gridRow": 1,
                    "width": hasOnlyOneParagraph ? 326 : undefined


                },
                "article": {

                },
                "title": {
                    "position": "relative",
                    ...animate({
                        vector,
                        "comingInDelay": 500
                    })

                },
                "titleWrapper": {
                    "overflow": "hidden",
                    "position": "relative",
                },
                "smallSurtitleWrapper": {
                    "overflow": "hidden",
                    "opacity": isActive ? 1 : 0,
                    "pointerEvents": !isActive ? "none" : undefined,
                    "transition": "opacity 500ms",
                    "transitionDelay": !isActive ? undefined : "1200ms",
                },
                "smallTitle": {
                    "marginBottom": hasOnlyOneParagraph ? undefined : 22
                },
                "paragraphWrapper": {
                },
                "button": {
                    "position": "relative",
                    "zIndex": isActive ? 2 : undefined,
                    "opacity": isActive ? 1 : 0,
                    "pointerEvents": !isActive ? "none" : undefined,
                    "transition": "opacity 500ms",
                    "transitionDelay": !isActive ? undefined : "700ms",

                },
                "paragraph": {
                    "opacity": isActive ? 1 : 0,
                    "transition": "opacity 1000ms",
                },
                "firstParagraph": {
                    "transitionDelay": !isActive ? undefined : "800ms",
                    "width": 355
                },
                "secondParagraph": {
                    "transitionDelay": !isActive ? undefined : "1300ms",
                    "width": 355
                }

            })

        })

    return { Slide }
})();

const { Illustration } = (() => {

    type IllustrationProps = {
        illustrationUrl: string;
        vector: Parameters<typeof Slide>["0"]["vector"];
        variant: SliderProps["variant"];
        sources?: {srcSet: string; type: string}[]

    };


    const Illustration = memo((props: IllustrationProps) => {

        const { illustrationUrl, vector, variant, sources } = props;


        const { classes } = useStyles({ vector, variant });
        return <div className={classes.root}>
            <div className={classes.imageWrapper}>
                <picture>
                    {
                        sources !== undefined &&
                        sources.map(({srcSet, type}, index) => <source key={index} srcSet={srcSet} type={type} />)
                    }

                    <img className={classes.image} src={illustrationUrl} alt="carousel illustration" />

                </picture>
            </div>
        </div>

    });

    const useStyles = tss
        .withParams<Pick<IllustrationProps, "vector" | "variant">>()
        .create(({ vector, variant, theme }) => {


            return ({
                "root": {
                    "gridColumn": 1,
                    "gridRow": 1,
                    "overflow": "hidden",
                    "position": "relative",
                    "maxWidth": variant === "numbered" ? 350 : 557,
                    "width": variant === "numbered" ? 350 : 557,
                    "border": variant === "named" ? `solid ${theme.colors.white} 10px` : undefined,
                    "boxShadow": variant === "named" ? "0px 2px 10px 2px rgba(0, 0, 0, 0.03)" : undefined
                },
                "imageWrapper": {
                    "position": "relative",
                    "width": "100%",

                    ...animate({
                        vector,
                    })
                },
                "image": {
                    "width": "100%",
                    "objectFit": "cover",
                    "display": "block"

                }

            })

        })

    return { Illustration }
})();
