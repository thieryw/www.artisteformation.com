import { useMemo, useEffect, useState, useRef } from "react";
import { Home } from "./pages/home/Home";
import { useRoute, routes, routeDefs } from "./router";
import { Text } from "./theme/Text";
import { breakpointValues, tss } from "./theme/tss";
import { Header } from "./components/Header";
import type { HeaderProps } from "./components/Header";
import { declareComponentKeys, useTranslation } from "./i18n";
import fbIcon from "./assets/svg/fb-icon.svg"
import instaIcon from "./assets/svg/insta-icon.svg";
import youtubeIcon from "./assets/svg/youtube-icon.svg";
import siteLogo from "./assets/svg/logo.svg";
import ReactMarkdown from "react-markdown";
import { Footer } from "./components/Footer";
import { How } from "@/pages/how/How";
import { Teachers } from "@/pages/teachers/Teachers";
import { About } from "@/pages/about/About";
import { Logo } from "./components/Logo";
import { Contact } from "@/pages/contact/Contact";
import { TransitionComponent } from "@/components/TransitionComponent";
import pattern from "@/assets/svg/pattern.svg";
import { enableScreenScaler } from "screen-scaler/react";
import { getScrollableParent } from "powerhooks/getScrollableParent";
import { NotFound } from "@/pages/four-oh-four";
import {Legal} from "@/pages/Legal";
import { Teachings } from "./pages/Teachings";

