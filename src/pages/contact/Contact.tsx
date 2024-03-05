import { memo } from "react";
import { declareComponentKeys } from "@/i18n";
import { Hero } from "./Hero";
import { Form } from "./Form";
import { Book } from "./Book";




export const Contact = memo(() => {
    return <div>
        <Hero />
        <Form />
        <Book />
    </div>

});

export const { i18n } = declareComponentKeys<
    "pageTitle" |
    "pageSubtitle" |
    "introParagraph" |
    "formTitle" |
    "formNamePlaceholder" |
    "formTelPlaceholder" |
    "formEmailPlaceholder" |
    "formMessagePlaceholder" |
    "formNameNonValid" |
    "formTelNonValid" |
    "formEmailNonValid" |
    "formMessageNonValid" |
    "formSend" |
    "bookingTitle" |
    "bookingButtonLabel" |
    "or" |
    "sending" |
    "sent"
>()({ Contact })