import { memo, useState, useEffect } from "react";
import { Text, tss } from "../theme";
import { useCallbackFactory } from "powerhooks/useCallbackFactory";
import { useConstCallback } from "powerhooks/useConstCallback";
import { Article } from "./Article";
import type { ArticleProps } from "./Article";
import { LinkButton } from "./LinkButton";
import { keyframes } from "tss-react";
import { CSSObject } from "@emotion/react";

namespace Slider {
    export type Slide = Pick<ArticleProps, "smallSurtitle" | "title" | "paragraph" | "secondParagraph" | "button">
    export type Numbered = {
        variant: "numbered",
        slides: (Slide & {
            leftIllustrationUrl?: string;
        })[];
    };
    export type Named = {
        variant: "named",
        slides: (Slide & {
            name: string;
            imageUrl?: string;
        })[];
    }

}
export type SliderProps = Slider.Numbered | Slider.Named;



export const Slider = memo((props: SliderProps) => {
    const { slides, variant } = props;
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


    const { classes, theme } = useStyles({
        currentIndex
    });

    return <div>

        <div className={classes.inner}>
            {

                (() => {
                    if (variant !== "numbered") {
                        return undefined;
                    }
                    return <div className={classes.illustrations}>{
                        slides.map(({ leftIllustrationUrl }, index) => <Illustration
                            illustrationUrl={leftIllustrationUrl ?? ""}
                            vector={calculateVector(index)}
                            isActive={index === currentIndex}
                            key={index}
                        />)
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

const useStyles = tss.withParams<{ currentIndex: number }>().create(({ theme }) => ({
    "root": {

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
        "alignItems": "center"

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
        "alignItems": "center",

    },
    "slidesWrapper": {
        "position": "relative",
        "width": 690,
        "marginRight": 182

    },
    "illustrations": {
        "display": "grid",
        "alignItems": "center",
        "marginRight": theme.spacing.nonCenteredSectionSide

    },
    "slide": {}
}))


const { animate } = (() => {

    function getAnimation(translateInitialPercentage: number, duration: number, delay: number) {

        const percentage = (1 - duration/(duration + delay)) * 100;

        return `${keyframes`
            0%, ${percentage}% {
                transform: translateY(${translateInitialPercentage}%);
            }
            to {
                transform: translateY(0%);
            }
            `} ${duration + delay}ms cubic-bezier(0.25, 0.1, 0.25, 1)`

    }

    function getTranslation(translatePercentage: number, duration: number, delay: number): CSSObject {

        return {
            "transform": `translateY(${translatePercentage}%)`,
            "transition": `transform ${duration}ms`,
            "transitionDelay": `${delay}ms`

        }
    }
    function animate(params: {

        vector: Parameters<typeof Slide>["0"]["vector"],
        comingInDuration?: number,
        goingOutDuration?: number,
        comingInDelay?: number,
        goingOutDelay?: number
    }

    ) {
        const { vector, comingInDelay, comingInDuration, goingOutDelay, goingOutDuration } = params;
        switch (vector) {
            case "staticHidden": return { "transform": "translateY(100%)" };
            case "staticVisible": return {};
            case "comingFromBottom": return {
                "animation": getAnimation(100, comingInDuration ?? 1000, comingInDelay ?? 0)
            };
            case "comingFromTop": return {
                "animation": getAnimation(-100, comingInDuration ?? 1000, comingInDelay ?? 0)
            };
            case "leavingToBottom": return getTranslation(100, goingOutDuration ?? 1000, goingOutDelay ?? 0);
            case "leavingToTop": return getTranslation(-100, goingOutDuration ?? 1000, goingOutDelay ?? 0);
        }
    };

    return { animate }

})()



const { Slide } = (() => {

    type SlideProps = {
        slide: SliderProps["slides"][number];
        isActive: boolean;
        vector: "comingFromTop" | "comingFromBottom" | "leavingToTop" | "leavingToBottom" | "staticHidden" | "staticVisible";

    };


    const Slide = memo((props: SlideProps) => {

        const {
            slide: { button, title, ...rest },
            vector,
            isActive
        } = props;


        const { classes, cx } = useStyles({
            vector,
            isActive

        });
        return <div className={classes.root}>
            <Article
                {
                ...rest
                }
                title={<Text className={classes.title} typo="heading3">{title}</Text>}

                classes={{
                    "titleWrapper": classes.titleWrapper,
                    "smallSurtitleWrapper": classes.smallSurtitleWrapper,
                    "smallTitle": classes.smallTitle,
                    "paragraphWrapper": classes.paragraphWrapper,
                    "firstParagraph": cx(classes.paragraph, classes.firstParagraph),
                    "secondParagraph": cx(classes.paragraph, classes.secondParagraph)

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
        .withParams<Omit<SlideProps, "slide">>()
        .create(({
            vector,
            isActive
        }) => {


            return ({
                "root": {
                    "display": "flex",
                    "flexDirection": "column",
                    "alignItems": "flex-start",

                    "gridColumn": 1,
                    "gridRow": 1,


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
                    "overflow": "hidden"
                },
                "smallTitle": {},
                "paragraphWrapper": {
                },
                "button": {
                    "position": "relative",
                    "zIndex": isActive ? 2 : undefined,
                    "opacity": isActive ? 1 : 0,
                    "pointerEvents": !isActive ? "none" : undefined

                },
                "paragraph": {
                    "opacity": isActive ? 1 : 0,
                    "transition": "opacity 1000ms",
                },
                "firstParagraph": {
                    "transitionDelay": !isActive ? undefined : "800ms"
                },
                "secondParagraph": {
                    "transitionDelay": !isActive ? undefined : "1300ms"
                }

            })

        })

    return { Slide }
})();

const { Illustration } = (() => {

    type IllustrationProps = {
        illustrationUrl: string;
        vector: Parameters<typeof Slide>["0"]["vector"];
        isActive: boolean;

    };


    const Illustration = memo((props: IllustrationProps) => {

        const { illustrationUrl, vector, isActive } = props;

        console.log(isActive);

        const { classes } = useStyles({ vector, isActive });
        return <div className={classes.root}>
            <div className={classes.imageWrapper}>
                <img className={classes.image} src={illustrationUrl} alt="carouselIllustration" />
            </div>
        </div>

    });

    const useStyles = tss
        .withParams<Pick<IllustrationProps, "vector" | "isActive">>()
        .create(({ vector, isActive }) => {


            return ({
                "root": {
                    "gridColumn": 1,
                    "gridRow": 1,
                    "overflow": "hidden",
                    "position": "relative"
                },
                "imageWrapper": {
                    "position": "relative",
                    "zIndex": !isActive ? 3000 : 2000,

                    ...animate({
                        vector,
                        "comingInDuration": 600
                    })
                },
                "image": {

                }

            })

        })

    return { Illustration }
})();
