import { memo, useRef, useState, useEffect } from "react";
import { Text, tss, breakpointValues } from "@/theme";
import { Logo } from "./Logo";
import starSvg from "@/assets/svg/star-svgrepo-com.svg";
import navArrow from "@/assets/svg/nav-arrow.svg";
import { animate } from "@/tools/animate";
import { useConstCallback, useCallbackFactory } from "powerhooks";

export type CardSliderProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    cards: {
        title?: string;
        subtitle?: string;
        paragraph?: string;
        stars?: number;
        image?: {
            src: string;
            sources?: {
                srcSet: string | undefined;
                type: string | undefined;
            }[]
        }
    }[];

}


export const CardSlider = memo((props: CardSliderProps) => {
    const { className, cards } = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState<number | null>(null)
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [mobileActiveButton, setMobileActiveButton] = useState<"prev" | "next">("next");
    const { classes, cx, theme } = useStyles({
        mobileActiveButton,
        "classesOverrides": props.classes
    });


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

    const calculateVector = useConstCallback((
        index: number
    ): Parameters<typeof Card>["0"]["vector"] => {
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

    });

    const handleSlide = useCallbackFactory((
        [direction]: ["prev" | "next"]
    )=>{
        if(isTransitioning){
            return;
        }
        if(theme.windowInnerWidth < breakpointValues.sm){
            setMobileActiveButton(direction);
        }
        setPreviousIndex(currentIndex);
        switch(direction){
            case "next": setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1); break;
            case "prev": setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1); break;
        }

    })
 
    return <div className={cx(classes.root, className)}>
        <div className={classes.cardWrapper}>
            <div className={classes.cards}>
                {
                    cards.map((card, index) => <Card 
                        classes={{
                            "cardNumber": classes.cardNumber,
                            "image": classes.cardImage,
                            "imageWrapper": classes.cardImageWrapper,
                            "paragraph": classes.cardParagraph,
                            "pictureWrapper": classes.cardPictureWrapper,
                            "root": classes.cardRoot,
                            "stars": classes.cardStars,
                            "subtitle": classes.cardSubtitle,
                            "subtitleWrapper": classes.cardSubtitleWrapper,
                            "textWrapper": classes.cardTextWrapper,
                            "title": classes.cardTitle,
                            "titleWrapper": classes.cardTitleWrapper
                        }}
                        key={index} 
                        vector={calculateVector(index)} 
                        isActive={currentIndex === index} 
                        {...card} 
                        cardNumber={index + 1} 
                    />)
                }

            </div>
            {
                (()=>{
                    if(theme.windowInnerWidth < breakpointValues.sm){
                        return undefined;
                    }
                    return <>
                        <div className={cx(classes.backgroundCard, classes.backgroundCard1)}></div>
                        <div className={cx(classes.backgroundCard, classes.backgroundCard2)}></div>
                    </>
                })()
            }

        </div>
        <div className={classes.buttonWrapper}>
            <button onClick={handleSlide("next")} className={cx(classes.button, classes.button1)}>
                <Logo logoUrl={navArrow} />

            </button>
            <button onClick={handleSlide("prev")} className={cx(classes.button, classes.button2)}>

                <Logo logoUrl={navArrow} />
            </button>
        </div>

    </div>
})

