import { memo, useEffect, useState } from "react";
import { tss } from "@/theme";
import { useInView } from "react-intersection-observer";
import { useDomRect } from "powerhooks/useDomRect";


export type PictureAnimatorProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    src: string;
    sources?: {srcSet: string; type: string}[];
    alt?: string
}

export const PictureAnimator = memo((props: PictureAnimatorProps) => {
    const { className, src, sources, alt } = props;
    const [ref, inView] = useInView({ "triggerOnce": true, "threshold": 0.8 })
    const { ref: imageRef, domRect: { width, height } } = useDomRect();
    const [isImageVisible, setIsImageVisible] = useState(inView);
    useEffect(() => {
        if (inView) {
            setIsImageVisible(true)
        }

    }, [inView])

    const { classes, cx } = useStyles({
        "inView": isImageVisible,
        width,
        height,
        "classesOverrides": props.classes
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
        width: number;
        height: number;
    }
>().create(({ inView, width, height }) => {
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
            "overflow": "hidden",
            height
        },
        "image": {
            "transform": `scale(${inView ? 1.2 : 1})`,
            "transition": "transform 1000ms"

        }
    })
})