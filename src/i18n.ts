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
	typeof import ("pages/teachers/Teachers").i18n |
	typeof import ("pages/about/About").i18n |
	typeof import ("pages/contact/Contact").i18n 
>()(
	{ languages, fallbackLanguage },
	{
		"fr": {
			"App": {
				"homeLink": "Accueil",
				"howLink": "Comment ?",
				"teachersLink": "Formateurs",
				"aboutLink": "À propos",
				"contactLink": "Contact",
				"contactTitle": "Nous joindre",
				"email": "bonjour@artisteformation.com",
				"number": "(+33) 199 999 990",
				"photographerCredits": "Clichés de C. Guigue / Dayphotographies ©",
				"legalLink": "Mentions légales",
				"copyRight": "Copiright © 2023 Artiste Formation",
				"designerCredits": "Designé par [IdeaArt](https://dribbble.com/IdeaArt)",
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
    			"sliderEngagementTitle": "100% sur mesure,",
				"sliderEngagementTitle2": "100% humain",
    			"sliderEngagementParagraph1": "Chaque artiste est unique et demande une attention particulière, c’est la raison pour laquelle nous offrons un suivi entièrement sur mesure, sans la moindre automatisation. Chaque étape est soigneusement conçue et adaptée à vos besoins spécifiques.",
    			"sliderEngagementParagraph2": "Nous croyons en votre talent et sommes déterminés à vous aider à le développer au maximum. Artiste Formation n’est pas qu’un centre de formation, c’est votre partenaire de confiance dans votre voyage artistique.",
    			"sliderFinancingName": "02. / FINANCEMENT",
    			"sliderFinancingTitle": "Pise en charge financière et administrative",
    			"sliderFinancingParagraph1": "Ayant une connaissance approfondie de tous les droits de formation dans le monde artistique, nous mobilisons notre expertise afin d’obtenir une prise en charge financière partielle ou totale de votre parcours d'évolution professionnelle.",
    			"sliderFinancingParagraph2": "Vos droits permettant de vous former régulièrement dans nos métiers artistiques, nous vous proposerons le parcours le plus adapté et vous délesterons de toute la partie administrative.",
    			"sliderResponseName": "03. / ANALYSE & RÉPONSE",
    			"sliderResponseTitle": "Écoute, analyse & réponse personnalisée.",
    			"sliderResponseParagraph1": "Notre approche commence par une analyse complète de vos besoins et une étude ap-profondie des enjeux professionnels de votre secteur. Ce socle de départ pour votre projet de formation nous permettra d’assembler une équipe d'experts et de bâtir un projet professionnel solide et performant.",
    			"sliderResponseParagraph2": "Artiste Formation vous offre un tremplin qui propulse votre carrière. révèle votre potentiel et vous permet de réinventer votre avenir artistique.",
    			"sliderButtonLabel": "EN SAVOIR PLUS",
    			"sliderMiniTitle" : "COMMENT ÇA MARCHE",
				"certificationParagraph1": "La",
				"certificationParagraphLink": "certification",
				"certificationParagraph2": "qualité a été délivrée au titre de la catégorie d’action suivante",
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
				"customerMediaParagraph": "À vos plumes ! Nous accompagnons votre quête journalistique.",
				"customerBusinessTitle": "Entrepre-",
				"customerBusinessTitle2": "nariat",
				"customerBusinessParagraph": "Visionnaires, concrétisez vos ambitions !",
				"customerButton": "EN SAVOIR PLUS",
				"review1Title": "Laura Salaison",
				"review1Subtitle": "Violoniste",
				"review1Paragraph": "Artiste Formation a transformé mon parcours de violoniste baroque. Je suis montée en compétences à mon rythme, j’ai pu produire un enregistrement pro dans la foulée et booster ma visibilité. Il y a clairement un avant et un après !",
				"review2Title": "Clémence Dubois",
				"review2Subtitle": "Gambiste",
				"review2Paragraph": "AF m’a offert de concrétiser deux projets : j’ai passé un cap technique et musical en travaillant avec deux maîtres de musique ancienne, et j’ai pu monter un projet insolite avec un ensemble vocal mêlant viole de gambe et beatbox.",
				"review3Title": "Ali Reza",
				"review3Subtitle": "Cadreur",
				"review3Paragraph": "Au début j’étais sceptique, mais ils m’ont donné tellement d’outils pour apprendre + ils m’ont aidé à faire un court-métrage avec équipe et matériel pro ! Je n’aurais pas du tout la même trajectoire sans eux, et maintenant ce sont des amis !",
				"reviewArticleSurtitle": "TÉMOIGNAGES",
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
				"teachersButtonLabel": "LES VOIR TOUS",
				"mobileTabSurtitle": "COMMENT ?",
				"mobileTabTitle": "On vous explique."



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
				"sliderIndependentTitle": "Travailleur Indépendant",
				"sliderIndependentParagraph": "Que vous soyez artisan, artiste ou professionnel libéral, nous explorons avec vous les différentes options de financement offertes par les chambres de commerce, le FIFPL, l'AFDAS ou le FAFCEA, en fonction de votre domaine d'activité.",
				"sliderCompanyName": "05. / ENTREPRISE",
				"sliderCompanyTitle": "Entreprise",
				"sliderCompanyParagraph": "Artiste Formation vous offre des formations spécialisées pour les entreprises du spectacle et de l’audio-visuel. Améliorez les compétences de votre équipe et valorisez votre entreprise. Nous mettons l’ensemble des outils à disposition pour la montée en compétence de vos salariés et la réussite de vos productions.",
				"sliderButtonLabel": "CONTACTEZ-NOUS",
				"sliderSurtitle": "VOS DROITS",
				"processTitle": "Vous choisissez,",
				"processTitle2": "On s’occupe du reste.",
				"processSubtitle": "PROCESSUS",
				"processParagraph": "Votre rêve artistique n'a pas de limites, et c'est pourquoi notre approche est axée sur la personnalisation. Vous choisissez la direction que vous voulez prendre, et nous prenons le relais avec enthousiasme.",
				"numberedSliderNeedsTitle": "Recueil des besoins & Sélection des intervenants.",
				"numberedSliderNeedsParagraph": "Notre équipe commence par écouter vos besoins et aspirations, puis nous sélectionnons les experts les mieux adaptés à votre projet parmi notre vaste réseau de partenaires. Vous tenez à travailler avec quelqu’un en particulier qui ne fait pas encore partie de nos partenaires ?",
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
				"handicapTitle": "Situation de handicap,",
				"handicapTitle2": "Nous sommes là.",
				"handicapSubtitle": "ACCESSIBILITÉ",
				"handicapParagraph": "Chez Artiste Formation, nos aménagements sont pensés individuellement, que ce soit pour l'accès physique, les supports pédagogiques ou les méthodes d'évaluation. Notre équipe se tient à votre disposition pour discuter de vos exigences et garantir que vous puissiez profiter pleinement de l'expérience de formation. De plus, nous sensibilisons également nos formateurs et les participants aux enjeux de l'inclusion, afin de favoriser une compréhension mutuelle et une atmosphère bienveillante.",
				"mobileTabNeeds": "01. / RECEUIL DES BESOINS",
				"mobileTabCreation": "02. / CRÉATION DU PARCOURS",
				"mobileTabPiloting": "03. / PILOTAGE DU PROJET"

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

			},
			"About": {
				"pageTitle": "Créé par des Artistes.",
				"pageSubtitle": "À PROPOS",
				"introParagraph": "Voici en quelques lignes, l’histoire ayant conduit à la naissance d’Artiste Formation. Il s’agit d’un récit que nous vous livrons en toute sincérité, et qui - vous le verrez - est constamment traversé par les valeurs humaines qui font battre le cœur de notre équipe. Voici où tout à commencé.",
				"valuesTitle": "Ce qui retentit en Nous.",
				"valuesSubtitle": "VALEURS",
				"valuesParagraph": "Artiste Formation s'inscrit dans l'héritage de son fondateur : une compréhension profonde des artistes et de leurs besoins. Nous plaçons l'humain au coeur de tout ce que nous faisons. Notre centre est un espace où la musique se mêle à la convivialité, où les artistes trouvent le soutien nécessaire pour grandir.",
				"teachingTitle": "Excellence Musicale & Pédagogique",
				"teachingParagraph": "Nous sommes profondément engagés à offrir des programmes de formation de la plus haute qualité, dispensés par des experts de renommée internationale. Nous croyons en l'inspiration par l'exemplarité et en la transmission de connaissances qui transcendent générations et frontières.",
				"goodWillTitle": "Bienveillance & Épanouissement",
				"goodWillParagraph": "Nous comprenons que le développement artistique est intimement lié à l'épanouissement personnel. Nous nous engageons à créer un environnement où les artistes peuvent explorer leur créativité en toute confiance, trouver leur voix unique et développer leur plein potentiel.",
				"adaptationTitle": "Adaptabilité & Innovation",
				"adaptationParagraph": "La musique est en constante évolution. Notre engagement envers l'adaptabilité et l'innovation nous pousse à explorer de nouvelles méthodes pédagogiques, à intégrer les dernières avancées technologiques et à nous adapter aux besoins changeants des artistes.",
				"sharingTitle": "Partage & Communauté",
				"sharingParagraph": "Nous valorisons la création d'une communauté dynamique et inclusive. Nous encourageons les échanges entre artistes, les collaborations enrichissantes et les expériences partagées. Cette dimension sociale fait partie intégrante de notre approche, renforçant les connexions humaines au sein de notre espace artistique.",
				"responsibilityTitle": "Responsabilité Environnementale & Sociétale",
				"responsibilityParagraph": "L’Art peut avoir un impact positif sur la société et l'environnement. C'est pourquoi nous nous engageons à intégrer des pratiques durables dans nos opérations et à promouvoir des valeurs responsables au sein de notre communauté artistique. Nous visons à contribuer à un monde meilleur à travers la puissance des arts et de l'action collective.",
				"approachTitle": "Chacune de ces valeurs compose la partition de notre approche.",
				"approachParagraph": "Chez Artiste Formation, nous ne nous contentons pas de former des artistes compétents ; nous cultivons des esprits créatifs, des êtres humains épanouis et des membres engagés de la communauté artistique mondiale.",
				"employeesTitle": "Nos petites mains.",
				"employeesSubtitle": "L'ÉQUIPE",
				"employeesParagraph": "Au cœur de notre orchestre pédagogique se trouvent des individus exceptionnels : Cécile GARCIA, coach en PNL et responsable de la gestion administrative, Elisabeth KNNABLIAN, experte en gestion financière, Marianne MAZAS, conseillère stratégie & création d’entreprise, David ZUILI, expert comptable, et enfin Emilie CROS, véritable couteau suisse d’Artiste Formation. En conjuguant leurs efforts, ils donnent vie à notre vision collective.",
				"employeesParagraphMobile": "Au cœur de notre orchestre pédagogique se trouvent des individus exceptionnels qui conjuguent leurs efforts et donnent vie à notre vision collective.",
				"contactButtonLabel": "CONTACTEZ-NOUS"
			},
			"Contact": {
				"pageTitle": "Prêt(e) à vous lancer ?",
				"pageSubtitle": "CONTACT",
				"introParagraph": "Commençons par une analyse complète de vos besoins pour un projet de formation taillé sur mesure. Nous vous proposons un rendez-vous personnalisé de 45 minutes au cours duquel nous apprendrons à nous connaître, et ferons émerger les premières solutions concrètes pour propulser votre carrière.",
				"formTitle": "Dîtes-nous tout !",
				"formNamePlaceholder": "nom",
				"formTelPlaceholder": "téléphone",
				"formEmailPlaceholder": "mail",
				"formMessagePlaceholder": "message",
				"formSend": "ENVOYER",
				"bookingTitle": "Booker directement un créneau",
				"bookingButtonLabel": "FIXER UN RDV",
				"or": "OU",
				"formNameNonValid": "Veuillez spécifier votre nom",
				"formTelNonValid": "Veuillez spécifier un numéro de telephone",
				"formEmailNonValid": "Veuillez spécifier un email",
				"formMessageNonValid": "Veuillez formuler votre message",
				"sending": "En cour d'envoi...",
				"sent": "Message envoyé !"
			}

		},
	}
);