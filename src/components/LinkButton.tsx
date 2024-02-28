import { memo } from "react";
import type { Link } from "../tools/link";
import { tss, Text } from "../theme";


export type LinkButtonProps = Link & {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>
    variant?: "filled" | "outlined"
}





export const LinkButton = memo((props: LinkButtonProps) => {
    const { href, label, onClick, className, variant } = props;
    const { classes, cx } = useStyles({
        "variant": variant ?? "outlined",
        "classesOverrides": props.classes
    });
    return <a className={cx(classes.root, className)} onClick={onClick} href={href}>
        <div className={classes.inner}>

            <Text className={classes.linkLabel} typo="sectionPageOrButton">{label}</Text>
        </div>
    </a>
});

const useStyles = tss.withParams<Required<Pick<LinkButtonProps, "variant">>>().withNestedSelectors<"linkLabel">().create(({ theme, classes, variant }) => ({
    "root": {
        "textDecoration": "none",
    },
    "inner": {
        ...(()=>{
            const topBottom = 25;
            const leftRight = 62;
            return {
                "paddingLeft": leftRight,
                "paddingRight": leftRight,
                "paddingTop": topBottom,
                "paddingBottom": topBottom
            }
            
        })(),
        //"padding": "25px 50px 25px 50px",
        "border": `solid ${theme.colors.bloodOrange} 1px`,
        "backgroundColor": (()=>{
            switch(variant){
                case "filled" : return theme.colors.bloodOrange;
                case "outlined": return undefined;
            }

        })(),
        "transition": "background-color 300ms",
        [`&:hover .${classes.linkLabel}`]: {
            "color": (()=>{
                switch(variant){
                    case "filled": return theme.colors.indigo;
                    case "outlined": return theme.colors.white;
                }
            })()
        },
        ":hover": {
            "backgroundColor": (()=>{
                switch(variant){
                    case "filled": return theme.colors.white;
                    case "outlined": return theme.colors.bloodOrange;
                }
            })()
        }

    },
    "linkLabel": {
        "color": (()=>{
            switch(variant){
                case "filled": return theme.colors.white;
                case "outlined": return theme.colors.indigo;
            }

        })(),
        "textTransform": "uppercase",
        "marginBlock": 0,
        "transition": "color 300ms"
    }

}))