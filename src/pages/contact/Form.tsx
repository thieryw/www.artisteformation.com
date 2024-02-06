import { memo } from 'react';
import { FormspreeProvider, useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "@/i18n";
import { tss, Text, breakpointValues } from "@/theme";


export const Form = memo(() => {

    const [state, handleSubmit] = useForm("xjvnkepy")
    const { t } = useTranslation("Contact");
    const {classes, theme } = useStyles();



    return (
        <FormspreeProvider project="2385580700561571129">
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    {
                        (()=>{
                            if(theme.windowInnerWidth < breakpointValues.sm){
                                return <div className={classes.mobileSeparator}></div>
                            }
                        })()
                    }
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
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                        "marginTop": 110,
                        ...(()=>{
                            const value = 25;
                            return {
                                "paddingLeft": value,
                                "paddingRight": value
                            }
                        })()
                    }
                }
            })()


        },
        "mobileSeparator": {
            "width": 85,
            "height": 0,
            "borderTop": `solid ${theme.colors.bloodOrange} 2px`,
            "transform": "rotate(90deg)"

        },
        "wrapper": {
            "background": theme.colors.white,
            "boxSizing": "border-box",
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                        "boxShadow": "0px 2px 20px 2px rgba(0, 0, 0, 0.1)",
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "center",
                        ...(()=>{
                            const value = 25;
                            return {
                                "paddingLeft": value,
                                "paddingRight": value,
                                "paddingBottom": 55
                            }
                        })()
                    }
                }
                return {
                    "padding": 120,
                    "width": 840,
                }
            })()

        },
        "formTitle": {
            "marginBottom": 80,
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                        "textAlign": "center",
                        "width": 300,
                        "marginTop": 100

                    }
                }
                return {

                }
            })()


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
                ...theme.typography.additionalTitle,
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
                ...theme.typography.additionalTitle,
                "textTransform": "uppercase"
            },
            "borderBottom": `solid ${theme.colors.backgroundTertiary} 2px`,
            "height": 100
        },
        "button": {
            "width": 225,
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
            },
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                        "marginTop": 60

                    }
                }
                return {

                    "marginTop": 100,
                }
            })()

        },
        "buttonText": {
            "transition": "color 500ms",
            "color": theme.colors.white

        }

    })
})