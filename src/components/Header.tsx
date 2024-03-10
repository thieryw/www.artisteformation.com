import { useState, memo, useRef } from 'react';
import type { ReactNode } from "react";
import { breakpointValues, tss } from "../theme";
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



    const toggleMenu = useConstCallback(() => {
        setIsOpen(!isOpen);
    })

    const handleMenuItemClick = useConstCallback(() => {
        setIsOpen(false);
    })

    const { classes, cx, theme } = useStyles({ isOpen, "classesOverrides": props.classes });


    return (
        <header className={cx(classes.root, className)}>
            <ToggleMenuButton
                isActive={isOpen}
                onClick={toggleMenu}
                className={classes.toggleMenuButton}
            />
            <div className={classes.menu} role="menu">
                {
                    (() => {
                        if (theme.windowInnerWidth < breakpointValues.sm) {
                            return undefined
                        }
                        return <>
                            {
                                buttonLink !== undefined &&
                                <LinkButton
                                    {
                                    ...buttonLink
                                    }
                                    className={classes.linkButton}
                                />

                            }
                        </>
                    })()

                }
                {
                    (() => {
                        if (theme.windowInnerWidth < breakpointValues.sm) {
                            return undefined;
                        }
                        return <div className={classes.contactWrapper}>

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
                                            className={classes.logoLink}
                                            style={{
                                                "marginRight": index === logoLinks.length - 1 ? undefined : theme.spacing.iconSpacing,
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
                    })()
                }
                <div className={classes.mobileWrapper}>
                    {
                        (() => {
                            if (logo === undefined || theme.windowInnerWidth >= breakpointValues.sm) {
                                return undefined;
                            }
                            return <div className={classes.mobileLogoWrapper}>
                                {
                                    typeof logo === "string" ?
                                        <Logo width={90} logoUrl={logo} /> :
                                        logo
                                }
                            </div>


                        })()
                    }

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
                    {
                        (() => {
                            if (theme.windowInnerWidth < breakpointValues.sm) {
                                return <>
                                    {
                                        buttonLink !== undefined &&
                                        <LinkButton
                                            {
                                            ...buttonLink
                                            }
                                            className={classes.linkButton}
                                        />

                                    }
                                </>

                            }
                            return undefined;
                        })()

                    }

                    {
                        (() => {
                            if (logoLinks === undefined || theme.windowInnerWidth >= breakpointValues.sm) {
                                return undefined;
                            }
                            return <div className={classes.logoLinks}>
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
                        })()
                    }
                    {
                        (() => {
                            if (smallPrint === undefined || theme.windowInnerWidth >= breakpointValues.sm) {
                                return undefined;
                            }
                            return <div>
                                {smallPrint}
                            </div>
                        })()
                    }

                </div>

            </div>

        </header>
    );
};



const useStyles = tss.withParams<{ isOpen: boolean }>().create(({ isOpen, theme }) => {
    const transitionTime = 600;
    return ({
        "root": {
            "position": "relative",
            "top": 0,
            "left": 0,
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "width": "100vw"

                    }
                }
                return {
                    "width": "100%",

                }
            })(),

        },
        "logoLink": {
            "transition": "transform 400ms",
            ":hover": {
                "transform": "scale(1.05)"
            }

        },
        "mobileWrapper": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "flex-start",
                        "paddingLeft": 25

                    }
                }
                return {

                }
            })()

        },
        "toggleMenuButton": {
            "position": "absolute",
            "zIndex": 4002,
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "top": 45,
                        "right": 35

                    }
                }
                return {
                    "top": 80,
                    "right": 220,

                }
            })()
        },
        "linkButton": {
            "transition": `opacity ${transitionTime}ms, background-color 300ms`,
            "opacity": isOpen ? 1 : 0,
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {}
                }
                return {

                    "position": "absolute",
                    "top": 55,
                    "right": 324,
                }
            })()


        },
        "logoLinks": {
            "display": "flex",
            "marginTop": theme.spacing.textGap,
            "marginBottom": theme.spacing.textGap
        },
        "mobileLogoWrapper": {
            "marginTop": 20,
            "marginBottom": 60

        },
        "menu": {
            "position": "fixed",
            "zIndex": 4001,
            "display": "flex",
            "transition": `top ${transitionTime}ms`,
            "width": "100%",
            "backgroundColor": theme.colors.lighterGray,
            ...(()=>{
                if(theme.windowInnerWidth < breakpointValues.sm){
                    return {
                        "top": isOpen ? 0 : -theme.windowInnerHeight,
                        "height": "100vh",
                        "overflow": "auto"
                    }
                }
                return {
                    "top": isOpen ? 0 : "-100%",
                    "height": "100%",
                    "overflow": "hidden",
                    "minHeight": 650,
                    "alignItems": "center"

                }
            })(),
            "pointerEvents": !isOpen ? "none" : undefined,
        },
        "contactWrapper": {
            "marginRight": 392,
            "marginLeft": 243,
            "transition": `opacity ${transitionTime}ms`,
            "opacity": isOpen ? 1 : 0,
            "transitionDelay": !isOpen ? undefined : `${transitionTime / 2}ms`

        },
        "contact": {
            "marginTop": theme.spacing.textGap,

        },
        "linksWrapper": {
            "transition": `opacity ${transitionTime}ms`,
            "opacity": isOpen ? 1 : 0,
            "transitionDelay": !isOpen ? undefined : `${transitionTime / 2}ms`,
            "marginBottom": (() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return 40;
                }
                return undefined;
            })()

        }

    })
})

const { ToggleMenuButton } = (() => {

    type ToggleMenuButtonProps = {
        onClick: () => void;
        isActive: boolean;
        className?: string;
    };

    const ToggleMenuButton = memo((props: ToggleMenuButtonProps) => {

        const { onClick, className, isActive } = props;
        const handleClick = useConstCallback(() => {
            onClick();
        })
        const { classes, cx } = useStyles({ isActive })

        return <button
            aria-haspopup="true"
            aria-expanded={isActive}
            aria-label="drop down menu button"
            onClick={handleClick}
            className={cx(classes.root, className)}
        >
            <div className={cx(classes.line, classes.line1)}></div>
            <div className={cx(classes.line, classes.line2)}></div>
            <div className={cx(classes.line, classes.line3)}></div>
        </button>

    });

    const useStyles = tss.withParams<{ isActive: boolean }>().create(({ isActive, theme }) => ({
        "root": {
            "width": 40,
            "height": 30,
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "space-around",
            "cursor": "pointer",
            "position": "relative",
            "zIndex": 4001,
            "border": "none",
            "backgroundColor": "transparent",
            "outline": "none"
        },
        "line": {
            "display": "block",
            "height": 0,
            "borderTop": `solid ${theme.colors.bloodOrange} 2px`,
            "width": "100%",
            //"background": theme.colors.bloodOrange,
            "transition": "all 0.3s ease"
        },
        "line1": {
            "transform": isActive ? "translateY(9px) rotate(45deg)" : undefined,
        },
        "line2": {
            "opacity": isActive ? 0 : undefined
        },
        "line3": {
            "transform": isActive ? "translateY(-9px) rotate(-45deg)" : undefined

        },

    }))

    return { ToggleMenuButton }
})();

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