enableScreenScaler({
  targetWindowInnerWidth: ({ zoomFactor, actualWindowInnerWidth }) => {
    if (actualWindowInnerWidth < 600 || actualWindowInnerWidth >= 1920) {
      return actualWindowInnerWidth;
    }
    return 1920 * zoomFactor;
  },

  rootDivId: "root"
});
export function App() {
  const route = useRoute();
  const { t } = useTranslation({ App });
  const links = useMemo<(HeaderProps["links"][number] & { routeName: keyof typeof routeDefs })[]>(() => ([
    {
      ...routes.home().link,
      "label": t("homeLink"),
      "routeName": "home"
    },
    {
      ...routes.how().link,
      "label": t("howLink"),
      "routeName": "how"
    },
    {
      ...routes.teachers().link,
      "label": t("teachersLink"),
      "routeName": "teachers"

    },
    {
      ...routes.teachings().link,
      "label": t("teachingsLink"),
      "routeName": "teachings"

    },
    {
      ...routes.about().link,
      "label": t("aboutLink"),
      "routeName": "about"
    },
    {
      ...routes.contact().link,
      "label": t("contactLink"),
      "routeName": "contact"
    },
  ]), [])
  const [isTransitioning, setIsTransitioning] = useState(true);

  const { classes, theme } = useStyles();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current === null) {
      return;
    };
    const scrollableParent = getScrollableParent({
      "doReturnElementIfScrollable": true,
      "element": ref.current
    })
    scrollableParent.scrollTo({
      "top": 0,
    })

  }, [route.name, ref.current])

  useEffect(() => {
    if(route.name === "legal" || route.name === "teachings"){
      setIsTransitioning(false);
      return;
    }

    const startTransition = () => {
      setIsTransitioning(true);
    };

    const endTransition = () => {
      setIsTransitioning(false);
    };

    startTransition();

    const transitionDelay = 2000;
    const timer = setTimeout(() => endTransition(), transitionDelay);

    return () => {
      clearTimeout(timer);
    };
  }, [route.name]);

  const [initialScreenWidth] = useState(theme.windowInnerWidth);

  useEffect(() => {
    function handleResize() {
      if (initialScreenWidth < breakpointValues.sm) {
        if (window.screen.width < breakpointValues.sm) {
          return;
        }
        window.location.reload();
        return;
      }

      if (window.screen.width >= breakpointValues.sm) {
        return;
      }
      window.location.reload();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, [])

  return (<div ref={ref} className={classes.root}>
    <div className={classes.headerWrapper}>
      {
        (route.name !== "home" && theme.windowInnerWidth >= breakpointValues.sm) &&
        <a {...routes.home().link}>
          <Logo
            logoUrl={siteLogo}
            width={120}
            className={classes.logo}
          />

        </a>

      }
      {
        theme.windowInnerWidth >= breakpointValues.sm &&
        <a {...routes.contact().link}>
          <Text className={classes.contactLink} typo="sectionPageOrButton">CONTACT</Text>
        </a>

      }
      <Header
        links={links}
        currentLinkLabel={links.find(({ routeName }) => routeName === route.name)?.label}
        logo={siteLogo}
        contact={<div>
          <Text className={classes.contactTitle} typo="heading4">{t("contactTitle")}</Text>
          <a className={classes.email} href="https://outlook.office365.com/book/cesarreservation@artisteformation.com/"><Text className={classes.contactText} typo="paragraph">{t("email")}</Text></a>
        </div>}
        smallPrint={
          <div>
            <a className={classes.legalLink} {...routes.legal().link}><Text typo="quote">{t("legalLink")}</Text></a>
            <Text typo="quote">{t("copyRight")}</Text>
            <ReactMarkdown className={classes.designerCredits}>{t("designerCredits")}</ReactMarkdown>
          </div>
        }
        logoLinks={[
          {
            "href": "https://www.facebook.com/artisteformation/",
            "logo": fbIcon,
            "label": "Facebook link"
          },
          {
            "href": "",
            "logo": instaIcon,
            "label": "Instagram link",
          },
          {
            "href": "https://www.youtube.com/@cfj757683",
            "logo": youtubeIcon,
            "label": "Youtube link"
          }
        ]}
        buttonLink={{
          "openInNewTab": true,
          "label": t("appointmentLink"),
          "href": "https://outlook.office365.com/book/cesarreservation@artisteformation.com/"
        }}

      />

    </div>




    <TransitionComponent
      isActive={isTransitioning}
      logoUrl={route.name === "home" ? siteLogo : undefined}
      splashScreenTitle={route.name === "home" ? t("siteTitle") : undefined}
      backgroundImage={route.name !== "home" ? pattern : undefined}
      {
      ...(() => {
        switch (route.name) {
          case "how": return {
            "transitionText": t("howLink"),
            "backgroundColor": theme.colors.bloodOrange
          };
          case "about": return {
            "transitionText": t("aboutLink"),
            "backgroundColor": theme.colors.linden
          };
          case "contact": return {
            "transitionText": t("contactLink"),
            "backgroundColor": theme.colors.darkYellow
          };
          case "teachers": return {
            "transitionText": t("teachersLink"),
            "backgroundColor": theme.colors.indigo
          };
          case "home": return {
            "backgroundColor": theme.colors.backgroundTertiary
          }
          default: return {
            "isActive": false
          };
        }

      })()
      }
    />

    <div style={{
      "opacity": isTransitioning && route.name ? 0 : 1
    }} className={classes.bodyWrapper}>
      <div className={classes.body}>
        {route.name === "home" && <Home />}
        {route.name === "how" && <How />}
        {route.name === "teachers" && <Teachers />}
        {route.name === "about" && <About />}
        {route.name === "contact" && <Contact />}
        {route.name === "legal" && <Legal />}
        {route.name === "teachings" && <Teachings />}
        {!route.name && <NotFound />}



      </div>
      <Footer
        className={classes.footer}
        links={links}
        currentLinkLabel={links.find(({ routeName }) => routeName === route.name)?.label}
        siteLogo={siteLogo}
        contactTitle={t("footerContactTitle")}
        smallPrint={<div className={classes.smallPrint}>
          <Text typo="quote">{t("photographerCredits")}</Text>
          <Text typo="quote">{t("copyRight")}</Text>
          <ReactMarkdown className={classes.designerCredits}>{t("designerCredits")}</ReactMarkdown>
        </div>}
        socialLinks={[
          {
            "href": "https://www.facebook.com/artisteformation/",
            "icon": fbIcon,
            "label": "facebook link"
          },
          {
            "href": "",
            "icon": instaIcon,
            "label": "instagram link"
          },
          {
            "href": "https://www.youtube.com/@cfj757683",
            "icon": youtubeIcon,
            "label": "youtube link"
          },
        ]}
        siteTitle={t("siteTitle")}
        paragraphTitle={t("footerParagraphTitle")}
        paragraph={t("footerParagraph")}
        callToActionTitle={t("footerCallToActionTitle")}
        buttonLink={{
          "label": t("footerLinkButtonLabel"),
          ...routes.contact().link
        }}

      />



    </div>
  </div>
  )
}

const useStyles = tss.create(({ theme }) => ({

  "root": {
    "position": "relative"

  },
  "bodyWrapper": {
    "backgroundColor": theme.colors.backgroundMain,
    "width": "100%",
    "position": "relative",
    "minHeight": "100%",
    "flexDirection": "column",
    "transition": "opacity 600ms",

  },
  "smallPrint": {
    ...(() => {
      if (theme.windowInnerWidth < breakpointValues.sm) {
        return {
          "display": "flex",
          "flexDirection": "column",
          "alignItems": "center",
          "marginBottom": 80
        }
      }
    })()


  },
  "logo": {
    "position": "absolute",
    "top": 50,
    "left": 120,
    "zIndex": 4000
  },
  "contactLink": {
    "position": "absolute",
    "top": 85,
    "right": 105,
    "zIndex": 4000,
    "color": theme.colors.indigo

  },
  "headerWrapper": {
    "height": 0,
    "transition": "opacity 1ms",
    "position": "absolute",
    "zIndex": 4000,
    ...(() => {
      if (theme.windowInnerWidth < breakpointValues.sm) {
        return {

        }
      }
      return {
        "width": "100%",

      }
    })()

  },
  "body": {
    "flex": "1 0 auto"

  },
  "footer": {
    "flexShrink": 0
  },
  "contactText": {
    "color": theme.colors.darkGray,
  },
  "contactTitle": {
    "marginBlock": 0,
  },
  "email": {
    "textDecoration": "none"
  },
  "legalLink": {
    "color": theme.colors.darkGray
  },
  "designerCredits": {
    ...theme.typography.quote,
    "position": "relative",
    "top": "-1em",
    "& a": {
      "color": theme.typography.quote.color

    }

  }
}))

export const { i18n } = declareComponentKeys<
  "homeLink" |
  "howLink" |
  "teachersLink" |
  "teachingsLink" |
  "aboutLink" |
  "contactLink" |
  "contactTitle" |
  "email" |
  "number" |
  "legalLink" |
  "copyRight" |
  "photographerCredits" |
  "designerCredits" |
  "appointmentLink" |
  "siteTitle" |
  "footerContactTitle" |
  "footerParagraphTitle" |
  "footerParagraph" |
  "footerCallToActionTitle" |
  "footerLinkButtonLabel"
>()({ App });