const useStyles = tss.withParams<{mobileActiveButton: "prev" | "next"}>().create(({ theme, mobileActiveButton }) => {
    return ({
        "root": {
            "display": "flex",
            "position": "relative",

        },
        "cardWrapper": {
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {

                    }
                }
                return {
                    "maxWidth": 461,
                    //"height": 770

                }
            })(),
            "display": "grid",
            "position": "relative",

        },
        "cards": {
            "backgroundColor": theme.colors.white,
            "display": "grid",
            "gridColumn": 1,
            "gridRow": 1,
            "position": "relative",
            "zIndex": 200,

        },
        "button": {
            "background": "none",
            "width": 96,
            "height": 96,
            "borderRadius": "100%",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "cursor": "pointer",
            "& svg": {
                "fill": theme.colors.darkGray3,
                "transition": "fill 500ms"

            },
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "border": "none",
                        "transition": "border-color 500ms",

                    }
                }
                return {
                    "border": `solid ${theme.colors.darkGray3} 2px`,
                    "transition": "background 500ms, border-color 500ms",
                    ":hover": {
                        "backgroundColor": theme.colors.bloodOrange,
                        "borderColor": theme.colors.bloodOrange,
                        "& svg": {
                            "fill": theme.colors.white
                        }
                    }

                }

            })(),
        },
        "backgroundCard": {
            "gridColumn": 1,
            "gridRow": 1,
            "boxShadow": "0px 2px 20px 2px rgba(0, 0, 0, 0.1)",
            "backgroundColor": theme.colors.white
        },
        "backgroundCard1": {
            "transform": "translateX(20px) scale(0.96)"

        },
        "backgroundCard2": {
            "transform": "translateX(10px) scale(0.98)"

        },
        "buttonWrapper": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "position": "absolute",
                        "zIndex": 201,
                        "display": "flex",
                        "flexDirection": "row-reverse",
                        "justifyContent": "center",
                        "top": -75,
                        "right": -10

                    }
                }
                return {
                    "marginTop": 190,
                    "marginLeft": 130,

                }
            })()
        },
        "button1": {
            "marginBottom": 23,
            "transform": "rotate(180deg)",
            "border": (()=>{
                if(theme.windowInnerWidth < breakpointValues.sm && mobileActiveButton === "next"){
                    return `solid ${theme.colors.darkGray3} 1px`
                }
                return undefined;
            })()
        },
        "button2": {
            "border": (()=>{
                if(theme.windowInnerWidth < breakpointValues.sm && mobileActiveButton === "prev"){
                    return `solid ${theme.colors.darkGray3} 1px`
                }
                return undefined;
            })()
        },
        "cardNumber": {},
        "cardImage": {},
        "cardImageWrapper": {},
        "cardParagraph": {},
        "cardPictureWrapper": {},
        "cardRoot": {},
        "cardStars": {},
        "cardSubtitle": {},
        "cardSubtitleWrapper": {},
        "cardTitle": {},
        "cardTitleWrapper": {},
        "cardTextWrapper": {},
    })
})


