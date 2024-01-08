import { memo } from "react";
import { tss, Text } from "@/theme";


export type MiniArticleProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
    numberTitle?: string;
    subtitle?: string;
    paragraph?: string;
    titleColor?: string;
}

export const MiniArticle = memo((props: MiniArticleProps) => {

    const {numberTitle, paragraph, subtitle, titleColor, className} = props;

    const {classes, cx} = useStyles({
        "classesOverrides": props.classes,
        titleColor
    });

    return <div className={cx(classes.root, className)}>
        <div className={classes.titleWrapper}>
            <Text className={classes.numberTitle} typo="heading1">{numberTitle}</Text>
            <Text className={classes.subtitle} typo="additionalTitle">{subtitle}</Text>
        </div>

        <Text className={classes.paragraph} typo="paragraph">{paragraph}</Text>

    </div>
});

const useStyles = tss.withParams<Pick<MiniArticleProps, "titleColor">>().create(
    ({ titleColor }) => {
        return ({
            "root": {

            },
            "titleWrapper": {

            },
            "paragraph": {},
            "numberTitle": {
                "color": titleColor
            },
            "subtitle": {}
        })
    })