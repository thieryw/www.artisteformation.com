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
	typeof import ("pages/home/Home").i18n |
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
				"designerCredits": "Designé par [IdeaArt](https://github.com/thieryw/)",
				"appointmentLink": "Fixer un rdv",
				"siteTitle": "Artiste Formation",
				"footerContactTitle": "Suivez-nous !",
				"footerParagraphTitle": "Prêt(e) à lancer votre carrière ?",
				"footerParagraph": "Bookez un entretien gratuit et voyons ce qu'on peut bâtir ensemble.",
				"footerCallToActionTitle": "C'est parti !",
				"footerLinkButtonLabel": "DÎTES-NOUS TOUT !"
			},
			"Home": {
				"title": "Artiste Formation",
				"subtitle": "Révélateur de Carrières Artistiques",
				"introTitle": "Simple. Humain. Expert.",
				"introSubtitle": "INTRODUCTION",
				"introParagraph": "Expert dans la création de parcours d’évolution professionnelle sur mesure pour les artistes, techniciens du spectacle vivant et de l’audiovisuel, Artiste Formation vous offre une opportunité unique de développer votre carrière artistique. Que vous souhaitiez acquérir de nouvelles compétences, donner vie à un projet professionnel, travailler avec un artiste en particulier : nous pouvons vous y aider.",
				"introPartner": "Partenaires",
				"introCarer": "Carrières boostées",
				"introSatisfaction": "Satisfaction",
				"introPartnerNumber": "359",
				"introCarerNumber": "714",
				"introSatisfactionPercentage": "98%"

			}


		},
	}
);