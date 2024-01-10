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
	typeof import ("App").i18n |
	typeof import ("pages/how/How").i18n |
	typeof import ("pages/teachers/Teachers").i18n
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
				"customerButton": "VOIR TOUT",
				"review1Title": "Laura Salaison",
				"review1Subtitle": "Violoniste",
				"review1Paragraph": "Artiste Formation a transformé mon parcours de violoniste baroque. Je suis montée en compétences à mon rythme, j’ai pu produire un enregistrement pro dans la foulée et booster ma visibilité. Il y a clairement un avant et un après !",
				"review2Title": "Jean Phillipe Salmonelle",
				"review2Subtitle": "Gambiste",
				"review2Paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam ipsum ac placerat consectetur.",
				"review3Title": "Robin Desboit",
				"review3Subtitle": "Keytariste",
				"review3Paragraph": "Pellentesque vel nibh et nunc congue commodo. Donec pharetra vel est eu pulvinar.",
				"reviewArticleSurtitle": "TESTIMONIAL",
				"reviewArticleTitle": "Ce qu'ils disent de Nous",
				"reviewArticleParagraph": "Vous aussi faites-nous confiance",
				"reviewArticleButtonLabel": "CONTACTEZ-NOUS",
				"historySubtitle": "À PROPOS",
				"historyTitle": "Créé par des Artistes",
				"historyParagraph": "L'histoire de César Guigue commence dans une famille de mélomanes, en 1983. Dès l'âge de 5 ans, il saisit un violon et ne le lâchera plus. À 14 ans, il obtient déjà plusieurs diplômes au Conservatoire de Bourgoin-Jallieu : violon, musique de chambre, piano et théorie musicale. Cette formation solide le propulse vers des réussites remarquables, notamment le Concours centralisé du Conservatoire de la Ville de Paris pour n’en citer qu’une.",
				"historyButtonLabel": "SUITE DU RÉCIT",
				"teachersSurTitle": "FORMATEURS",
				"teachersTitle": "Nos Maestros",
				"teachersParagraph": "Forts d’un immense réseau de plus de 350 partenaires à travers le territoire, notre engagement c’est aussi être capable de constituer autour de vous une équipe d'experts afin de bâtir un projet puissant.",
				"teachersButtonLabel": "LES VOIR TOUS"



			},
			"How": {
				"careerBoostTitle": "714",
				"careerBoostSubtitle": "CARRIÈRES BOOSTÉES",
				"careerBoostParagraph": "Artiste Formation, c’est plus de 700 carrières propulsées depuis 2019.",
				"introTitle": "On vous explique tout.",
				"introSurtitle": "COMMENT ?",
				"introParagraph": "Lorsque vous faites le pas vers Artiste Formation, vous ouvrez la porte à une multitude de possibilités pour financer et construire votre parcours d'évolution professionnelle.",
				"introSecondParagraph": "Intermittent du spectacle, demandeur d'emploi, travailleur indépendant ou salarié, nous avons les clés pour vous aider à obtenir du soutien.",
				"sliderIntermittentName": "01. / INTERMITTENT",
				"sliderIntermittentTitle": "Intermittent du spectacle",
				"sliderIntermittentParagraph": "Vous travaillez dans le domaine artistique ? Nous travaillons en étroite collaboration avec l'AFDAS, l'organisme de financement qui gère vos droits à la formation. Nous vous orientons dans les démarches pour accéder à une prise en charge de vos formations.",
				"sliderTenantName": "02. / SALARIÉ",
				"sliderTenantTitle": "Salarié",
				"sliderTenantParagraph": "Si vous êtes en poste, notre équipe vous assiste pour naviguer à travers les méandres du plan de développement des compétences, du CPF, et du CPF de transition professionnelle. Nous vous accompagnons pour maximiser vos chances de financement.",
				"sliderCreatorName": "03. / CRÉATEUR D'ENTREPRISE",
				"sliderCreatorTitle": "Créateur d'entreprise",
				"sliderCreatorParagraph": "Lancer votre entreprise ne devrait pas être un parcours solitaire. Découvrez comment notre accompagnement sur-mesure peut transformer votre idée en succès. Ne laissez pas vos interrogations freiner vos ambitions. Votre rêve entrepreneurial mérite un allié de taille : nous sommes là pour cela.",
				"sliderIndependentName": "04. / INDÉPENDANT",
				"sliderIndependentTitle": "Travailleur",
				"sliderIndependentParagraph": "Que vous soyez artisan, artiste ou professionnel libéral, nous explorons avec vous les différentes options de financement offertes par les chambres de commerce, le FIFPL, l'AFDAS ou le FAFCEA, en fonction de votre domaine d'activité.",
				"sliderCompanyName": "05. / ENTREPRISE",
				"sliderCompanyTitle": "Entreprise",
				"sliderCompanyParagraph": "Artiste Formation vous offre des formations spécialisées pour les entreprises du spectacle et de l’audio-visuel. Améliorez les compétences de votre équipe et valorisez votre entreprise. Nous mettons l’ensemble des outils à disposition pour la montée en compétence de vos salariés et la réussite de vos productions.",
				"sliderButtonLabel": "CONTACTEZ-NOUS",
				"sliderSurtitle": "VOS DROITS",
				"processTitle": "Vous choisissez, On s’occupe du reste.",
				"processSubtitle": "PROCESSUS",
				"processParagraph": "Votre rêve artistique n'a pas de limites, et c'est pourquoi notre approche est axée sur la personnalisation. Vous choisissez la direction que vous voulez prendre, et nous prenons le relais avec enthousiasme.",
				"numberedSliderNeedsTitle": "Recueil des besoins & Sélection des intervenants.",
				"numberedSliderNeedsParagraph": "Notre équipe commence par écouter vos besoins et aspirations, puis nous sélection-nons les experts les mieux adaptés à votre projet parmi notre vaste réseau de partenaires. Vous tenez à travailler avec quelqu’un en particulier qui ne fait pas encore partie de nos partenaires ?",
				"numberedSliderNeedsSecondParagraph": "Ca tombe bien ! Nous pouvons lui proposer d’intégrer nos formateurs dans des conditions avantageuses. Tout est possible tant que vous pouvez l’imaginer !",
				"numberedSliderNeedsButtonLabel": "DEVENIR INTERVENANT",
				"numberedSliderCreationTitle": "Création du parcours & Proposition pédagogique",
				"numberedSliderCreationParagraph": "Très vite, votre parcours artistique prend forme. Nous concevons pour vous un programme sur mesure, mêlant théorie et pratique pour une expérience unique et enrichissante, et vous soumettons cette proposition pédagogique.",
				"numberedSliderCreationSecondParagraph": "Mais là encore nous ajustons tout selon vos retours pour vous garantir une entière satisfaction. Le projet est à votre service, c’est donc bien vous le maître à bord !",
				"numberedSliderCreationButtonLabel": "CRÉER MON PARCOURS",
				"numberedSliderPilotingTitle": "Pilotage du projet : Apprendre, grandir et créer.",
				"numberedSliderPilotingParagraph": "Une fois que tout est en place, nous déroulons le projet et gérons chaque détail. Tout sera fluide et facile pour vous ! La paperasse administrative ? C'est pour nous ! Nous montons votre dossier de A à Z. Le transfert entre l'organisme de financement et les intervenants à rémunérer ?",
				"numberedSliderPilotingSecondParagraph": "Nous le gérons. Une question ou un problème ? Il n’y a que des solutions ! Vous bénéficiez d’un accompagnement complet. Votre seul souci, c'est d'apprendre, de grandir et de créer.",
				"numberedSliderPilotingButtonLabel": "JE ME LANCE !",
				"valuesSurtitle": "VALEURS",
				"valuesTitle": "Des valeurs qui font la différence.",
				"valuesParagraph": "Chez Artiste Formation, nous comprenons que votre parcours est unique, et nous nous engageons à vous accompagner dans votre évolution professionnelle avec expertise, dévouement et une touche artistique qui fait toute la différence. ",
				"valuesButtonLabel": "PLUS SUR NOUS",
				"handicapTitle": "Situation de handicap, Nous sommes là.",
				"handicapSubtitle": "ACCESSIBILITÉ",
				"handicapParagraph": "Chez Artiste Formation, nos aménagements sont pensés individuellement, que ce soit pour l'accès physique, les supports pédagogiques ou les méthodes d'évaluation. Notre équipe se tient à votre disposition pour discuter de vos exigences et garantir que vous puissiez profiter pleinement de l'expérience de formation. De plus, nous sensibilisons également nos formateurs et les participants aux enjeux de l'inclusion, afin de favoriser une compréhension mutuelle et une atmosphère bienveillante.",
			},

			"Teachers": {
				"partnerNumberTitle": "359",
				"partnerNumberSubtitle": "PARTENAIRES",
				"partnerNumberParagraph": "Artiste Formation a su tisser un immense réseau de plus de 350 partenaires à travers le territoire.",
				"introSurtitle": "FORMATEURS",
				"introTitle": "Nos Maestros",
				"introParagraph": "Réunissons autour de vous une équipe d'experts afin de bâtir un projet professionnel puissant et hautement performant ! Véritables références dans leur domaine respectif, chaque formateur apporte son expertise unique au travers de sa passion pour l’enseignement.",
				"introSecondParagraph": "Leurs noms ne vous seront pas étrangers et pour cause, leur grand sens pédagogique conjugué à leurs carrières exceptionnelles en font des acteurs incontournables du secteur artistique.",
				"familyTitle": "Et la grande famille s’agrandit !",
				"familySubtitle": "devenir intervenant",
				"familyParagraph": "L’une de nos principales forces est de maintenir notre réseau en constante évolution. Comment ? En nous montrant parfaitement ouverts à la suggestion et à la collaboration avec de nouvelles personnalités du monde du spectacle.",
				"suggestionTitle": "Vous avez quelqu’un en tête ?",
				"suggestionParagraph": "Vous tenez à travailler avec quelqu’un en particulier qui ne fait pas encore partie de nos partenaires ? Un professeur émérite ? Une personnalité complètement inédite ? Ca tombe bien ! Nous pouvons lui proposer d’intégrer nos formateurs dans des conditions avantageuses. Tout est possible tant que vous pouvez l’imaginer !",
				"suggestionButtonLabel": "CONTACTEZ-NOUS"

			}

		},
	}
);