import { tss } from "../theme";
import { memo } from "react";
import type { ReactNode } from "react";


export type ZoomProviderProps = {
    referenceWidth: number;
    minEffectivenessWidth: number;
    children: ReactNode;
}

export const ZoomProvider = memo((props: ZoomProviderProps) => {
    const {children, ...rest} = props;
    const { classes } = useStyles({ ...rest })

    return <div className={classes.root}>
        <div className={classes.inner}>
            {children}
        </div>
    </div>

})


const useStyles = tss.withParams<Omit<ZoomProviderProps, "children">>().create(({
    minEffectivenessWidth,
    referenceWidth,
    theme }) => ({
        "root": {
            "position": "relative",
            "width": "100%"

        },
        "inner": {
            ...(theme.windowInnerWidth <= referenceWidth && theme.windowInnerWidth >= minEffectivenessWidth ? {
                "transform": `scale(${theme.windowInnerWidth / referenceWidth})`,
                "transformOrigin": "top left",
                "width": referenceWidth
            } : {
                "width": "100%"
            }),
            "margin": "auto"

        }
    }
))