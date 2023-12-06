import { memo, useRef, useLayoutEffect } from "react";
import type { ReactNode } from "react";
import { useDomRect } from "powerhooks";
import { getScrollableParent } from "powerhooks/getScrollableParent";
import { tss } from "../theme";
import { assert } from "tsafe";


export type FixedComponentProps = {
    className?: string;
    children: ReactNode;
    widthRange: {
        max: number;
        min: number;

    };
}


export const FixedComponent = memo((props: FixedComponentProps) => {

    const { children, className, widthRange: {max, min} } = props;

    const ref = useRef<HTMLDivElement>(null);

    const { domRect: { top } } = useDomRect({
        ref
    });


    const { classes, theme, cx } = useStyles();


    useLayoutEffect(() => {
        if (ref.current === null || theme.windowInnerWidth < min || theme.windowInnerWidth > max) {
            return;
        }

        const scrollableParent = getScrollableParent({
            "doReturnElementIfScrollable": true,
            "element": ref.current
        });


        function handleScrollFixed() {
            requestAnimationFrame(() => {
                assert(ref.current !== null);
                ref.current.style.top = `${(top + scrollableParent.scrollTop) / (theme.windowInnerWidth / max)}px`
            })
        };


        handleScrollFixed();
        scrollableParent.addEventListener("scroll", handleScrollFixed);
        return () => scrollableParent.removeEventListener("scroll", handleScrollFixed);


    }, [theme.windowInnerWidth, top])


    return <div className={cx(classes.root, className)} ref={ref}>
        {children}
    </div>
})

const useStyles = tss.create(() => ({
    "root": {
        "position": "absolute"
    }
}))