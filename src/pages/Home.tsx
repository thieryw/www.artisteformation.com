import { useRef, useReducer } from "react";
import { tss } from "../theme/tss"
import { declareComponentKeys } from "../i18n";
import { Text } from "../theme/Text"
import { useTranslation } from "../i18n";
import { Slider } from "../components/Slider";
import slide1 from "../assets/jpg/comment/Slide 1 - Vos droits/1-intermittent-du-spectacle.jpeg";
import slide2 from "../assets/jpg/comment/Slide 1 - Vos droits/2-salarie.jpeg";
import slide3 from "../assets/jpg/comment/Slide 1 - Vos droits/3-createur-dentreprise.jpeg";
/*import slide1 from "../assets/svg/comment/Slide 2 - Processus/1- recueil-des-besoins.svg";
import slide2 from "../assets/svg/comment/Slide 2 - Processus/2-creation-du-parcours.svg";
import slide3 from "../assets/svg/comment/Slide 2 - Processus/3-pilotage.svg";*/
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../tools/useIntersectionObserver";
import type { Variant } from "framer-motion";

export function Home() {


    const { t } = useTranslation({ Home });
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const variant = useRef<Record<string, Variant>>({
        "hidden": {
            "opacity": 0,
            "y": -40
        },
        "show": {}
    })
    const { ref } = useIntersectionObserver({
        "callback": ({ entry }) => {
            if(!entry.isIntersecting){
                variant.current.show = {};
                forceUpdate();
                return;
            }
            variant.current.show = {
                "opacity": 1,
                "y": 0
            }
            forceUpdate();
        },
        "threshold": 1
    }, [])

    const { classes } = useStyles()

    return (
        <div className={classes.root}>
            <Slider
                variant="named"
                slides={[
                    {
                        "name": "01. / ENGAGEMENT",
                        "smallSurtitle": "COMMENT CA MARCHE",
                        "title": "Example Titre 1",
                        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus ornare interdum. Proin eu interdum dui. Nam at consequat libero. Cras laoreet ex dolor, sed viverra purus imperdiet ac.",
                        "imageUrl": slide1,
                        "button": {
                            "label": "robin des bois",
                            "href": "",
                        },
                    },
                    {
                        "title": "Example Titre 2",
                        "name": "02. / FINANCEMENT",
                        "smallSurtitle": "COMMENT CA MARCHE",
                        "imageUrl": slide2,
                        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus ornare interdum. Proin eu interdum dui. Nam at consequat libero. Cras laoreet ex dolor, sed viverra purus imperdiet ac.",
                        "button": {
                            "label": "robin des bois",
                            "href": "",
                        },
                    },
                    {
                        "title": "Example Titre 3",
                        "name": "03. / ANALYSE & REPONSE",
                        "smallSurtitle": "COMMENT CA MARCHE",
                        "imageUrl": slide3,
                        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus ornare interdum. Proin eu interdum dui. Nam at consequat libero. Cras laoreet ex dolor, sed viverra purus imperdiet ac.",
                        "button": {
                            "label": "robin des bois",
                            "href": "",
                        },
                    },
                ]}
            />
            <Text typo="siteTitle">{t("title")}</Text>
            <Text typo="siteTitle">{t("title")}</Text>
            <Text typo="siteTitle">{t("title")}</Text>
            <Text typo="siteTitle">{t("title")}</Text>
            <motion.div
                //viewport={{ "once": true, "margin": "-200px"}}
                variants={variant.current}
                initial="hidden"
                animate="show"
                ref={ref}
                style={{
                    "border": "solid red 2px"
                }}
            >
                <Text typo="siteTitle">{t("title")}</Text>
            </motion.div>
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