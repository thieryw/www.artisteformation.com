import { DropDown } from "@/components/DropDown";
import { memo } from "react"
import { Article } from "@/components/Article";
import { useTranslation } from "@/i18n"
import { Text, tss } from "@/theme";


export const MobileTabs = memo(() => {
    const { t } = useTranslation("Home");
    const { classes } = useStyles();
    return <div className={classes.root}>
        <Text className={classes.surtitle} typo="additionalTitle">{t("mobileTabSurtitle")}</Text>
        <Text className={classes.title} typo="heading1">{t("mobileTabTitle")}</Text>
        <DropDown
            className={classes.tab}
            tabName={t("sliderEngagementName")}
            tabContent={<Article
                title={<Text typo="heading3">{t("sliderEngagementTitle")}</Text>}
                paragraph={t("sliderEngagementParagraph1")}
                secondParagraph={t("sliderEngagementParagraph2")}
                button={{
                    "href": "",
                    "label": t("sliderButtonLabel")
                }}
            />}

        />
        <DropDown
            className={classes.tab}
            tabName={t("sliderFinancingName")}
            tabContent={<Article
                title={<Text typo="heading3">{t("sliderFinancingTitle")}</Text>}
                paragraph={t("sliderFinancingParagraph1")}
                secondParagraph={t("sliderFinancingParagraph2")}
                button={{
                    "href": "",
                    "label": t("sliderButtonLabel")
                }}
            />}

        />
        <DropDown
            tabName={t("sliderResponseName")}
            tabContent={<Article
                title={<Text typo="heading3">{t("sliderResponseTitle")}</Text>}
                paragraph={t("sliderResponseParagraph2")}
                secondParagraph={t("sliderResponseParagraph2")}
                button={{
                    "href": "",
                    "label": t("sliderButtonLabel")
                }}
            />}

        />
    </div>
});

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            ...(() => {
                const value = 25
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }
            })(),
            "marginTop": 70,
            "marginBottom": 120

        },
        "title": {

            "marginBottom": 60
        },
        "surtitle": {

            "color": theme.colors.bloodOrange,
            "marginBottom": 20
        },
        "tab": {
            "marginBottom": 40

        }
    })
})