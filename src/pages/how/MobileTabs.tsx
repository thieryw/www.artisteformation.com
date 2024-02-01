import { memo } from "react"
import { tss, Text } from "@/theme";
import { useTranslation } from "@/i18n";
import { DropDown } from "@/components/DropDown";
import { Article } from "@/components/Article";
import svg1 from "@/assets/svg/comment/Slide 2 - Processus/1- recueil-des-besoins.svg";
import svg2 from "@/assets/svg/comment/Slide 2 - Processus/2-creation-du-parcours.svg";
import svg3 from "@/assets/svg/comment/Slide 2 - Processus/3-pilotage.svg";


export const MobileTabs = memo(() => {

    const { t } = useTranslation("How")
    const { classes } = useStyles();

    return <section className={classes.root}>
        <DropDown
            className={classes.tab} 
            tabName={t("mobileTabNeeds")}
            tabContent={<div>
                <div>
                    <img className={classes.image} src={svg1} alt="tab illustration" />
                </div>
                <Article 
                    title={<Text typo="heading3">{t("numberedSliderNeedsTitle")}</Text>}
                    paragraph={t("numberedSliderNeedsParagraph")}
                    secondParagraph={t("numberedSliderNeedsSecondParagraph")}
                    button={{
                        "href": "",
                        "label": t("numberedSliderNeedsButtonLabel")
                    }}

                />
            </div>}

        />
        <DropDown
            className={classes.tab} 
            tabName={t("mobileTabCreation")}
            tabContent={<div>
                <div>
                    <img className={classes.image} src={svg2} alt="tab illustration" />
                </div>
                <Article 
                    title={<Text typo="heading3">{t("numberedSliderCreationTitle")}</Text>}
                    paragraph={t("numberedSliderCreationParagraph")}
                    secondParagraph={t("numberedSliderCreationSecondParagraph")}
                    button={{
                        "href": "",
                        "label": t("numberedSliderCreationButtonLabel")
                    }}

                />
            </div>}

        />
        <DropDown
            className={classes.tab} 
            tabName={t("mobileTabPiloting")}
            tabContent={<div>
                <div>
                    <img className={classes.image} src={svg3} alt="tab illustration" />
                </div>
                <Article 
                    title={<Text typo="heading3">{t("numberedSliderPilotingTitle")}</Text>}
                    paragraph={t("numberedSliderPilotingParagraph")}
                    secondParagraph={t("numberedSliderPilotingSecondParagraph")}
                    button={{
                        "href": "",
                        "label": t("numberedSliderPilotingButtonLabel")
                    }}

                />
            </div>}

        />


    </section>
})

const useStyles = tss.create(() => {
    return ({
        "root": {
            ...(()=>{
                const value = 25;
                return {
                    "paddingLeft": value,
                    "paddingRight": value
                }

            })(),
            "marginTop": 70
        },
        "image": {
            "objectFit": "cover",
            "width": "100%",
            "marginBottom": 30
        },
        "tab": {
            "marginBottom": 40,
        }
    })
})