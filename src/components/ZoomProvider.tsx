import { tss } from "../theme";
import { memo, useEffect } from "react";
import type { ReactNode } from "react";


export type ZoomProviderProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    widthRange: {
        min: number;
        max: number;

    }
    children: ReactNode;
}

export const ZoomProvider = memo((props: ZoomProviderProps) => {
    const {children, widthRange: {max, min}, className} = props;
    const { classes, theme, cx } = useStyles({ 
        "widthRange": {
            max,
            min
        },
        "classesOverrides": props.classes
     })

    const isWithinInterval = theme.windowInnerWidth <= max && theme.windowInnerWidth >= min;

    useEffect(() => {
        const body = document.body;

        body.style.height = isWithinInterval ? "0px": "";

        return () => {
            body.style.height = "";
        };
    }, [isWithinInterval]);


    return <div className={cx(classes.root, className)}>
        <div className={classes.inner}>
            {children}
        </div>
    </div>

})


const useStyles = tss.withParams<Omit<ZoomProviderProps, "children" | "className" | "classes">>().create(({
    widthRange: {max, min},
    theme }) => {
        const isWithinInterval = theme.windowInnerWidth <= max && theme.windowInnerWidth >= min;
        return ({"root": {

        },
        "inner": {
            ...(isWithinInterval ? {
                "position": isWithinInterval ? "absolute" : "relative",
                "transform": `scale(${theme.windowInnerWidth / max})`,
                "transformOrigin": "top left",
                "width": max,
                "height": theme.windowInnerHeight / (theme.windowInnerWidth / max),
                "overflowX": "hidden",
            } : {
                "width": "100%"
            }),
            "margin": "auto",

        }
    }
)})