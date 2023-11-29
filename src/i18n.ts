import { createI18nApi, declareComponentKeys } from "i18nifty";
export { declareComponentKeys };

export const languages = ["fr"] as const;

export const fallbackLanguage = "fr";

export type Language = typeof languages[number];

export type LocalizedString = Parameters<typeof resolveLocalizedString>[0];

export const { 
	useTranslation, 
	resolveLocalizedString, 
	useLang, 
	$lang,
	useResolveLocalizedString,
	getTranslation 
} = createI18nApi<
	typeof import ("pages/Home").i18n |
	typeof import ("App").i18n
>()(
	{ languages, fallbackLanguage },
	{
		"fr": {
			"App": {
				"homeLink": "Acceuil",
				"howLink": "Comment ?",
				"teachersLink": "Formateurs",
				"aboutLink": "À propos",
				"contactLink": "Contact",
				"contactTitle": "Nous joindre",
				"email": "contact@artisteformation.com",
				"number": "(+33) 199 999 990",
				"legalLink": "Mentions légales",
				"copyRight": "Copiright © 2023 Artiste Formation",
				"designerCredits": "Designé par IdeaArt",
				"appointmentLink": "Fixer un rdv"
			},
			"Home": {
				"title": "Vite + React",
				"count": "count is",
				"edit": "Edit",
				"code": "src/App.tsx",
				"save": "and save to test HMR",
				"learnMore": "Click on the Vite and React logos to learn more"
			}


		},
	}
);