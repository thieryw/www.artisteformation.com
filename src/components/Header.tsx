import { useState, memo, useRef, useEffect } from 'react';
import type { ReactNode } from "react";
import { breakpointValues, tss } from "../theme";
import { Text } from "../theme/Text";
import { useConstCallback } from "powerhooks/useConstCallback";
import { Logo } from "./Logo";
import type { Link } from "../tools/link";
import { LinkButton } from "./LinkButton";
import type { Variants } from "framer-motion";
import { motion, useAnimation } from "framer-motion";
import { getScrollableParent } from "powerhooks/getScrollableParent";
import type { LinkButtonProps } from "@/components/LinkButton";
import { useDomRect } from 'powerhooks';


const linksVariants: Variants = {
    "hidden": {
        "opacity": 1
    },
    "visible": {
        "opacity": 1,
        "transition": {
            "staggerChildren": 0.1,
            "delay": 1.2
        }

    }
}

const linkVariants: Variants = {
    "hidden": {
        "y": "100%"
    },
    "visible": {
        "y": 0
    }
}

const buttonVariants: Variants = {
    "hidden": {
        "opacity": 0
    },
    "visible": {
        "opacity": 1
    }

}
const logoVariants: Variants = {
    "hidden": {
        "opacity": 0,
        "scale": 0.8
    },
    "visible": {
        "opacity": 1,
        "scale": 1

    }
}

const socialLinksVariants: Variants = {
    "hidden": {
        "opacity": 1
    },
    "visible": {
        "opacity": 1,
        "transition": {
            "delay": 1.8,
            "staggerChildren": 0.1
        }
    }
}
const socialLinkVariants: Variants = {
    "hidden": {
        "x": "-100%"
    },
    "visible": {
        "x": 0
    }
}


export type HeaderProps = {
    links: (Link & { ishoverable?: boolean; sublinks?: Link[] })[];
    currentLinkLabel?: string;
    logo?: ReactNode;
    contact?: ReactNode;
    smallPrint?: ReactNode;
    buttonLink?: LinkButtonProps;
    logoLinks?: ({
        logo: ReactNode;
    } & Link)[],
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
}

