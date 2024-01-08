import { memo } from "react";
import { tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { Article } from "@/components/Article";
import { routes } from "@/router";
import jpgCesar from "@/assets/jpg/formateurs/Galerie formateurs/2-cesar-guigue.jpeg";
import jpgHerzog from "@/assets/jpg/formateurs/Galerie formateurs/6-mathieu-herzog.jpeg";
import jpgPaillot from "@/assets/jpg/formateurs/Galerie formateurs/4-laurence-paillot.jpeg";
import jpgRoger from "@/assets/jpg/formateurs/Galerie formateurs/8-patrick-roger.jpeg";
import webpCesar from "@/assets/webp/formateurs/Galerie formateurs/2-cesar-guigue.webp";
import webpHerzog from "@/assets/webp/formateurs/Galerie formateurs/6-mathieu-herzog.webp";
import webpPaillot from "@/assets/webp/formateurs/Galerie formateurs/4-laurence-paillot.webp";
import webpRoger from "@/assets/webp/formateurs/Galerie formateurs/8-patrick-roger.webp";


const jpgArray = [
    jpgCesar,
    jpgHerzog,
    jpgPaillot,
    jpgRoger
]

const webpArray = [
    webpCesar,
    webpHerzog,
    webpPaillot,
    webpRoger
]


export const Teachers = memo(() => {
    const { classes } = useStyles();
    const { t } = useTranslation("Home");
    return <section className={classes.root}>
        <Article
            className={classes.article}
            smallSurtitle={t("teachersSurTitle")}
            title={t("teachersTitle")}
            paragraph={t("teachersParagraph")}
            button={{
                "label": t("teachersButtonLabel"),
                ...routes.teachers().link,
            }}
            hasSmallLine={true}

        />

        <div className={classes.grid}>
            {
                webpArray.map((webp, index) => <div>
                    <picture>
                        <source srcSet={webp} type="image/webp" />
                        <source srcSet={jpgArray[index]} type="image/jpeg" />
                        <img className={classes.image} src={webp} alt="teacher portrait" />
                    </picture>
                </div>)
            }
        </div>


    </section>
})

const useStyles = tss.create(() => {
    return ({
        "root": {
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            ...(()=>{
                const value = 245;
                return {
                    "paddingTop": value,
                    "paddingBottom": value

                }
            })()
        },
        "article": {
            "maxWidth": 319,
            "marginRight": 134
            

        },
        "grid": {
            "display": "grid",
            "gap": 8,
            "gridTemplateColumns": "repeat(2, 1fr)",
            "width": 660,
            "marginLeft": 134
        },
        "image": {
            "objectFit": "cover",
            "height": "100%",
            "width": "100%"
        }

    })
})