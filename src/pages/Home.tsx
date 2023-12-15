import { tss } from "../theme/tss"
import { declareComponentKeys } from "../i18n";
import { Text } from "../theme/Text"
import { useTranslation } from "../i18n";
import { Slider } from "../components/Slider";
import slide1 from "../assets/svg/comment/Slide 2 - Processus/1- recueil-des-besoins.svg";
import slide2 from "../assets/svg/comment/Slide 2 - Processus/2-creation-du-parcours.svg";
import slide3 from "../assets/svg/comment/Slide 2 - Processus/3-pilotage.svg";

export function Home() {


    const { t } = useTranslation({ Home });

    const { classes } = useStyles()

    return (
        <div className={classes.root}>
            <Text typo="siteTitle">{t("title")}</Text>
            <Slider 
                variant="numbered"
                slides={[
                    {
                        "title": "Example Titre 1",
                        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus ornare interdum. Proin eu interdum dui. Nam at consequat libero. Cras laoreet ex dolor, sed viverra purus imperdiet ac.",
                        "secondParagraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus ornare interdum. Integer pellentesque odio vitae ipsum semper varius.",
                        "button": {
                            "label": "robin des bois",
                            "href": "",
                        },
                        "leftIllustrationUrl": slide1
                    },
                    {
                        "title": "Example Titre 2",
                        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus ornare interdum. Proin eu interdum dui. Nam at consequat libero. Cras laoreet ex dolor, sed viverra purus imperdiet ac.",
                        "secondParagraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus ornare interdum. Integer pellentesque odio vitae ipsum semper varius.",
                        "button": {
                            "label": "robin des bois",
                            "href": "",
                        },
                        "leftIllustrationUrl": slide2
                    },
                    {
                        "title": "Example Titre 3",
                        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus ornare interdum. Proin eu interdum dui. Nam at consequat libero. Cras laoreet ex dolor, sed viverra purus imperdiet ac.",
                        "secondParagraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus ornare interdum. Integer pellentesque odio vitae ipsum semper varius.",
                        "button": {
                            "label": "robin des bois",
                            "href": "",
                        },
                        "leftIllustrationUrl": slide3
                    },
                ]}
            />
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