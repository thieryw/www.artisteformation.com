import { memo, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { tss } from "@/theme";
import { useInView } from "react-intersection-observer";
import { useDomRect } from "powerhooks/useDomRect";


export type PictureAnimatorProps = {
    className?: string;
    children: ReactNode;
}

export const PictureAnimator = memo((props: PictureAnimatorProps) => {
    const { children, className } = props;
    const [ref, inView] = useInView({ "triggerOnce": true, "threshold": 0.8 })
    const { ref: imageWrapperRef, domRect: { width, height } } = useDomRect();
    const [isImageVisible, setIsImageVisible] = useState(inView);
    useEffect(() => {
        if (inView) {
            setIsImageVisible(true)
        }

    }, [inView])

    const { classes, cx } = useStyles({
        "inView": isImageVisible,
        width,
        height
    });

    return <div ref={ref} className={cx(classes.root, className)}>

        <div
            ref={imageWrapperRef}
        >
            <div className={classes.animatedDiv}>
                {
                    children
                }

            </div>
        </div>
    </div>

})

const useStyles = tss.withParams<{ inView: boolean; width: number; height: number }>().create(({ inView, width, height }) => {
    console.log(width)
    return ({
        "root": {
            "position": "relative"
        },
        "animatedDiv": {

            "position": "absolute",
            "whiteSpace": "nowrap"
        }
    })
})