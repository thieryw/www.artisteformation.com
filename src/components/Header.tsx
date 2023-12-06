import { useState, memo, useRef, useEffect } from 'react';
import type { ReactNode } from "react";
import { tss } from "../theme";
import { Text } from "../theme/Text";
import { useConstCallback } from "powerhooks/useConstCallback";
import { Logo } from "./Logo";
import type { Link } from "../tools/link";
import { LinkButton } from "./LinkButton";
import { getScrollableParent } from "powerhooks/getScrollableParent";


export type HeaderProps = {
    links: Link[];
    currentLinkLabel?: string;
    logo?: ReactNode;
    contact?: ReactNode;
    smallPrint?: ReactNode;
    buttonLink?: Link;
    zoomProviderInterval?: {
        min: number;
        max: number;

    },
    logoLinks?: ({
        logo: ReactNode;
    } & Link)[],
    className?: string;
    classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
}

export function Header(props: HeaderProps) {
    const { zoomProviderInterval, links, className, logoLinks, currentLinkLabel, logo, contact, smallPrint, buttonLink } = props;
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(ref.current === null){
            return;
        };


        const scrollableParent = getScrollableParent({
            "doReturnElementIfScrollable": true,
            "element": ref.current
        });


        scrollableParent.style.overflow = (()=>{
            if(!isOpen){
                return "";
            }

            return "hidden";
        })()

    }, [ref.current, isOpen])

    const toggleMenu = useConstCallback(() => {
        setIsOpen(!isOpen);
    })

    const handleMenuItemClick = useConstCallback(() => {
        setIsOpen(false);
    })

    const { classes, cx, theme } = useStyles({ isOpen, zoomProviderInterval, "classesOverrides": props.classes });


    return (
        <header ref={ref} className={cx(classes.root, className)}>
            <ToggleMenuButton
                isActive={isOpen}
                onClick={toggleMenu}
                className={classes.toggleMenuButton}
            />
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

        </header>
    );
};



const useStyles = tss.withParams<{ isOpen: boolean } & Pick<HeaderProps, "zoomProviderInterval">>().create(({ isOpen, zoomProviderInterval, theme }) => {
    const openHeaderHeight = (() => {
        function getHeight(referenceHeight: number) {
            if (zoomProviderInterval === undefined) {
                return referenceHeight
            }
            if (theme.windowInnerWidth >= zoomProviderInterval.min && theme.windowInnerWidth <= zoomProviderInterval.max) {
                return referenceHeight / (theme.windowInnerWidth / zoomProviderInterval.max);
            }

            return referenceHeight;

        }
        if (theme.windowInnerHeight < 800) {
            getHeight(800);
        }

        return getHeight(theme.windowInnerHeight);

    })();
    const transitionTime = 600;
    return ({
        "root": {
            //"position": "fixed",
            "top": 0,
            "left": 0,
            "width": "100%",
            "height": 150,
            "zIndex": 4000,

        },
        "toggleMenuButton": {
            "position": "absolute",
            "top": 125,
            "right": 186,
        },
        "linkButton": {
            "position": "absolute",
            "top": 100,
            "right": 290,
            "transition": `opacity ${transitionTime}ms, background-color 300ms`,
            "opacity": isOpen ? 1 : 0,


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
            "top": isOpen ? 0 : -openHeaderHeight,
            "transition": `top ${transitionTime}ms`,
            "height": openHeaderHeight,
            "width": "100%",
            "backgroundColor": theme.colors.lighterGray,
            "overflow": "hidden",
            "pointerEvents": !isOpen ? "none" : undefined
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
            "transitionDelay": !isOpen ? undefined : `${transitionTime / 2}ms`

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
            "height": 2,
            "width": "100%",
            "background": theme.colors.bloodOrange,
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