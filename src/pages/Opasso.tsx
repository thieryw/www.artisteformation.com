import { declareComponentKeys, useTranslation } from "@/i18n";
import { memo } from "react";
import { breakpointValues, Text, tss } from "@/theme";
import { MiniArticle } from "@/components/MiniArticle";
import { LinkButton } from "@/components/LinkButton";
import programPdf from "@/assets/pdf/programme_2021-methode-pedagogique-rythmique-o-passo-lucas-caviatta.pdf";



export const Opasso = memo(() => {
    const { t } = useTranslation("Opasso");
    const { classes, cx, theme } = useStyles();
    return <div className={classes.root}>
        <section className={classes.hero}>
            <Text typo="sectionPageOrButton">{t("heroSurtitle")}</Text>
            <Text className={classes.heroText} typo="heading1">{t("heroTitle")}</Text>
            <Text className={cx(classes.heroText, classes.heroParagraph)} typo="paragraph">{t("heroParagraph")}</Text>
        </section>
        <section className={classes.sessions}>
            <div className={classes.sessionWrapper}>
                <Text typo="heading2">{t("sessionsTitle")}</Text>
                <ul>
                    {
                        [t("session1"), t("session2"), t("session3")].map((session, index) => <li className={classes.sessionLi} key={index}>
                            <Text className={classes.sessionText} typo="paragraph">{session}</Text>
                        </li>)
                    }
                </ul>
            </div>
            <div className={classes.divider}></div>
            <div className={classes.priceWrapper}>
                <Text typo="heading2">{t("priceTitle")}</Text>
                <MiniArticle 
                    numberTitle={t("price")}
                    subtitle={t("priceInfo")}
                    titleColor={theme.colors.linden}
                />

            </div>
        </section>
        <section className={classes.youtubeSection}>
            <iframe className={classes.youtube} src="https://www.youtube.com/embed/2rNRr5OGuJo?si=Lv7SsqzvQ9GYPule" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}></iframe>

        </section>

        <section className={classes.program}>
            <div className={classes.programInner}>
                <Text typo="heading2">{t("methodTitle")}</Text>
                <Text className={classes.programParagraph} typo="paragraph">{t("methodParagraph")}</Text>
                <div className={classes.buttonWrapper}>
                    <LinkButton
                        href="https://www.institutodopasso-fr.org/formations"
                        label={t("methodButton1")}
                        className={classes.button1}
                        openInNewTab={true}
                    />
                    <LinkButton
                        href={programPdf}
                        label={t("methodButton2")}
                        variant="filled"
                        openInNewTab={true}
                    />
                </div>

            </div>

        </section>

    </div>
});

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "paddingTop": theme.windowInnerWidth < breakpointValues.sm ? 150 : 250,

        },
        "hero": {
            "display": "grid",
            "gridTemplateColumns": "1fr",
            "justifyItems": "center",
            "gap": 40,
            ...(() => {
                const value = 20;
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }
            })(),
            "marginBottom": 120
        },
        "heroText": {
            "textAlign": "center"

        },
        "heroParagraph": {
            "maxWidth": 680

        },
        "sessionLi": {
            "color": theme.colors.darkGray

        },
        "sessionText": {
            "color": theme.colors.darkGray

        },
        "divider": {
            "width": 0,
            "height": 250,
            "borderLeft": "1px solid",
            "borderColor": theme.colors.lightGray,
            ...(() => {
                const value = 120;
                return {
                    "marginLeft": value,
                    "marginRight": value
                }
            })(),
            ...(theme.windowInnerWidth < breakpointValues.sm ? {
                "display": "none"
            } : {})
        },
        "sessions": {
            "display": "flex",
            "alignItems": "flex-start",
            "justifyContent": "center",
            ...(theme.windowInnerWidth < breakpointValues.sm ? {
                "flexDirection": "column",
                "alignItems": "center"
            } : {}),
            "marginBottom": 100
        },
        "sessionWrapper": {
            ...(theme.windowInnerWidth >= breakpointValues.sm ? {
                "width": 300
            } : {
                "marginBottom": 50
            })

        },
        "priceWrapper": {
            ...(theme.windowInnerWidth >= breakpointValues.sm ? {
                "width": 300,
                "display": "flex",
                "flexDirection": "column",
                "alignItems": "center",
            } : {})
        },
        "youtubeSection": {
            "display": "flex",
            "justifyContent": "center",
            "marginBottom": 130

        },
        "youtube": {
            "border": "none",
            ...(theme.windowInnerWidth >= breakpointValues.sm ? {
                "width": 840,
                "height": 465

            } : {
                "width": "95vw",
                "height": "55vw"
            })


        },
        "program": {
            "display": "flex",
            "justifyContent": "center",
            "marginBottom": theme.windowInnerWidth < breakpointValues.sm ? 100 : 230,
            ...(()=>{
                const value = 30;
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }
            })()

        },
        "programInner": {
            "display": "grid",
            "gridTemplateColumns": theme.windowInnerWidth < breakpointValues.sm ? "1fr" : "1050px",
            "gap": 50

        },
        "programParagraph": {
            "color": theme.colors.darkGray

        },
        "buttonWrapper": {
            "display": "flex",
            ...(theme.windowInnerWidth < breakpointValues.sm ? {
                "flexDirection": "column",
                "alignItems": "flex-start"
            } : {})
        },
        "button1": {
            ...(theme.windowInnerWidth < breakpointValues.sm ? {
                "marginBottom": 40
            } : {
                "marginRight": 40

            })
        }
    })
})


export const { i18n } = declareComponentKeys<
    | "heroSurtitle"
    | "heroTitle"
    | "heroParagraph"
    | "sessionsTitle"
    | "session1"
    | "session2"
    | "session3"
    | "priceTitle"
    | "price"
    | "priceInfo"
    | "methodTitle"
    | "methodParagraph"
    | "methodButton1"
    | "methodButton2"
>()({ Opasso })