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
				"introSatisfactionPercentage": "98%",
				"visionTitle": "Donnez vie à votre Vision",
				"visionSmallCaption": "Enregistrement live de l’intégrale des 24 préludes de Chopin. Captation live lors d’une tournée nationale.",
				"visionSmallCaptionDate": "2019",
    			"sliderEngagementName": "01. / ENGAGEMENT",
    			"sliderEngagementTitle": "100% sur mesure, 100% humain",
    			"sliderEngagementParagraph1": "Chaque artiste est unique et demande une attention particulière, c’est la raison pour laquelle nous offrons un suivi entièrement sur mesure, sans la moindre automatisation. Chaque étape est soigneusement conçue et adaptée à vos besoins spécifiques.",
    			"sliderEngagementParagraph2": "Nous croyons en votre talent et sommes déterminés à vous aider à le développer au maximum. Artiste Formation n’est pas qu’un centre de formation, c’est votre partenaire de confiance dans votre voyage artistique.",
    			"sliderFinancingName": "02. / FINANCEMENT",
    			"sliderFinancingTitle": "Pise en charge financière et administrative",
    			"sliderFinancingParagraph1": "Ayant une connaissance approfondie de tous les droits de formation dans le monde artistique, nous mobilisons notre expertise afin d’obtenir une prise en charge financière partielle ou totale de votre parcours d'évolution professionnelle.",
    			"sliderFinancingParagraph2": "Vos droits permettant de vous former régulièrement dans nos métiers artistiques, nous vous proposerons le parcours le plus adapté et vous délesterons de toute la partie administrative.",
    			"sliderResponseName": "03. / ANALYSE & RÉPONSE",
    			"sliderResponseTitle": "Écoute, analyse & préponse personnalisée.",
    			"sliderResponseParagraph1": "Notre approche commence par une analyse complète de vos besoins et une étude ap-profondie des enjeux professionnels de votre secteur. Ce socle de départ pour votre projet de formation nous permettra d’assembler une équipe d'experts et de",
    			"sliderResponseParagraph2": "bâtir un projet professionnel solide et performant. Artiste Formation vous offre un tremplin qui propulse votre carrière. révèle votre potentiel et vous permet de réinventer votre avenir artistique.",
    			"sliderButtonLabel": "EN SAVOIR PLUS",
    			"sliderMiniTitle" : "COMMENT ÇA MARCHE",
				"certificationParagraph": "La certification qualité a été délivrée au titre de la catégorie d’action suivante :",
				"certificationTitle": "ACTIONS DE FORMATION",
				"customerSmallTitle": "CARRIÈRE",
				"customerTitle": "Pour Qui ?",
				"customerMusicTitle": "Musique",
				"customerMusicParagraph": "Harmonisons votre carrière à hauteur de votre talent et orchestrons votre ascension.",
				"customerCinemaTitle": "Cinéma",
				"customerCinemaParagraph": "Artiste Formation est votre allié pour réaliser vos rêves sur grand écran. Action !",
				"customerTheatreTitle": "Théâtre",
				"customerTheatreParagraph": "Nous sommes votre metteur en scène pour une carrière applaudie.",
				"customerMediaTitle": "Média",
				"customerMediaParagraph": "à vos plumes ! Nous accompagnons votre quête journalistique.",
				"customerBusinessTitle": "Entrepre-nariat",
				"customerBusinessParagraph": "Visionnaires, concrétisez vos ambitions !",
				"customerButton": "VOIR TOUT"


			}


		},
	}
);