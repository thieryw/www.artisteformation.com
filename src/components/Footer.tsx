import { memo } from "react";
import type { ReactNode } from "react";
import type { Link } from "../tools/link";
import { tss, Text } from "../theme";
import { Logo } from "./Logo";
import { LinkButton } from "./LinkButton";


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
    const { classes, cx, theme } = useStyles({ "classesOverrides": props.classes });
    return <footer className={cx(classes.root, className)}>
        <div className={classes.upperElement}>
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
            <div className={classes.links}>
                {
                    links.map(({ label, href, onClick }, index) => <div style={{
                        "marginRight": index !== links.length - 1 ? 100 : undefined
                    }} key={label}><Link
                            label={label}
                            href={href}
                            onClick={onClick}
                            isActive={label === currentLinkLabel}
                        /></div>)
                }
            </div>

        </div>
        <div className={classes.bottomElement}>
            <div className={classes.contact}>
                {
                    contactTitle !== undefined &&
                    <Text className={classes.contactTitle} typo="heading4">{contactTitle}</Text>

                }
                {
                    socialLinks !== undefined &&
                    <div className={classes.socialMedia}>
                        {
                            socialLinks.map(({ icon, label, ...rest }, index) => <a
                                key={label}
                                {...rest}
                                aria-label={label}
                                style={{
                                    "marginRight": index === socialLinks.length - 1 ? undefined : theme.spacing.iconSpacing

                                }}
                            >{typeof icon === "string" ?
                                <Logo width={62} logoUrl={icon} /> :
                                icon
                                }
                            </a>)
                        }
                    </div>
                }
                {
                    smallPrint !== undefined &&
                    smallPrint
                }

            </div>
            <div className={classes.paragraph}>
                <Text typo="heading4">{paragraphTitle}</Text>
                <Text className={classes.paragraphText} typo="paragraph">{paragraph}</Text>
            </div>
            <div className={classes.callToAction}>
                {
                    callToActionTitle !== undefined &&
                    <Text typo="heading4">{callToActionTitle}</Text>
                }
                {
                    buttonLink !== undefined &&
                        <LinkButton 
                            {...buttonLink}
                            variant="filled"
                        />
                }

            </div>


        </div>

    </footer>
})


const useStyles = tss.create(({ theme }) => ({
    "root": {
        "position": "relative",
        "zIndex": 1
    },
    "bottomElement": {
        "display": "flex",
        "justifyContent": "space-between",
        "paddingLeft": 391,
        "paddingRight": 258,
        "paddingTop": 130,
        "paddingBottom": 87,
        "backgroundColor": theme.colors.lighterGray

    },
    "titleAndLogoWrapper": {
        "display": "flex",
        "alignItems": "center"
    },
    "logo": {
        "marginRight": theme.spacing.listElementGap
    },
    "siteTitle": {
        "width": theme.spacing.titleWidth
    },
    "upperElement": {
        "position": "relative",
        "height": theme.spacing.footerPaddingRightLeft,
        "borderBottom": `solid ${theme.colors.darkGray3} 1px`,
        "backgroundColor": theme.colors.backgroundSecondary,
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        ...(() => {
            const value = theme.spacing.footerPaddingRightLeft;
            return {
                "paddingLeft": value,
                "paddingRight": value

            }
        })()
    },
    "links": {
        "display": "flex",
        "height": "100%",
    },
    "contact": {},
    "socialMedia": {
        "display": "flex",
        "marginBottom": theme.spacing.textGap
    },

    "paragraph": {
        "width": 350,
        "height": 195,
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-between"
    },
    "paragraphText": {
        "color": theme.colors.darkGray,
        "lineHeight": "2em"

    },
    "contactTitle": {
        "marginBottom": theme.spacing.textGap

    },
    "callToAction": {
        "height": 195,
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "space-between"

    },
    "linkButton": {
        "backgroundColor": theme.colors.bloodOrange
    }


}));


const { Link } = (() => {
    type LinkProps = FooterProps["links"][number] & {
        className?: string;
        classes?: {
            link?: string;
            underline?: string;
        };
        isActive: boolean;
    };
    const Link = memo((props: LinkProps) => {
        const { href, isActive, label, className, onClick } = props;
        const { classes, cx } = useStyles({ isActive });
        return <div className={cx(classes.root, className)} key={label}><a className={classes.link} href={href} onClick={onClick}>
            <Text className={classes.linkText} typo="additionalTitle">{label}</Text>
            <div className={classes.underline}></div>
        </a></div>
    })

    const useStyles = tss
        .withNestedSelectors<"underline">()
        .withParams<{ isActive: boolean }>()
        .create(({ classes, theme, isActive }) => ({
            "root": {
                "minHeight": "100%",
                "display": "flex",
                "alignItems": "center",
                "position": "relative"
            },
            "underline": {
                "width": isActive ? "100%" : 0,
                "transition": "width 300ms",
                "height": 4,
                "backgroundColor": theme.colors.bloodOrange,
                "position": "absolute",
                "bottom": 0,
                "left": 0
            },

            "linkText": {
                "textTransform": "uppercase",
                "color": theme.colors.indigo
            },
            "link": {
                "textDecoration": "none",
                [`:hover .${classes.underline}`]: {
                    "width": "100%"
                }
            },

        }))

    return { Link }
})()