import { memo } from 'react';
import { FormspreeProvider, useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "@/i18n";
import { tss, typography, Text } from "@/theme";


export const Form = memo(() => {

    const [state, handleSubmit] = useForm("xjvnkepy")
    const { t } = useTranslation("Contact");
    const {classes } = useStyles();



    return (
        <FormspreeProvider project="2385580700561571129">
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Text className={classes.formTitle} typo="heading2">{t("formTitle")}</Text>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <input
                            placeholder={t("formNamePlaceholder")}
                            type="text"
                            name="name"
                            id="name"
                            className={classes.inputField}
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                        <input
                            placeholder={t("formTelPlaceholder")}
                            type="tel"
                            name="tel"
                            id="tel"
                            className={classes.inputField}
                        />
                        <ValidationError
                            prefix="Tel"
                            field="tel"
                            errors={state.errors}
                        />
                        <input
                            placeholder={t("formTelPlaceholder")}
                            type="email"
                            name="email"
                            id="email"
                            className={classes.inputField}
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <textarea
                            className={classes.textarea}
                            id="message"
                            name="message"
                            placeholder={t("formMessagePlaceholder")}
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button className={classes.button} type="submit" disabled={state.submitting}>
                            <Text className={classes.buttonText} typo="sectionPageOrButton">{t("formSend")}</Text>
                        </button>
                    </form>

                </div>

            </div>
        </FormspreeProvider>
    );
});


const useStyles = tss.withNestedSelectors<"buttonText">().create(({ theme, classes }) => {
    return ({
        "root": {
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",

        },
        "wrapper": {
            "width": 840,
            "background": theme.colors.white,
            "padding": 120,
            "boxSizing": "border-box"

        },
        "formTitle": {
            "marginBottom": 80


        },
        "form": {
            "display": "grid",
            "gap": 50,

        },
        "inputField": {
            "border": "none",
            "backgroundColor": "transparent",
            ":focus": {
                "outline": "none"
            },
            "::placeholder": {
                ...typography.additionalTitle,
                "textTransform": "uppercase"
            },

            "borderBottom": `solid ${theme.colors.backgroundTertiary} 2px`
        },
        "textarea": {
            "resize": "none",
            "border": "none",
            ":focus": {
                "outline": "none"
            },
            "::placeholder": {
                ...typography.additionalTitle,
                "textTransform": "uppercase"
            },
            "borderBottom": `solid ${theme.colors.backgroundTertiary} 2px`,
            "height": 100
        },
        "button": {
            "width": 225,
            "marginTop": 100,
            "height": 75,
            "border": `solid 1px`,
            "borderColor": theme.colors.bloodOrange,
            "backgroundColor": theme.colors.bloodOrange,
            "transition": "background-color 500ms",
            "cursor": "pointer",
            "justifySelf": "center",
            [`&:hover .${classes.buttonText}`]: {
                "color": theme.colors.bloodOrange

            },
            ":hover": {
                "backgroundColor": "transparent"
            }

        },
        "buttonText": {
            "transition": "color 500ms",
            "color": theme.colors.white

        }

    })
})