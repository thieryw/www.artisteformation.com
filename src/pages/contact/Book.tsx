import { memo } from "react"
import { tss, Text, breakpointValues } from "@/theme";
import { useTranslation } from "@/i18n";
import { LinkButton } from "@/components/LinkButton";


export const Book = memo(() => {

    const { t } = useTranslation("Contact")
    const { classes, theme } = useStyles();

    return <section className={classes.root}>
        <Text style={{
            "marginBottom": 110,
            "color": theme.colors.darkGray3
        }} typo="sectionPageOrButton">{t("or")}</Text>

        {
            (()=>{
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return <>
                        <Text style={{
                            "marginBottom": 60
                        }} typo="additionalTitle">OU</Text>
                        <Text className={classes.title} typo="heading5">{t("bookingTitle")}</Text>
                    </>
                }
                return <Text className={classes.title} typo="heading2">{t("bookingTitle")}</Text>
            })()
        }


        <LinkButton
            variant="outlined"
            href=""
            label={t("bookingButtonLabel")}
        />

    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    const value = 80;
                    const paddingRightLeft = 25
                    return {
                        "marginTop": value,
                        "marginBottom": value,
                        "paddingLeft": paddingRightLeft,
                        "paddingRight": paddingRightLeft

                    }
                }
                return {
                    "marginTop": 150,
                    "marginBottom": 200,

                }
            })()
        },
        "title": {
            "textAlign": "center",
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "width": 300,
                        "marginBottom": 45

                    }
                }
                return {
                    "width": 700,
                    "marginBottom": 80,

                }
            })()

        }
    })
})