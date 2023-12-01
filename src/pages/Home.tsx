import { tss } from "../theme/tss"
import { declareComponentKeys } from "../i18n";
import { Text } from "../theme/Text"
import { useTranslation } from "../i18n";


export function Home() {


    const { t } = useTranslation({ Home });

    const { classes } = useStyles()

    return (
        <div className={classes.root}>
            <Text typo="siteTitle">{t("title")}</Text>
            <Text typo="siteTitle">{t("title")}</Text>
            <Text typo="siteTitle">{t("title")}</Text>
            <Text typo="siteTitle">{t("title")}</Text>
            <Text typo="siteTitle">{t("title")}</Text>
            <Text typo="siteTitle">{t("title")}</Text>
            <Text typo="siteTitle">{t("title")}</Text>
            <Text typo="siteTitle">{t("title")}</Text>
            <Text typo="siteTitle">{t("title")}</Text>
            <Text typo="siteTitle">{t("title")}</Text>
        </div>
    )
}

const useStyles = tss
    .create(() => ({
        "root": {},
    }))

export const { i18n } = declareComponentKeys<
    "title" |
    "count" |
    "edit" |
    "save" |
    "code" |
    "learnMore"

>()({ Home });