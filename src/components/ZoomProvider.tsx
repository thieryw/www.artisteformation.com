import { tss } from "../theme";
import { memo, useEffect } from "react";
import type { ReactNode } from "react";


export type ZoomProviderProps = {

    referenceWidth: number;
    minEffectivenessWidth: number;
    children: ReactNode;
}

export const ZoomProvider = memo((props: ZoomProviderProps) => {
    const {children, ...rest} = props;
    const { classes, theme } = useStyles({ ...rest })

    const isWithinInterval = theme.windowInnerWidth <= props.referenceWidth && theme.windowInnerWidth >= props.minEffectivenessWidth;

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
    minEffectivenessWidth,
    referenceWidth,
    theme }) => {
        const isWithinInterval = theme.windowInnerWidth <= referenceWidth && theme.windowInnerWidth >= minEffectivenessWidth;
        return ({"root": {
            "position": "relative",
            "width": "100%",

        },
        "inner": {
            ...(isWithinInterval ? {
                "position": isWithinInterval ? "absolute" : "relative",
                "transform": `scale(${theme.windowInnerWidth / referenceWidth})`,
                "transformOrigin": "top left",
                "width": referenceWidth,
                "height": theme.windowInnerHeight / (theme.windowInnerWidth / referenceWidth),
            } : {
                "width": "100%"
            }),
            "margin": "auto",

        }
    }
)})