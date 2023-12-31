import { useMemo } from "react";
import { Home } from "./pages/home/Home";
import { useRoute, routes, routeDefs } from "./router";
import { Text } from "./theme/Text";
import { tss } from "./theme/tss";
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

const widthRange = {
  "min": 0,
  "max": 1920
}


export function App() {
  const route = useRoute();
  const { classes } = useStyles();
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
        </div>
        <Footer
          className={classes.footer}
          links={links}
          currentLinkLabel={links.find(({ routeName }) => routeName === route.name)?.label}
          siteLogo={siteLogo}
          contactTitle={t("footerContactTitle")}
          smallPrint={<div>
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
  "headerWrapper": {
    "width": "100%",
    "height": 0,

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

