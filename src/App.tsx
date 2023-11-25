import { useMemo } from "react";
import { Home } from "./pages/Home";
import { useRoute, routes, routeDefs } from "./router";
//import { Text } from "./theme/Text";
import { tss } from "./theme/tss";
import { Header } from "./components/Header";
import type { HeaderProps } from "./components/Header";
import {declareComponentKeys, useTranslation} from "./i18n";


export function App() {
  const route = useRoute();
  const { classes } = useStyles();
  const { t } = useTranslation({ App });
  const links = useMemo<(HeaderProps["links"][number] & {routeName: keyof typeof routeDefs})[]>(() => ([
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
    <div className={classes.root}>
      <Header
        links={links}
        currentLinkLabel={links.find(({routeName}) => routeName === route.name)?.label}
      />
      <div>
        {route.name === "home" && <Home />}

      </div>
    </div>
  )
}

const useStyles = tss.create(({ theme }) => ({

  "root": {
    "backgroundColor": theme.colors.backgroundMain,
    "width": "100vw",
    "position": "relative",
    "left": -8,
    "overflow": "hidden"

  }
}))

export const { i18n } = declareComponentKeys<
  "homeLink" |
  "howLink" |
  "teachersLink" |
  "aboutLink" |
  "contactLink"
>()({ App });

