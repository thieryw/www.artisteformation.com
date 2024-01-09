import { memo } from "react"
import { tss } from "@/theme";
import { useTranslation } from "@/i18n";
import { Slider } from "@/components/Slider"
import { routes } from "@/router";
import jpgIntermittent from "@/assets/jpg/comment/Slide 1 - Vos droits/1-intermittent-du-spectacle.jpeg";
import jpgSalarier from "@/assets/jpg/comment/Slide 1 - Vos droits/2-salarie.jpeg";
import jpgCreator from "@/assets/jpg/comment/Slide 1 - Vos droits/3-createur-dentreprise.jpeg";
import jpgIndependent from "@/assets/jpg/comment/Slide 1 - Vos droits/4-travailleur-independant.jpeg";
import jpgCompany from "@/assets/jpg/comment/Slide 1 - Vos droits/5-entreprise.jpeg";
import webpIntermittent from "@/assets/webp/comment/Slide 1 - Vos droits/1-intermittent-du-spectacle.webp";
import webpSalarier from "@/assets/webp/comment/Slide 1 - Vos droits/2-salarie.webp";
import webpCreator from "@/assets/webp/comment/Slide 1 - Vos droits/3-createur-dentreprise.webp";
import webpIndependent from "@/assets/webp/comment/Slide 1 - Vos droits/4-travailleur-independant.webp";
import webpCompany from "@/assets/webp/comment/Slide 1 - Vos droits/5-entreprise.webp";


export const NamedSlider = memo(() => {

    const { t } = useTranslation("How")
    const { classes } = useStyles();

    return <section className={classes.root}>
        <Slider 
            className={classes.slider}
            variant="named"
            slides={[
                {
                    "name": t("sliderIntermittentName"),
                    "imageUrl": webpIntermittent,
                    "imageSources": [
                        {
                            "srcSet": webpIntermittent,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": jpgIntermittent,
                            "type": "image/jpeg"
                        }
                    ],
                    "smallSurtitle": t("sliderSurtitle"),
                    "title": t("sliderIntermittentTitle"),
                    "paragraph": t("sliderIntermittentParagraph"),
                    "button": {
                        "label": t("sliderButtonLabel"),
                        ...routes.contact().link
                    }
                },
                {
                    "name": t("sliderTenantName"),
                    "imageUrl": webpSalarier,
                    "imageSources": [
                        {
                            "srcSet": webpSalarier,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": jpgSalarier,
                            "type": "image/jpeg"
                        }
                    ],
                    "smallSurtitle": t("sliderSurtitle"),
                    "title": t("sliderTenantTitle"),
                    "paragraph": t("sliderTenantParagraph"),
                    "button": {
                        "label": t("sliderButtonLabel"),
                        ...routes.contact().link
                    }
                },
                {
                    "name": t("sliderCreatorName"),
                    "imageUrl": webpCreator,
                    "imageSources": [
                        {
                            "srcSet": webpCreator,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": jpgCreator,
                            "type": "image/jpeg"
                        }
                    ],
                    "smallSurtitle": t("sliderSurtitle"),
                    "title": t("sliderCreatorTitle"),
                    "paragraph": t("sliderCreatorParagraph"),
                    "button": {
                        "label": t("sliderButtonLabel"),
                        ...routes.contact().link
                    }
                },
                {
                    "name": t("sliderIndependentName"),
                    "imageUrl": webpIndependent,
                    "imageSources": [
                        {
                            "srcSet": webpIndependent,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": jpgIndependent,
                            "type": "image/jpeg"
                        }
                    ],
                    "smallSurtitle": t("sliderSurtitle"),
                    "title": t("sliderIndependentTitle"),
                    "paragraph": t("sliderIndependentParagraph"),
                    "button": {
                        "label": t("sliderButtonLabel"),
                        ...routes.contact().link
                    }
                },
                {
                    "name": t("sliderCompanyName"),
                    "imageUrl": webpCompany,
                    "imageSources": [
                        {
                            "srcSet": webpCompany,
                            "type": "image/webp"
                        },
                        {
                            "srcSet": jpgCompany,
                            "type": "image/jpeg"
                        }
                    ],
                    "smallSurtitle": t("sliderSurtitle"),
                    "title": t("sliderCompanyTitle"),
                    "paragraph": t("sliderCompanyParagraph"),
                    "button": {
                        "label": t("sliderButtonLabel"),
                        ...routes.contact().link
                    }
                },
            ]}

        />


    </section>
})

const useStyles = tss.create(() => {
    return ({
        "root": {
            "marginTop": 179,
        },
        "slider": {
            "position": "relative",
            "left": 260
        }
    })
})