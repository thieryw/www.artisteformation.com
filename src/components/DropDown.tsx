import { memo, useState } from "react";
import type { ReactNode } from "react";
import { tss, Text } from "@/theme";
import chevronSvg from "@/assets/svg/chevron.svg";
import { ReactSVG } from "react-svg";
import { useDomRect } from "powerhooks/useDomRect";
import { useConstCallback } from "powerhooks/useConstCallback";


export type DropDownProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    tabName: string;
    tabContent: ReactNode;

}

export const DropDown = memo((props: DropDownProps) => {
    const { tabContent, tabName, className } = props;
    const [isOpen, setIsOpen] = useState(false);
    const { domRect: { height }, ref } = useDomRect()
    const { classes, cx } = useStyles({
        "classesOverrides": props.classes,
        "contentHeight": height,
        isOpen
    });
    const toggleTab = useConstCallback(()=>{
        setIsOpen(!isOpen);
    })
    return <div className={cx(classes.root, className)}>

        <button onClick={toggleTab} className={classes.tabButton}>
            <ReactSVG
                src={chevronSvg}
                className={classes.arrow}
            />

            <Text className={classes.tabName} typo="carouselItem">{tabName}</Text>
        </button>

        <div className={classes.divider}></div>
        <div className={classes.tabContentWrapper}>
            <div ref={ref} className={classes.tabContent}>
                {tabContent}


            </div>

        </div>

    </div>
})

const useStyles = tss
    .withParams<{ contentHeight: number; isOpen: boolean; }>()
    .create(({ contentHeight, isOpen, theme }) => {
        return ({
            "root": {
                "display": "flex",
                "flexDirection": "column"

            },
            "tabButton": {
                "display": "flex",
                "alignItems": "center",
                "border": "none",
                "backgroundColor": "transparent"

            },
            "divider": {
                "width": "100%",
                "height": 0,
                "borderTop": `solid ${theme.colors.backgroundTertiary} 2px`,
                "marginTop": 18,
            },
            "tabContentWrapper": {
                "transition": "height 500ms",
                "height": isOpen ? contentHeight : 0,
                "overflow": "hidden",
            },
            "tabName": {
                "transition": "color 500ms",
                "color": isOpen ? theme.colors.bloodOrange : undefined

            },
            "tabContent": {
                "paddingTop": theme.spacing.textGap,
                "paddingBottom": theme.spacing.textGap
            },
            "arrow": {
                ...(() => {
                    const value = 12;
                    return {
                        "transition": "transform 500ms",
                        "transform": isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        "transformOrigin": "center",
                        "height": value,
                        "marginRight": value,
                        "& svg": {
                            "width": value,
                            "height": value,
                            "transition": "fill 500ms",
                            "fill": isOpen ? theme.colors.bloodOrange : theme.colors.darkGray3,

                        }
                    }

                })()
            }

        })
    })