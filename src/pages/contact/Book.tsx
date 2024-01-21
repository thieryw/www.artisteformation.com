import { memo } from "react"
import { tss, Text } from "@/theme";
import { useTranslation } from "@/i18n";
import { LinkButton } from "@/components/LinkButton";


export const Book = memo(() => {

    const { t } = useTranslation("Contact")
    const { classes } = useStyles();

    return <section className={classes.root}>
        <Text className={classes.title} typo="heading2">{t("bookingTitle")}</Text>

        <LinkButton 
            variant="outlined"
            href=""
            label={t("bookingButtonLabel")}
        />

    </section>
})

const useStyles = tss.create(() => {
    return ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "marginTop": 300,
            "marginBottom": 200
        },
        "title": {
            "marginBottom": 80,
            "width": 700,
            "textAlign": "center"

        }
    })
})