import { memo } from "react";
import type { ReactNode } from "react";
import type { Link } from "../tools/link";
import { tss, Text } from "../theme";
import { Logo } from "./Logo";


export type FooterProps = {
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>
    siteTitle: ReactNode;
    siteLogo: ReactNode;
    links: Link[];
    contactTitle?: string;
    socialLinks?: ({ icon: ReactNode } & Link)[];
    smallPrint?: ReactNode;
    paragraphTitle?: string;
    paragraph?: string;
    callToActionTitle?: string;
    buttonLink?: Link;
    currentLinkLabel?: string;

};

export const Footer = memo((props: FooterProps) => {
    const {
        links,
        siteLogo,
        siteTitle,
        buttonLink,
        callToActionTitle,
        className,
        contactTitle,
        currentLinkLabel,
        paragraph,
        paragraphTitle,
        smallPrint,
        socialLinks
    } = props;
    const {classes, cx} = useStyles({"classesOverrides": props.classes});
    return <footer className={cx(classes.root, className)}>
        <div className={classes.titleAndLogoWrapper}>
            <div className={classes.logo}>
                {
                    typeof siteLogo === "string" ?
                    <Logo width={140} logoUrl={siteLogo} /> :
                    siteLogo
                }

            </div>
            <div className={classes.siteTitle}>
                {
                    typeof siteTitle === "string" ?
                        <Text typo="heading3">{siteTitle}</Text> :
                        siteTitle
                }

            </div>

        </div>

    </footer>
})


const useStyles = tss.create(() => ({
    "root": {},
    "titleAndLogoWrapper": {},
    "logo": {},
    "siteTitle": {}

}))