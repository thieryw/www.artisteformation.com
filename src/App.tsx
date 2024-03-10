import { useMemo, useEffect, useState } from "react";
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

  useEffect(() => {

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

  useEffect(()=>{
    function handleResize() {
      if (initialScreenWidth < breakpointValues.sm) {
        if(window.screen.width < breakpointValues.sm){
          return;
        }
        window.location.reload();
        return;
      }

      if(window.screen.width >= breakpointValues.sm){
        return;
      }
      window.location.reload();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, [])

  return (<div className={classes.root}>
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
        (route.name !== "home" && theme.windowInnerWidth >= breakpointValues.sm) &&
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
          <a className={classes.email} href={`mailto:${t("email")}`}><Text className={classes.contactText} typo="paragraph">{t("email")}</Text></a>
          <Text className={classes.contactText} typo="paragraph">{t("number")}</Text>
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
            "href": "",
            "logo": fbIcon,
            "label": "Facebook link"
          },
          {
            "href": "",
            "logo": instaIcon,
            "label": "Instagram link",
          },
          {
            "href": "",
            "logo": youtubeIcon,
            "label": "Youtube link"
          }
        ]}
        buttonLink={{
          "label": t("appointmentLink"),
          ...routes.contact().link
        }}

      />

    </div>




    <TransitionComponent
      isActive={isTransitioning}
      backgroundColor={(() => {
        switch (route.name) {
          case "how": return theme.colors.bloodOrange;
          case "teachers": return theme.colors.linden;
          case "about": return theme.colors.darkYellow;
          case "contact": return theme.colors.indigo;
          default: return theme.colors.backgroundTertiary;
        }
      })()}
      logoUrl={route.name === "home" ? siteLogo : undefined}
      splashScreenTitle={route.name === "home" ? t("siteTitle") : undefined}
      backgroundImage={route.name !== "home" && route.name !== "legal" ? pattern : undefined}
      transitionText={(() => {
        switch (route.name) {
          case "how": return t("howLink");
          case "about": return t("aboutLink");
          case "contact": return t("contactLink");
          case "teachers": return t("teachersLink");
          default: return undefined;
        }

      })()}
    />

    <div className={classes.bodyWrapper}>
      <div className={classes.body}>
        {route.name === "home" && <Home />}
        {route.name === "how" && <How />}
        {route.name === "teachers" && <Teachers />}
        {route.name === "about" && <About />}
        {route.name === "contact" && <Contact />}


      </div>
      <Footer
        className={classes.footer}
        links={links}
        currentLinkLabel={links.find(({ routeName }) => routeName === route.name)?.label}
        siteLogo={siteLogo}
        contactTitle={t("footerContactTitle")}
        smallPrint={<div className={classes.smallPrint}>
          <Text typo="quote">{t("copyRight")}</Text>
          <ReactMarkdown className={classes.designerCredits}>{t("designerCredits")}</ReactMarkdown>
        </div>}
        socialLinks={[
          {
            "href": "",
            "icon": fbIcon,
            "label": "facebook link"
          },
          {
            "href": "",
            "icon": instaIcon,
            "label": "instagram link"
          },
          {
            "href": "",
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
    "marginTop": "1em",
    "marginBottom": "1em"
  },
  "contactTitle": {
    "marginBlock": 0
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
  "aboutLink" |
  "contactLink" |
  "contactTitle" |
  "email" |
  "number" |
  "legalLink" |
  "copyRight" |
  "designerCredits" |
  "appointmentLink" |
  "siteTitle" |
  "footerContactTitle" |
  "footerParagraphTitle" |
  "footerParagraph" |
  "footerCallToActionTitle" |
  "footerLinkButtonLabel"
>()({ App });

