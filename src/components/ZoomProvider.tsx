import { tss } from "../theme";
import { memo, useEffect } from "react";
import type { ReactNode } from "react";


export type ZoomProviderProps = {

    widthRange: {
        min: number;
        max: number;

    }
    children: ReactNode;
}

export const ZoomProvider = memo((props: ZoomProviderProps) => {
    const {children, widthRange: {max, min}} = props;
    const { classes, theme } = useStyles({ 
        "widthRange": {
            max,
            min
        }
     })

    const isWithinInterval = theme.windowInnerWidth <= max && theme.windowInnerWidth >= min;

    useEffect(() => {
        const body = document.body;

        body.style.height = isWithinInterval ? "0px": "";

        return () => {
            body.style.height = "";
        };
    }, [isWithinInterval]);


    return <div className={classes.root}>
        <div className={classes.inner}>
            {children}
        </div>
    </div>

})


const useStyles = tss.withParams<Omit<ZoomProviderProps, "children">>().create(({
    widthRange: {max, min},
    theme }) => {
        const isWithinInterval = theme.windowInnerWidth <= max && theme.windowInnerWidth >= min;
        return ({"root": {
            "position": "relative",
            "width": "100%",

        },
        "inner": {
            ...(isWithinInterval ? {
                "position": isWithinInterval ? "absolute" : "relative",
                "transform": `scale(${theme.windowInnerWidth / max})`,
                "transformOrigin": "top left",
                "width": max,
                "height": theme.windowInnerHeight / (theme.windowInnerWidth / max),
            } : {
                "width": "100%"
            }),
            "margin": "auto",

        }
    }
)})