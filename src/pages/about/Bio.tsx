import { memo, useState, useEffect } from "react";
import { biography } from "@/user/biography";
import { loadWebpImage } from "@/tools/loadWebpImage";
import { Text, breakpointValues, tss } from "@/theme";
import { DropDown } from "@/components/DropDown";



const bioImageName = biography.imageUrl.match(/([^\/]+)(?=\.\w+$)/)?.[0]


export const Bio = memo(() => {
    const [webpImage, setWebpImage] = useState<string | undefined>();


    useEffect(() => {
        if (bioImageName === undefined) {
            return;
        }
        loadWebpImage("/www.artisteformation.com/src/assets/webp/a-propos/", bioImageName)
            .then(loadedImages => {
                setWebpImage(loadedImages);
            })


    }, [])

    const { classes, theme } = useStyles();


    return <div className={classes.root}>
        <div className={classes.titleWrapper}>
            <div className={classes.titleInnerWrapper}>
                <Text className={classes.surtitle} typo="additionalTitle">{biography.fr.surtitle}</Text>
                <Text className={classes.title} typo="heading2">{biography.fr.title}</Text>
            </div>
        </div>
        <div className={classes.inner}>
            <div className={classes.firstColumn}>

                <div className={classes.imageWrapper}>
                    <picture>
                        <source srcSet={webpImage} type="image/webp" />
                        <source srcSet={biography.imageUrl} type="image/jpeg" />
                        <img className={classes.image} src={webpImage} alt="author portrait" />
                    </picture>

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
                                        "marginBottom": (()=>{
                                            if(fr.paragraphs.length < 2 || index >= fr.paragraphs.length - 1){
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
                            <div className={classes.paragraphWrapper}>
                                <Text className={classes.cap} typo="heading2">{biography.paragraphs[0].fr.slice(0, 2)}</Text>
                                <Text typo="paragraph">{biography.paragraphs[0].fr.slice(2)}</Text>
                            </div>
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
                                return <Text
                                    className={classes.paragraph}
                                    typo="paragraph"
                                    key={index}
                                >
                                    {paragraph.fr}
                                </Text>
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
                if(theme.windowInnerWidth < breakpointValues.sm){
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
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {}
                }
                return {
            "display": "grid",
            "gridTemplateColumns": "repeat(2, 500px)",
            "gap": 55,
            "justifyContent": "center",

                }
            })()

        },
        "paragraphWrapper": {

        },
        "title": {
            "marginBottom": 60

        },
        "cap": {
            "float": "left",
            "marginRight": 10,
            "lineHeight": "1em"
        },
        "firstColumn": {
            "display": "grid",
            "gap": 65

        },
        "titleWrapper": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {}
                }
                return {
                    "display": "grid",
                    "gridTemplateColumns": "repeat(2, 500px)",
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
            "width": "100%",
            "height": "100%",
            "objectFit": "cover"
        },
        "smallDivider": {
            "width": 40,
            "height": 0,
            "borderTop": `solid ${theme.colors.indigo} 3px`
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
            "marginBottom": 60
        },
        "paragraph": {
            "marginBottom": 50

        }
    })
})