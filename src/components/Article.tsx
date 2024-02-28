import { memo } from "react";
import type { ReactNode } from "react";
import { tss, Text, breakpointValues } from "../theme";
import { LinkButton, type LinkButtonProps } from "./LinkButton";

export type ArticleProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    isCentered?: boolean;
    title?: ReactNode;
    smallSurtitle?: string;
    smallSubtitle?: string;
    hasSmallLine?: boolean;
    paragraph?: string;
    secondParagraph?: string;
    button?: Omit<LinkButtonProps, "classes" | "className">;
};

export const Article = memo((props: ArticleProps) => {

    const {
        button,
        className,
        hasSmallLine,
        isCentered,
        paragraph,
        secondParagraph,
        smallSubtitle,
        smallSurtitle,
        title
    } = props;

    const { classes, cx } = useStyles({
        "isCentered": isCentered ?? false,
        "hasSecondParagraph": secondParagraph !== undefined,
        "classesOverrides": props.classes
    });

    return <div className={cx(classes.root, className)}>

        {
            smallSurtitle !== undefined &&
            <div className={classes.smallSurtitleWrapper}>
                <Text className={classes.smallTitle} typo="sectionPageOrButton">{smallSurtitle}</Text>
            </div>
        }

        {
            title !== undefined &&
            <div className={classes.titleWrapper}>
                {
                    (() => {
                        if (typeof title === "string") {
                            return <Text className={classes.title} typo="heading2">{title}</Text>;
                        };
                        return title;
                    })()

                }

            </div>
        }
        {
            smallSubtitle !== undefined &&
            <div className={classes.smallSubtitleWrapper}>
                <Text className={classes.smallTitle} typo="sectionPageOrButton">{smallSubtitle}</Text>
            </div>
        }
        {
            hasSmallLine &&
            <div className={classes.smallLine}></div>
        }
        {
            (paragraph !== undefined || secondParagraph) &&
            <div className={classes.paragraphWrapper}>
                {
                    paragraph !== undefined &&
                    <Text className={cx(classes.paragraph, classes.firstParagraph)} typo="paragraph">{paragraph}</Text>
                }
                {
                    secondParagraph !== undefined &&
                    <Text className={cx(classes.paragraph, classes.secondParagraph)} typo="paragraph">{secondParagraph}</Text>
                }
            </div>
        }
        {
            button !== undefined &&
            <LinkButton
                className={classes.button}
                {
                ...button
                }
            />
        }
    </div>
})


const useStyles = tss.withParams<
    Required<Pick<ArticleProps, "isCentered">> &
    {
        hasSecondParagraph: boolean;
    }
>().create(({ isCentered, theme, hasSecondParagraph }) => ({
    "root": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": isCentered ? "center" : "flex-start",
        "justifyContent": "center"
    },
    "smallTitle": {
        "marginBottom": theme.spacing.textGap,
        "color": theme.colors.bloodOrangeVariant,
        "textTransform": "uppercase"
    },
    "title": {
        "textAlign": isCentered ? "center" : "left"
    },
    "titleWrapper": {
        "marginBottom": theme.spacing.textGap,
        "& > *": {
            "textAlign": isCentered ? "center" : "left"

        }

    },
    "smallLine": {
        "width": theme.spacing.textGap,
        "height": 2,
        "backgroundColor": theme.colors.bloodOrange,
        "marginBottom": theme.spacing.textGap
    },
    "paragraphWrapper": {
        "marginBottom": theme.spacing.textGap,
        ...(hasSecondParagraph ? {
            "display": "flex",
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                        "flexDirection": "column"
                        
                    }
                }
                return {
                    "flexDirection": isCentered ? "column" : undefined,

                }
            })()
        } : {})
    },
    "paragraph": {
        "textAlign": isCentered ? "center" : "left",
        "color": theme.colors.darkGray,
        "flex": 1,
    },
    "firstParagraph": {
        ...(() => {
            if(theme.windowInnerWidth < breakpointValues.sm){
                return {
                    "marginBottom": theme.spacing.textGap
                }
            }
            if (!hasSecondParagraph) {
                return {};
            }
            const value = theme.spacing.textGap
            if (isCentered) {
                return {
                    "marginBottom": value
                };
            };

            return {
                "marginRight": value
            };

        })()

    },
    "secondParagraph": {},
    "button": {},
    "smallSurtitleWrapper": {},
    "smallSubtitleWrapper": {}
}))