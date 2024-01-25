import { useMemo } from "react";
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
import { ZoomProvider } from "./components/ZoomProvider";
import { Footer } from "./components/Footer";
import { How } from "@/pages/how/How";
import { Teachers } from "@/pages/teachers/Teachers";
import { About } from "@/pages/about/About";
import { Logo } from "./components/Logo";
import { Contact } from "@/pages/contact/Contact";

const widthRange = {
  "min": 600,
  "max": 1920
}


export function App() {
  const route = useRoute();
  const { classes, theme } = useStyles();
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

  return (<>

    <ZoomProvider
      widthRange={widthRange}
      className={classes.headerWrapper}
      classes={{
        "inner": classes.headerInner
      }}
    >
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
          <Text className={classes.contactLink} typo="additionalTitle">CONTACT</Text>
        </a>
      }
      <Header
        zoomProviderInterval={widthRange}
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

    </ZoomProvider>


    <ZoomProvider
      widthRange={widthRange}
    >
      <div className={classes.root}>

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

    </ZoomProvider>
  </>
  )
}

const useStyles = tss.create(({ theme }) => ({

  "root": {
    "backgroundColor": theme.colors.backgroundMain,
    "width": "100%",
    "position": "relative",
    "minHeight": "100%",
    "display": "flex",
    "flexDirection": "column",

  },
  "smallPrint": {
    ...(()=>{
      if(theme.windowInnerWidth < breakpointValues.sm){
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
    "position": "fixed",
    "top": 50,
    "left": 120,
    "zIndex": 4000
  },
  "contactLink": {
    "position": "fixed",
    "top": 130,
    "right": 70,
    "zIndex": 4000,
    "color": theme.colors.indigo

  },
  "headerWrapper": {
    "height": 0,
    ...(()=>{
      if(theme.windowInnerWidth < breakpointValues.sm){
        return {

        }
      }
      return {
        "width": "100%",

      }
    })()

  },
  "headerInner": {
    "position": "fixed",
    "zIndex": 4000,
    "height": 0,
    "overflowX": "unset"

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

