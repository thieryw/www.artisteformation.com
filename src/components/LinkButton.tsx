import { memo } from "react";
import { Link } from "../tools/link";
import { tss, Text } from "../theme";


export type LinkButtonProps = Link & {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>
}





export const LinkButton = memo((props: LinkButtonProps) => {
    const { href, label, onClick, className } = props;
    const { classes, cx } = useStyles({
        "classesOverrides": props.classes
    });
    return <a className={cx(classes.root, className)} onClick={onClick} href={href}>
            <Text className={classes.linkLabel} typo="sectionPageOrButton">{label}</Text>
        </a>
});

const useStyles = tss.withNestedSelectors<"linkLabel">().create(({ theme, classes }) => ({
    "root": {
        "padding": "25px 50px 25px 50px",
        "textDecoration": "none",
        "border": `solid ${theme.colors.bloodOrange} 1px`,
        "transition": "background-color 300ms",
        [`&:hover .${classes.linkLabel}`]: {
            "color": theme.colors.white
        },
        ":hover": {
            "backgroundColor": theme.colors.darkGray
        }
    },
    "linkLabel": {
        "color": theme.colors.indigo,
        "textTransform": "uppercase",
        "marginBlock": 0,
        "transition": "color 300ms"
    }

}))