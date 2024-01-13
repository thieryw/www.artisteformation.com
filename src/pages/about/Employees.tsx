import { memo } from "react"
import { tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import cecileJpg from "@/assets/jpg/a-propos/nos-petites-mains/1-cecile-garcia.jpeg";
import cecileWebp from "@/assets/webp/a-propos/nos-petites-mains/1-cecile-garcia.webp";
import elisabethJpg from "@/assets/jpg/a-propos/nos-petites-mains/2-elisabeth-knnablian.jpeg";
import elisabethWebp from "@/assets/webp/a-propos/nos-petites-mains/2-elisabeth-knnablian.webp";

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
    const { classes } = useStyles();

    return <section className={classes.root}>

        <Article 
            className={classes.article}
            title={t("employeesTitle")}
            smallSubtitle={t("employeesSubtitle")}
            paragraph={t("employeesParagraph")}
            isCentered={true}
        />

        <div className={classes.grid}>
            {
                employeePortraits.map((portrait, index) => {
                    if(portrait === undefined){
                        return <div key={index} className={classes.empty}></div>;
                    }

                    return <picture key={index}>
                        <source srcSet={portrait.webp} type="image/webp"/>
                        <source srcSet={portrait.jpg} type="image/jpeg"/>

                        <img className={classes.image} src={portrait.webp} alt="employee portrait"/>
                    </picture>
                })
            }

        </div>


    </section>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            ...(()=>{
                const value = 200;
                return {
                    "marginTop": value,
                    "marginBottom": value
                }
            })()
        },
        "article": {
            "width": 800,
            "marginBottom": 100

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