const { Card } = (() => {
    type CardProps = CardSliderProps["cards"][number] &
    {
        className?: string;
        classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
        cardNumber: number;
        isActive: boolean;
        vector: "comingFromTop" | "comingFromBottom" | "leavingToTop" | "leavingToBottom" | "staticHidden" | "staticVisible";
    }
    const Card = memo((props: CardProps) => {
        const { className, cardNumber, paragraph, stars, subtitle, title, isActive, vector, image } = props;

        const starArrayRef = useRef((new Array(stars)).fill(undefined));
        const { classes, theme, cx } = useStyles({ 
            isActive, 
            vector ,
            "hasImage": image !== undefined,
            "classesOverrides": props.classes
        });

        return <div className={cx(classes.root, className)}>
            {
                (() => {
                    if (theme.windowInnerWidth < breakpointValues.sm) {
                        return undefined;
                    }
                    return <Text className={classes.cardNumber} typo="additionalTitle">0{cardNumber}.</Text>
                })()
            }
            {
                image !== undefined && 
                <div className={classes.imageWrapper}>
                    <div className={classes.pictureWrapper}>
                        <picture>
                            {
                                image.sources !== undefined &&
                                image.sources.map(({ srcSet, type }) => <source
                                    key={srcSet}
                                    srcSet={srcSet}
                                    type={type}
                                />)
                            }
                            <img className={classes.image} src={image.src} alt="card illustration" />
                        </picture>

                    </div>

                </div>


            }
            {
                (()=>{
                    if (image !== undefined) {
                        return <div className={classes.textWrapper}>

                            {
                                (title !== undefined || subtitle !== undefined) &&
                                <div className={classes.titlesWrapper}>
                                    {
                                        title !== undefined &&
                                        <div className={classes.titleWrapper}>
                                            <Text className={classes.title} typo="heading5">{title}</Text>

                                        </div>
                                    }
                                    {
                                        subtitle !== undefined &&
                                        <div className={classes.subtitleWrapper}>
                                            <Text className={classes.subtitle} typo="paragraph">{subtitle}</Text>
                                        </div>
                                    }

                                </div>
                            }
                            {
                                paragraph !== undefined &&
                                <Text className={classes.paragraph} typo="paragraph">{paragraph}</Text>
                            }
                            {
                                stars !== undefined &&
                                <div className={classes.stars}>
                                    {
                                        starArrayRef.current.map((_star, index) => <Logo key={index} width={24} height={24} logoUrl={starSvg} />)
                                    }
                                </div>
                            }
                        </div>
                    }
                    return <>
                        {
                            (title !== undefined || subtitle !== undefined) &&
                            <div className={classes.titlesWrapper}>
                                {
                                    title !== undefined &&
                                    <div className={classes.titleWrapper}>
                                        <Text className={classes.title} typo="heading5">{title}</Text>

                                    </div>
                                }
                                {
                                    subtitle !== undefined &&
                                    <div className={classes.subtitleWrapper}>
                                        <Text className={classes.subtitle} typo="paragraph">{subtitle}</Text>
                                    </div>
                                }

                            </div>
                        }
                        {
                            paragraph !== undefined &&
                            <Text className={classes.paragraph} typo="paragraph">{paragraph}</Text>
                        }
                        {
                            stars !== undefined &&
                            <div className={classes.stars}>
                                {
                                    starArrayRef.current.map((_star, index) => <Logo key={index} width={24} height={24} logoUrl={starSvg} />)
                                }
                            </div>
                        }
                    </>
                })()
            }
        </div>
    });

    const useStyles = tss.withParams<{ isActive: boolean; vector: CardProps["vector"]; hasImage: boolean; }>().create(({ isActive, vector, theme, hasImage }) => {
        return ({
            "root": {
                "gridColumn": 1,
                "zIndex": 200,
                "gridRow": 1,
                "display": "flex",
                //"justifyContent": "space-between",
                "flexDirection": "column",
                "pointerEvents": isActive ? "none" : undefined,
                ...(() => {
                    if (hasImage) {
                        return {};
                    }
                    if (theme.windowInnerWidth < breakpointValues.sm) {
                        const value = 25;

                        return {
                            "alignItems": "center",
                            "paddingLeft": value,
                            "paddingRight": value,
                            "paddingTop": 55,
                            "paddingBottom": 70,
                        }

                    }
                    return {
                        ...(() => {
                            const value = 65;
                            return {
                                "paddingLeft": value,
                                "paddingRight": value
                            }

                        })(),
                        "paddingTop": 98,
                        "paddingBottom": 132,

                    }

                })(),
                "boxShadow": "0px 2px 20px 2px rgba(0, 0, 0, 0.1)",

            },
            "paragraph": {
                "transition": "opacity 500ms",
                "transitionDelay": isActive ? "800ms" : undefined,
                "opacity": isActive ? 1 : 0,
                ...(() => {
                    if (theme.windowInnerWidth < breakpointValues.sm) {
                        return {
                            "textAlign": "center"
                        }
                    }
                })(),
                "marginBottom": 40

            },
            "imageWrapper": {

                "overflow": "hidden",
                "justifySelf": "flex-start"
            },
            "textWrapper": {
                "display": "flex",
                "flexDirection": "column",
                "justifyContent": "space-between",
                "alignItems": "center",
                ...(() => {
                    if (!hasImage) {
                        return {};
                    }
                    const value = 30;
                    return {

                        "paddingTop": value,
                        "paddingBottom": value,
                        "paddingLeft": value,
                        "paddingRight": value
                    }
                })()

            },
            "pictureWrapper": {
                ...animate({
                    vector,
                    "comingInDuration": 600
                })

            },
            "image": {
                "width": "100%",
                "objectFit": "cover",
                "display": "block"

            },
            "cardNumber": {
                "opacity": isActive ? 1 : 0,
                "marginBottom": 65

            },
            "titlesWrapper": {
                "marginBottom": 40

            },
            "titleWrapper": {
                "overflow": "hidden",
                "marginBottom": 20,

            },
            "subtitleWrapper": {
                "overflow": "hidden"

            },
            "stars": {
                "display": "flex",
                "transition": "opacity 500ms",
                "transitionDelay": isActive ? "1200ms" : undefined,
                "opacity": isActive ? 1 : 0,
            },
            "title": {
                ...animate({
                    vector,
                    "comingInDelay": 500
                }),

                ...(() => {
                    if (theme.windowInnerWidth < breakpointValues.sm) {
                        return {
                            "textAlign": "center",
                        }
                    }
                })()

            },
            "subtitle": {
                "color": theme.colors.bloodOrange,
                ...animate({
                    vector,
                    "comingInDelay": 800
                }),
                ...(() => {
                    if (theme.windowInnerWidth < breakpointValues.sm) {
                        return {
                            "textAlign": "center"
                        }
                    }
                })()
            }
        })
    })

    return { Card }
})()

