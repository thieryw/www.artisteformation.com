import { tss } from "../theme";
import { memo, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { useRoute } from "@/router";
import { isMobile } from "react-device-detect";


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
    const { children, widthRange: { max, min }, className } = props;
    const route = useRoute();
    const innerRef = useRef<HTMLDivElement>(null);
    const { classes, theme, cx } = useStyles({
        "widthRange": {
            max,
            min
        },
        "classesOverrides": props.classes
    })



    const isWithinInterval = (theme.windowInnerWidth <= max && theme.windowInnerWidth >= min) && (window.screen.width <= max && window.screen.width >= min);

    useEffect(() => {
        function handleResize() {
            if (window.screen.width <= max && window.screen.width >= min) {
                return;
            }
            window.location.reload();
        }

        window.addEventListener("resize", handleResize);


        return () => window.removeEventListener("resize", handleResize);



    }, [min, max])

    useEffect(() => {
        if (innerRef.current === null || !isWithinInterval) {
            return;
        }
        innerRef.current.scrollTo({
            "top": 0
        })

    }, [innerRef.current, isWithinInterval, route.name])

    useEffect(() => {
        const body = document.body;

        body.style.height = isWithinInterval ? "0px" : "";

        return () => {
            body.style.height = "";
        };
    }, [isWithinInterval]);


    return <div className={cx(classes.root, className)}>
        <div ref={innerRef} className={classes.inner}>
            {children}
        </div>
    </div>

})


const useStyles = tss.withParams<Omit<ZoomProviderProps, "children" | "className" | "classes">>().create(({
    widthRange: { max, min },
    theme }) => {
    const isWithinInterval = (theme.windowInnerWidth <= max && theme.windowInnerWidth >= min) && (window.screen.width <= max && window.screen.width >= min);
    return ({
        "root": {

        },
        "inner": {
            ...(isWithinInterval ? {
                "position": isWithinInterval ? "absolute" : "relative",
                "transform": `scale(${theme.windowInnerWidth / max})`,
                "transformOrigin": "top left",
                "width": max,
                "height": theme.windowInnerHeight / (theme.windowInnerWidth / max),
                "overflowX": isMobile ? undefined : "hidden",
                "margin": "auto",
            } : {
                "width": "100%",
                "height": "100vh",
                "overflowX": "hidden",
            }),

        }
    }
    )
})