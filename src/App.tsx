import { useMemo } from "react";
import { Home } from "./pages/Home";
import { useRoute, routes, routeDefs } from "./router";
import { Text } from "./theme/Text";
import { tss } from "./theme/tss";
import { Header } from "./components/Header";
import type { HeaderProps } from "./components/Header";
import {declareComponentKeys, useTranslation} from "./i18n";
import fbIcon from "./assets/svg/fb-icon.svg"
import instaIcon from "./assets/svg/insta-icon.svg";
import youtubeIcon from "./assets/svg/youtube-icon.svg";
import siteLogo from "./assets/svg/logo.svg";
import ReactMarkdown from "react-markdown";
import { ZoomProvider } from "./components/ZoomProvider";

const referenceWidth = 1920;
const minEffectivenessWidth = 0;


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


  return (
    <ZoomProvider
      minEffectivenessWidth={minEffectivenessWidth}
      referenceWidth={referenceWidth}
    >
      <div className={classes.root}>
        <Header
          zoomProviderInterval={{
            "min": minEffectivenessWidth,
            "max": referenceWidth
          }}
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
        <div>
          {route.name === "home" && <Home />}
        </div>
      </div>

    </ZoomProvider>
  )
}

const useStyles = tss.create(({ theme }) => ({

  "root": {
    "backgroundColor": theme.colors.backgroundMain,
    "width": "100%",
    "position": "relative",
    "overflow": "hidden"

  },
  "contactText": {
    "color": theme.colors.darkGray
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
  "appointmentLink"
>()({ App });

