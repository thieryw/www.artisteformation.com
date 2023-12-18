import { tss } from "@/theme/tss"
import { declareComponentKeys } from "@/i18n";
import { Hero } from "./Hero";
import { Intro } from "./Intro";

export function Home() {



    const { classes } = useStyles()

    return (
        <div className={classes.root}>
            <Hero />
            <Intro />
        </div>
    )
}

const useStyles = tss
    .create(() => ({
        "root": {},
    }))

export const { i18n } = declareComponentKeys<
    "title" |
    "subtitle" |
    "introTitle" |
    "introSubtitle" |
    "introParagraph" |
    "introPartnerNumber" |
    "introCarerNumber" |
    "introSatisfactionPercentage" |
    "introPartner" |
    "introCarer" |
    "introSatisfaction"

>()({ Home });