export function Header(props: HeaderProps) {
    const { links, className, logoLinks, currentLinkLabel, logo, contact, smallPrint, buttonLink } = props;
    const [isOpen, setIsOpen] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        if (isOpen) {
            controls.start("visible");
            return;
        };
        controls.start("hidden")

    }, [isOpen, controls])



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
                                <motion.div
                                    initial="hidden"
                                    variants={buttonVariants}
                                    animate={controls}
                                    transition={{
                                        "ease": "easeInOut",
                                        "duration": 0.9,
                                        "delay": 1.4
                                    }}
                                >
                                    <LinkButton
                                        className={classes.linkButton}
                                        {
                                        ...buttonLink
                                        }
                                    />
                                </motion.div>

                            }
                        </>
                    })()

                }

                <div className={classes.menuInner}>

                    {
                        (() => {
                            if (theme.windowInnerWidth < breakpointValues.sm) {
                                return undefined;
                            }
                            return <div className={classes.contactWrapper}>

                                {
                                    logo !== undefined &&
                                    <motion.div
                                        initial="hidden"
                                        variants={logoVariants}
                                        animate={controls}
                                        transition={{
                                            "ease": "easeInOut",
                                            "delay": 0.9,
                                            "duration": 0.8
                                        }}
                                    >
                                        {
                                            typeof logo === "string" ?
                                                <Logo width={119} logoUrl={logo} /> :
                                                logo
                                        }
                                    </motion.div>
                                }
                                {

                                    contact !== undefined &&
                                    <motion.div
                                        className={classes.contact}
                                        initial="hidden"
                                        variants={buttonVariants}
                                        animate={controls}
                                        transition={{
                                            "ease": "easeInOut",
                                            "delay": 0.7,
                                            "duration": 0.9
                                        }}

                                    >
                                        {
                                            contact
                                        }
                                    </motion.div>
                                }

                                {
                                    logoLinks !== undefined &&
                                    <motion.div
                                        className={classes.logoLinks}
                                        initial="hidden"
                                        animate={controls}
                                        variants={socialLinksVariants}
                                    >
                                        {
                                            logoLinks.map(({ logo, label, ...rest }, index) => <div
                                                className={classes.logoLink}
                                                key={label}
                                                style={{
                                                    "overflow": "hidden",
                                                    "marginRight": index === logoLinks.length - 1 ? undefined : theme.spacing.iconSpacing,
                                                }}
                                            >
                                                <motion.div
                                                    variants={socialLinkVariants}
                                                    transition={{
                                                        "ease": "easeInOut",
                                                        "duration": 0.8
                                                    }}
                                                >
                                                    <a
                                                        {...rest}
                                                        aria-label={label}
                                                    >{typeof logo === "string" ?
                                                        <Logo width={62} logoUrl={logo} /> :
                                                        logo
                                                        }
                                                    </a>
                                                </motion.div>
                                            </div>)
                                        }
                                    </motion.div>
                                }
                                {
                                    smallPrint !== undefined &&
                                    <motion.div
                                        initial="hidden"
                                        variants={buttonVariants}
                                        animate={controls}
                                        transition={{
                                            "ease": "easeInOut",
                                            "duration": 0.9,
                                            "delay": 0.8
                                        }}
                                        onClick={handleMenuItemClick}
                                    >
                                        {smallPrint}
                                    </motion.div>

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

                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={linksVariants}
                            className={classes.linksWrapper}
                        >
                            {
                                links.map(({ href, label, onClick, ishoverable, sublinks }, index) => <div
                                    key={label}
                                    style={{
                                        "marginBottom": index === links.length - 1 ? undefined : theme.spacing.listElementGap,
                                        "overflow": "hidden",
                                    }}
                                >
                                    <motion.div
                                        variants={linkVariants}
                                        transition={{
                                            "ease": "easeInOut",
                                            "duration": 0.9
                                        }}

                                    >

                                        <Link
                                            key={label}
                                            href={href}
                                            onClick={onClick}
                                            label={label}
                                            isActive={label === currentLinkLabel}
                                            ishoverable={ishoverable}
                                            sublinks={sublinks}
                                            handleMenuItemClick={handleMenuItemClick}
                                        />

                                    </motion.div>
                                </div>)
                            }

                        </motion.div>
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
                                return <div onClick={handleMenuItemClick}>
                                    {smallPrint}
                                </div>
                            })()
                        }

                    </div>
                </div>

            </div>

        </header>
    );
}



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
            "transition": "transform 600ms",
            ":hover": {
                "transform": "scale(1.1)",
            },

        },
        "mobileWrapper": {
            ...(() => {
                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "display": "flex",
                        "flexDirection": "column",
                        "alignItems": "flex-start",
                        "paddingLeft": 25,
                        "position": "absolute",
                        "top": 0,
                        "left": 0

                    }
                }
                return {
                    "alignSelf": "center",
                    "paddingTop": 150,
                    "paddingBottom": 100

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
                    "zIndex": 4001
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
            "marginBottom": 60,

        },
        "menuInner": {

            "display": "flex",
            "position": "relative",
            "height": "100%",
            "minHeight": 800,
            ...(() => {
                if (theme.windowInnerHeight < 850 && theme.windowInnerWidth >= breakpointValues.sm) {
                    return {
                        "paddingTop": 250,
                    }
                }
                return {
                    "alignItems": "center",
                }
            })(),
            ...(theme.windowInnerWidth > 2000 ? {
                "justifyContent": "center"

            } : {})
        },
        "menu": {
            "position": "fixed",
            "zIndex": 4001,
            "top": 0,
            "left": 0,
            "transition": `height ${transitionTime}ms`,
            "width": "100%",
            "backgroundColor": theme.colors.lighterGray,
            ...(() => {

                if (theme.windowInnerWidth < breakpointValues.sm) {
                    return {
                        "height": isOpen ? theme.windowInnerHeight : 0,
                        "overflow": "auto"
                    }
                }
                return {
                    "height": isOpen ? "100%" : 0,
                    "overflow": "auto"
                }

            })(),
        },
        "contactWrapper": {
            "marginRight": 320,
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
        const ref = useRef<HTMLButtonElement>(null);

        useEffect(() => {
            if (ref.current === null) {
                return;
            }
            const scrollableParent = getScrollableParent({
                "doReturnElementIfScrollable": true,
                "element": ref.current
            })
            function preventScroll() {
                scrollableParent.scrollTo({
                    "top": 0,
                    "behavior": "instant"
                })
            }
            (() => {
                if (!isActive) {
                    return;
                }
                scrollableParent.addEventListener("scroll", preventScroll);
            })()

            return () => scrollableParent.removeEventListener("scroll", preventScroll);


        }, [ref.current, isActive])

        return <button
            aria-haspopup="true"
            ref={ref}
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
        handleMenuItemClick: () => void;
    };



    const Link = memo((props: LinkProps) => {
        const { href, label, onClick, className, classes: classesProp, isActive, ishoverable = false, sublinks, handleMenuItemClick } = props;
        const { classes, cx, theme } = useStyles({ isActive })
        const [isMouseIn, setIsMouseIn] = useState(false)
        const { ref, domRect: { height } } = useDomRect();



        return <div
            className={cx(classes.root, className)}
            role="menuitem"
        >
            {
                (() => {
                    if (!ishoverable) {
                        return <div onClick={handleMenuItemClick}><a
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

                        </a></div>
                    }
                    return <div
                        onMouseEnter={() => { setIsMouseIn(true) }}
                        onMouseLeave={() => { setIsMouseIn(false) }}
                        className={classes.linkWrapper}
                    >
                        <div
                            className={classes.link}
                        >
                            <div className={cx(classes.underline, classesProp?.underline)}></div>
                            <Text
                                typo="menuItem"
                                className={cx(classes.text, classesProp?.link)}
                            >
                                {label}
                            </Text>

                        </div>
                        <div

                            style={{
                                "width": "100%",
                                "height": isMouseIn ? height : 0,
                                "transition": "height 500ms",
                                "maxWidth": 700,
                                "paddingLeft": theme.windowInnerWidth < breakpointValues.sm ? 0 : 40
                            }}
                        >
                            <ul ref={ref}>
                                {
                                    sublinks !== undefined &&
                                    sublinks.map(({ href, label, onClick }, index) => <li
                                        style={{
                                            "marginBottom": index === sublinks.length - 1 ? undefined : 30
                                        }}
                                        key={label}
                                        onClick={handleMenuItemClick}
                                    >
                                        <a style={{
                                            "textDecoration": "none"
                                        }} href={href} onClick={onClick}>
                                            <Text className={classes.sublinkText} typo="heading4">{label}</Text>
                                        </a>
                                    </li>)
                                }

                            </ul>

                        </div>
                    </div>
                })()
            }
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
                "cursor": "pointer",
                [`&:hover .${classes.underline}`]: {
                    "width": theme.spacing.buttonGap,
                    "backgroundColor": theme.colors.bloodOrange
                },
                [`&:hover .${classes.text}`]: {
                    "color": theme.colors.bloodOrange
                }

            },
            "linkWrapper": {
                [`&:hover .${classes.underline}`]: {
                    "width": theme.spacing.buttonGap,
                    "backgroundColor": theme.colors.bloodOrange
                },
                [`&:hover .${classes.text}`]: {
                    "color": theme.colors.bloodOrange
                }

            },
            "sublinkText": {
                ":hover": {
                    "color": theme.colors.bloodOrange,
                    "transition": "color 500ms"
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