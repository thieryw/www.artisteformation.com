import { memo, useEffect, useState } from "react";
import { tss } from "@/theme";
import { useInView } from "react-intersection-observer";
import { useDomRect } from "powerhooks/useDomRect";


export type PictureAnimatorProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    src: string;
    sources?: {srcSet: string; type: string}[];
    alt?: string;
    animationDelay?: number;
}

export const PictureAnimator = memo((props: PictureAnimatorProps) => {
    const { className, src, sources, alt, animationDelay = 0 } = props;
    const [ref, inView] = useInView({ "triggerOnce": true, "threshold": 0.4 })
    const { ref: imageRef, domRect: { width: imageWidth, height: imageHeight } } = useDomRect();
    const [isImageVisible, setIsImageVisible] = useState(inView);

    const [imageDim, setImageDim] = useState({
        imageWidth,
        imageHeight
    })

    useEffect(()=>{
        if(imageDim.imageWidth !== 0 && imageDim.imageHeight !== 0){
            return;
        }
        setImageDim({
                imageHeight,
                imageWidth
        })

    }, [imageWidth, imageHeight])

    useEffect(() => {
        if (inView) {
            setIsImageVisible(true)
        }

    }, [inView])

    const { classes, cx } = useStyles({
        "inView": isImageVisible,
        "imageWidth": imageDim.imageWidth,
        "imageHeight": imageDim.imageHeight,
        "classesOverrides": props.classes,
        animationDelay
    });

    return <div ref={ref} className={cx(classes.root, className)}>

        <div className={classes.animatedDiv}>
            <picture>
                {
                    sources?.map((source, index) => <source key={index} {...source} />)
                }
                <img className={classes.image} ref={imageRef} src={src} alt={alt} />

            </picture>

        </div>
    </div>

})

const useStyles = tss.withParams<
    {
        inView: boolean;
        imageWidth: number;
        imageHeight: number;
        animationDelay: number;
    }
>().create(({ inView, imageHeight, imageWidth, animationDelay }) => {
    const width = imageWidth / 1.2
    const height = imageHeight / 1.2
    return ({
        "root": {
            "position": "relative",
            width,
            height
        },
        "animatedDiv": {

            "position": "absolute",
            "whiteSpace": "nowrap",
            "width": inView ? width : 0,
            "transition": "width 1000ms",
            "transitionDelay": `${animationDelay}ms`,
            "overflow": "hidden",
            height
        },
        "image": {
            "transform": `scale(${inView ? 1 : 1.2})`,
            "transition": "transform 1000ms",
            "transitionDelay": `${animationDelay}ms`
        }
    })
})