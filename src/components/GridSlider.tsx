import { memo, useState, useEffect } from "react";
import { Text, tss } from "@/theme";
import { animate } from "@/tools/animate";
import { useConstCallback } from "powerhooks/useConstCallback";
import { useCallbackFactory } from "powerhooks/useCallbackFactory";


export type GridSliderProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    slides: {
        imageUrl?: string;
        imageSources?: {
            srcSet: string | undefined;
            type: string | undefined;
        }[]
        name: string;
        profession: string;
        description: string;
    }[];

};

function getRandomNumber(){
    return (Math.floor(Math.random() * (2 - 1 + 1)) + 1) as 1 | 2;
}

export const GridSlider = memo((props: GridSliderProps) => {
    const { slides, className } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState<number | null>(null)
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [grid, setGrid] = useState<("blank" | "grey" | (Pick<GridSliderProps["slides"][number], "imageUrl" | "imageSources">) & {index: number})[]>([]);
    
    useEffect(()=>{
        const array: typeof grid = [];
        
        let i = 0;

        while(true){
            if(i === slides.length - 1){
                setGrid(array);
                return;
            }
            const rand: 1 | 2 = getRandomNumber();
            const rand2: 1 | 2 = getRandomNumber();

            switch(rand){
                case 1 : array.push({
                    "imageSources": slides[i].imageSources,
                    "imageUrl": slides[i].imageUrl,
                    "index": i
                }); i++; break;
                case 2 : (()=>{
                    switch(rand2){
                        case 1 : array.push("blank"); break;
                        case 2 : array.push("grey"); break;
                    }
                })(); break;
            }

        }


        
    },[slides])

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
    const { classes, cx, theme } = useStyles({
        "classesOverrides": props.classes
    });

    return <div className={cx(classes.root, className)}>
        <div className={classes.grid}>
            {
                grid.map((slide, index) => <div style={{
                    "backgroundColor": (()=>{
                        switch(slide){
                            case "blank": return theme.colors.backgroundMain;
                            case "grey": return theme.colors.darkGray3;
                            default: return undefined;
                        }
                    })()


                }} className={classes.imageWrapper} key={index}>
                    {
                        slide !== "blank" && slide !== "grey" &&
                        <picture
                            onClick={handleNavigation(slide.index)}
                        >

                            {
                                slide.imageSources !== undefined &&
                                slide.imageSources.map((source, index) => <source
                                    key={index}
                                    {...source}
                                />)
                            }

                            <img className={classes.image} src={slide.imageUrl} alt="miniature portrait" />
                        </picture>
                    }
                </div>)
            }

        </div>
        <div className={classes.decoSeparator}></div>
        <div className={cx(classes.sliderWrapper)}>
            {
                slides.map((slide, index) => <Slide
                    key={index}
                    vector={calculateVector(index)}
                    isActive={index === currentIndex}
                    slide={slide}
                />)
            }

        </div>

    </div>

});

const useStyles = tss.create(({ theme }) => {
    const dimensions = {
        "width": 170,
        "height": 170
    }
    return ({
        "root": {
            "display": "flex",
            "justifyContent": "center",
            ...(() => {
                const value = 140;
                return {
                    "marginTop": value,
                    "marginBottom": value
                }
            })()

        },
        "grid": {
            "display": "grid",
            "gridTemplateColumns": `repeat(5, ${dimensions.width}px)`,
            "gridTemplateRows": `${dimensions.width}px ${dimensions.height}px auto`,
            "gap": 24

        },
        "decoSeparator": {
            "height": 800,
            "width": 0,
            "borderLeft": `solid ${theme.colors.backgroundTertiary} 2px`,
            ...(() => {
                const value = 150;
                return {
                    "marginLeft": value,
                    "marginRight": value
                }
            })()

        },
        "sliderWrapper": {
            "display": "grid"
        },
        "imageWrapper": {
            "width": dimensions.width,
            "height": dimensions.height,

        },
        "image": {
            "width": "100%",
            "height": "100%",
            "objectFit": "cover"
        }

    })
})



const { Slide } = (() => {

    type SlideProps = {
        className?: string;
        slide: GridSliderProps["slides"][number];
        isActive: boolean;
        vector: "comingFromTop" | "comingFromBottom" | "leavingToTop" | "leavingToBottom" | "staticHidden" | "staticVisible";
        classes?: Partial<ReturnType<typeof useStyles>["classes"]>

    };


    const Slide = memo((props: SlideProps) => {

        const {
            slide: { description, imageSources, imageUrl, name, profession },
            vector,
            isActive,
            className
        } = props;


        const { classes, cx } = useStyles({
            vector,
            isActive,
            "classesOverrides": props.classes
        });
        return <div className={cx(classes.root, className)}>
            <div className={classes.imageWrapper}>
                <div className={classes.pictureWrapper}>
                    <picture>
                        {
                            imageSources !== undefined &&
                            imageSources.map((source, index) => <source
                                key={index}
                                {...source}
                            />)
                        }
                        <img className={classes.image} src={imageUrl} alt="portrait" />
                    </picture>
                </div>
            </div>
            <div className={classes.titleWrapper}>
                <div className={classes.nameWrapper}>
                    <Text className={classes.name} typo="heading5">{name}</Text>
                </div>
                <div className={classes.professionWrapper}>
                    <Text className={classes.profession} typo="paragraph">{profession}</Text>
                </div>

            </div>
            <Text className={classes.paragraph} typo="paragraph">{description}</Text>
            <div className={classes.decoSeparator}></div>
        </div>

    });

    const useStyles = tss
        .withParams<Pick<SlideProps, "vector" | "isActive">>()
        .create(({
            isActive,
            vector,
            theme
        }) => {


            return ({
                "root": {
                    "display": "flex",
                    "flexDirection": "column",
                    "alignItems": "flex-start",
                    "justifyContent": "space-between",
                    "gridColumn": 1,
                    "gridRow": 1,
                    "width": 350
                    //"width": hasOnlyOneParagraph ? 326 : undefined
                },
                "imageWrapper": {
                    "overflow": "hidden",
                    "position": "relative",
                    "marginBottom": 40,
                    ...(() => {
                        const value = 350;
                        return {
                            "width": value,
                            "height": value
                        }
                    })()
                },
                "pictureWrapper": {
                    "position": "relative",
                    "width": "100%",
                    "zIndex": !isActive ? 3000 : 2000,

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
                "titleWrapper": {
                    "marginBottom": 20
                },
                "name": {
                    ...animate({
                        vector,
                        "comingInDuration": 600,
                        "comingInDelay": 200
                    })
                },
                "nameWrapper": {
                    "overflow": "hidden"
                },
                "profession": {
                    ...animate({
                        vector,
                        "comingInDuration": 600,
                        "comingInDelay": 600
                    }),
                    "color": theme.colors.bloodOrange
                },
                "professionWrapper": {
                    "overflow": "hidden"

                },
                "paragraph": {
                    "opacity": isActive ? 1 : 0,
                    "pointerEvents": isActive ? undefined : "none",
                    "transition": "opacity 1000ms",
                    "transitionDelay": isActive ? "1000ms" : undefined,
                    "color": theme.colors.darkGray,
                    "marginBottom": 30
                },
                "decoSeparator": {
                    "width": 66,
                    "height": 0,
                    "borderTop": `solid ${theme.colors.bloodOrange} 2px`,
                    //"opacity": isActive ? 1 : 0

                }

            })

        })

    return { Slide }
})();