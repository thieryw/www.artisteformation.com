import { memo, useState, useEffect } from "react";
import { biography } from "@/user/biography";
import { loadWebpImage } from "@/tools/loadWebpImage";
import { Text, tss } from "@/theme";



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

    const { classes } = useStyles();


    return <div className={classes.root}>
        <div className={classes.titleWrapper}>
            <div>
                <Text className={classes.surtitle} typo="additionalTitle">{biography.fr.surtitle}</Text>
                <Text className={classes.title} typo="heading2">{biography.fr.title}</Text>
            </div>
            <div></div>
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
                <div className={classes.paragraphWrapper}>
                    <Text className={classes.cap} typo="heading2">{biography.paragraphs[0].fr.slice(0, 2)}</Text>
                    <Text typo="paragraph">{biography.paragraphs[0].fr.slice(2)}</Text>
                </div>
                <div className={classes.smallDivider}></div>

            </div>
            <div className={classes.secondColumn}>
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

        </div>

    </div>
});



const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            ...(() => {
                const value = 210;
                return {
                    "paddingTop": value,
                    "paddingBottom": value
                }
            })()

        },
        "inner": {
            "display": "grid",
            "gridTemplateColumns": "repeat(2, 500px)",
            "gap": 55,
            "justifyContent": "center",

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
            "display": "grid",
            "gridTemplateColumns": "repeat(2, 500px)",
            "gap": 55,
            "justifyContent": "center"
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