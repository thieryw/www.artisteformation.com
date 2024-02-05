import { memo } from "react"
import { breakpointValues, tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import cecileJpg from "@/assets/jpg/a-propos/nos-petites-mains/1-cecile-garcia.jpeg";
import cecileWebp from "@/assets/webp/a-propos/nos-petites-mains/1-cecile-garcia.webp";
import elisabethJpg from "@/assets/jpg/a-propos/nos-petites-mains/2-elisabeth-knnablian.jpeg";
import elisabethWebp from "@/assets/webp/a-propos/nos-petites-mains/2-elisabeth-knnablian.webp";
import { employees } from "@/user/employees";
import { MobileSlider } from "@/components/MobileSlider";

const employeePortraits = [
    {
        "jpg": cecileJpg,
        "webp": cecileWebp
    },
    {
        "jpg": elisabethJpg,
        "webp": elisabethWebp
    },
    undefined,
    undefined,
    undefined
]


export const Employees = memo(() => {

    const { t } = useTranslation("About")
    const { classes, theme } = useStyles();

    return <section className={classes.root}>

        <Article
            className={classes.article}
            title={t("employeesTitle")}
            isCentered={true}
            {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "smallSurtitle": t("employeesSubtitle"),
                        "paragraph": t("employeesParagraphMobile")
                    }
                }

                return {
                    "smallSubtitle": t("employeesSubtitle"),
                    "paragraph": t("employeesParagraph")
                }
            })()
            }
        />

        {
            (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return <MobileSlider 
                        slides={employees.map(({fr, portraitUrl}) => ({
                            "image": {
                                "alt": "employee portrait",
                                "src": portraitUrl
                            },
                            "title": fr.name,
                            "paragraph": fr.profession,
                        }))}
                        startingPercentage={40}
                    />;

                }
                return <div className={classes.grid}>
                    {
                        employeePortraits.map((portrait, index) => {
                            if (portrait === undefined) {
                                return <div key={index} className={classes.empty}></div>;
                            }

                            return <picture key={index}>
                                <source srcSet={portrait.webp} type="image/webp" />
                                <source srcSet={portrait.jpg} type="image/jpeg" />

                                <img className={classes.image} src={portrait.webp} alt="employee portrait" />
                            </picture>
                        })
                    }
                </div>
            })()
        }


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
                    return {
                        "marginBottom": 130,
                        "marginTop": 75

                    }
                }
                return {
                    ...(() => {
                        const value = 200;
                        return {
                            "marginTop": value,
                            "marginBottom": value
                        }
                    })(),

                }
            })()
        },
        "article": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        ...(() => {
                            const value = 25;
                            return {
                                "paddingLeft": value,
                                "paddingRight": value
                            }
                        })()

                    }
                }
                return {
                    "width": 800,
                    "marginBottom": 100,

                }
            })()

        },
        "grid": {
            "display": "grid",
            "gridTemplateColumns": "repeat(5, 220px)",
            "gap": 28,
            "justifyContent": "center"
        },
        "empty": {
            "backgroundColor": theme.colors.darkGray3
        },
        "image": {
            "width": "100%",
            "height": "100%",
            "objectFit": "cover",
        }

    })
})