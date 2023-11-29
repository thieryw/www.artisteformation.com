import { useState, memo, useRef } from 'react';
import type { ReactNode } from "react";
import { tss } from "../theme";
import { Text } from "../theme/Text";
import { useConstCallback } from "powerhooks/useConstCallback";
import { Logo } from "./Logo";
import type { Link } from "../tools/link";
import { LinkButton } from "./LinkButton";


export type HeaderProps = {
    links: Link[];
    currentLinkLabel?: string;
    logo?: ReactNode;
    contact?: ReactNode;
    smallPrint?: ReactNode;
    buttonLink?: Link;
    logoLinks?: ({
        logo: ReactNode;
    } & Link)[],
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
}

export function Header(props: HeaderProps) {
    const { links, className, logoLinks, currentLinkLabel, logo, contact, smallPrint, buttonLink } = props;
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);


    const { classes, cx, theme } = useStyles({ isOpen, "classesOverrides": props.classes });

    const toggleMenu = useConstCallback(() => {
        setIsOpen(!isOpen);
    })


    const handleMenuItemClick = useConstCallback(() => {
        setIsOpen(false);
    })


    return (
        <div ref={ref} className={cx(classes.root, className)}>
            <div>
                <button
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    aria-label="drop down menu button"
                    onClick={toggleMenu}
                    className={classes.button}
                >
                </button>

            </div>
            <div className={classes.menu} role="menu">
                {
                    buttonLink !== undefined &&
                    <LinkButton
                        {
                        ...buttonLink
                        }
                        className={classes.linkButton}
                    />

                }
                <div className={classes.contactWrapper}>

                    {
                        logo !== undefined &&
                        <div>
                            {
                                typeof logo === "string" ?
                                    <Logo width={119} logoUrl={logo} /> :
                                    logo
                            }
                        </div>
                    }
                    {

                        contact !== undefined &&
                        <div className={classes.contact}>
                            {
                                contact
                            }
                        </div>
                    }

                    {
                        logoLinks !== undefined &&
                        <div className={classes.logoLinks}>
                            {
                                logoLinks.map(({ logo, label, ...rest }, index) => <a
                                    key={label}
                                    {...rest}
                                    aria-label={label}
                                    style={{
                                        "marginRight": index === logoLinks.length - 1 ? undefined : theme.spacing.iconSpacing

                                    }}
                                >{typeof logo === "string" ?
                                    <Logo width={62} logoUrl={logo} /> :
                                    logo
                                    }
                                </a>)
                            }
                        </div>
                    }
                    {
                        smallPrint !== undefined &&
                        <div>
                            {smallPrint}
                        </div>

                    }


                </div>
                <div className={classes.linksWrapper}>
                    {
                        links.map(({ href, label, onClick }, index) => <div
                            onClick={handleMenuItemClick}
                            key={label}
                            style={{
                                "marginBottom": index === links.length - 1 ? undefined : theme.spacing.listElementGap
                            }}
                        >
                            <Link
                                key={label}
                                href={href}
                                onClick={onClick}
                                label={label}
                                isActive={label === currentLinkLabel}
                            />
                        </div>)
                    }

                </div>

            </div>

        </div>
    );
};



const useStyles = tss.withParams<{ isOpen: boolean }>().create(({ isOpen, theme }) => {
    return ({
        "root": {
            "zIndex": 4000,
            "position": "fixed",
            "top": 0,
            "left": 0

        },
        "linkButton": {
            "position": "absolute",
            "top": 100,
            "right": 290


        },
        "logoLinks": {
            "display": "flex",
            "marginTop": theme.spacing.textGap,
            "marginBottom": theme.spacing.textGap
        },
        "menu": {
            "position": "absolute",
            "display": "flex",
            "alignItems": "center",
            "top": 0,
            "transition": "height 600ms",
            "height": isOpen ? theme.windowInnerHeight : 0,
            "width": theme.windowInnerWidth,
            "backgroundColor": theme.colors.lighterGray,
            "overflow": "hidden",
            "pointerEvents": !isOpen ? "none" : undefined
        },
        "button": {
            "position": "relative",
            "zIndex": 4001
        },
        "contactWrapper": {
            "marginRight": 392,
            "marginLeft": 243

        },
        "contact": {
            "marginTop": theme.spacing.textGap,

        },
        "linksWrapper": {

        }

    })
})


const { Link } = (() => {

    type LinkProps = HeaderProps["links"][number] & {
        className?: string;
        classes?: {
            link?: string;
            underline?: string;
        };
        isActive: boolean;
    };



    const Link = memo((props: LinkProps) => {
        const { href, label, onClick, className, classes: classesProp, isActive } = props;
        const { classes, cx } = useStyles({ isActive })
        const ref = useRef<HTMLDivElement>(null);



        return <div
            className={cx(classes.root, className)}
            ref={ref}
            role="menuitem"
        >
            <a
                href={href}
                onClick={onClick}
                className={classes.link}
            >
                <div className={cx(classes.underline, classesProp?.underline)}></div>
                <Text
                    typo="menuItem"
                    className={cx(classes.text, classesProp?.link)}
                >
                    {label}
                </Text>

            </a>
        </div>

    })

    const useStyles = tss
        .withNestedSelectors<"underline" | "text">()
        .withParams<{ isActive: boolean }>()
        .create(({ classes, theme, isActive }) => ({

            "root": {
                "position": "relative"

            },
            "link": {
                "textDecoration": "none",
                "display": "flex",
                "alignItems": "center",
                [`&:hover .${classes.underline}`]: {
                    "width": theme.spacing.buttonGap,
                    "backgroundColor": theme.colors.bloodOrange
                },
                [`&:hover .${classes.text}`]: {
                    "color": theme.colors.bloodOrange
                }

            },
            "underline": {
                "position": "relative",
                "height": 2,
                "transition": "width 500ms, background-color 500ms",
                "backgroundColor": !isActive ? theme.colors.indigo : theme.colors.bloodOrange,
                "marginRight": 24,
                "width": !isActive ? 0 : theme.spacing.buttonGap
            },
            "text": {
                "transition": "color 500ms",
                "color": !isActive ? undefined : theme.colors.bloodOrange
            }
        }))


    return { Link }

})();