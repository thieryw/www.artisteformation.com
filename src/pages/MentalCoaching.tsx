import { memo } from "react";
import { Text } from "@/theme/Text";
import { breakpointValues, tss } from "@/theme";


export const MentalCoaching = memo(() => {
    const { classes } = useStyles();
    return <div className={classes.root}>
        <div className={classes.titleWrapper}>
            <Text typo="sectionPageOrButton">FORMATIONS</Text>
            <Text className={classes.title} typo="heading1">“Concevoir et animer une formation à la préparation physique et mentale des artistes”</Text>
        </div>
        <div>
            <div className={classes.textModule}>
                <Text className={classes.heading2} typo="heading2">Prérequis</Text>
                <Text typo="paragraph">Minimum de deux années de pratique artistique en tant que professionnel.</Text>
            </div>
            <div className={classes.textModule}>
                <Text className={classes.heading2} typo="heading2">Objectifs</Text>
                <div>
                    <Text className={classes.heading2} typo="heading3">1. Améliorer la performance artistique</Text>
                    <ul>
                        <li><Text typo="paragraph">Renforcer les capacités physiques telles que l’endurance, la souplesse, la stabilité et la réactivité.</Text></li>
                        <li><Text typo="paragraph">Optimiser la gestion des émotions et du stress pour des performances plus fluides et authentiques.</Text></li>
                    </ul>
                </div>
                <div>
                    <Text className={classes.heading2} typo="heading3">2. Prévenir les risques physiques et mentaux</Text>
                    <ul>
                        <li><Text typo="paragraph">Sensibiliser les artistes aux principes de l’anatomie fonctionnelle et ajuster leurs gestes pour réduire les efforts inutiles et prévenir les blessures.</Text></li>
                        <li><Text typo="paragraph">Introduire des pratiques de relaxation, de respiration et de méditation pour favoriser le bien-être global.</Text></li>
                    </ul>
                </div>
                <div>
                    <Text className={classes.heading2} typo="heading3">3. Personnaliser la préparation</Text>
                    <ul>
                        <li><Text typo="paragraph">Analyser les besoins individuels des artistes à travers des entretiens, des questionnaires et des observations directes.</Text></li>
                        <li><Text typo="paragraph">Élaborer des programmes sur mesure adaptés à leurs exigences physiques, techniques et émotionnelles.</Text></li>
                    </ul>
                </div>
                <div>
                    <Text className={classes.heading2} typo="heading3">4. Soutenir l’innovation pédagogique</Text>
                    <ul>
                        <li><Text typo="paragraph">Former les participants à identifier et corriger les erreurs pédagogiques courantes.</Text></li>
                        <li><Text typo="paragraph">Intégrer des retours collaboratifs pour développer et adapter des outils pédagogiques novateurs.</Text></li>
                    </ul>
                </div>
                <div>
                    <Text className={classes.heading2} typo="heading3">5. Favoriser l’autonomie et la durabilité des pratiques</Text>
                    <ul>
                        <li><Text typo="paragraph">Enseigner des techniques reproductibles et facilement intégrables dans la pratique quotidienne.</Text></li>
                        <li><Text typo="paragraph">Encourager une réflexion constante sur l’amélioration et l’évolution des méthodes utilisées.</Text></li>
                    </ul>
                </div>
            </div>
            <div className={classes.textModule}>
                <Text className={classes.heading2} typo="heading2">Durée</Text>
                <Text typo="paragraph">280 heures dont 12 heures d’évaluation</Text>
            </div>
            <div className={classes.textModule}>
                <Text className={classes.heading2} typo="heading2">Modalités et délai d’accès</Text>
                <Text typo="paragraph">- Entretien avec l’équipe pédagogique</Text>
                <Text typo="paragraph">- Un CV</Text>
                <Text typo="paragraph">- Une lettre de motivation</Text>
                <Text typo="paragraph">- Délai d’accès : 45 jours (durée estimée entre la demande du candidat et le début de la prestation)</Text>
            </div>

            <div className={classes.textModule}>
                <Text className={classes.heading2} typo="heading2">Méthodes mobilisées</Text>
                <div className={classes.textModule}>
                    <Text className={classes.heading2} typo="heading3">1. Approche participative et centrée sur l’apprenant</Text>
                    <Text typo="paragraph">La formation repose sur une démarche participative, plaçant les artistes au cœur du processus d’apprentissage. Les activités favorisent leur engagement actif à travers des études de cas, des ateliers interactifs et des exercices pratiques. Les échanges en groupe, discussions ouvertes et retours collectifs renforcent l’intégration des apprentissages et encouragent une réflexion collaborative</Text>
                </div>
                <div className={classes.textModule}>
                    <Text className={classes.heading2} typo="heading3">2. Alternance théorie-pratique</Text>
                    <Text typo="paragraph">Les sessions alternent entre des apports théoriques structurés et des mises en situation pratiques. Les concepts fondamentaux (anatomie fonctionnelle, gestion des émotions) sont introduits avec supports visuels et démonstrations concrètes, suivis d’ateliers pour les appliquer dans des contextes simulés ou réels.</Text>
                </div>
                <div className={classes.textModule}>
                    <Text className={classes.heading2} typo="heading3">3. Individualisation et personnalisation</Text>
                    <Text typo="paragraph">Des séances d’évaluation initiale permettent un diagnostic précis des attentes et capacités de chaque artiste. Les programmes sont personnalisés pour maximiser leur pertinence et leur impact.</Text>
                </div>
                <div className={classes.textModule}>
                    <Text className={classes.heading2} typo="heading3">4. Innovation et apprentissage par l’expérience</Text>
                    <Text typo="paragraph">Techniques novatrices à travers simulations, jeux de rôle et activités créatives. Les participants conçoivent et évaluent des outils pédagogiques, favorisant leur appropriation et une amélioration continue.</Text>
                </div>
                {/*<Text typo="paragraph">- Des séances d'enseignement théorique sont organisées pour présenter les concepts clés et les principes fondamentaux relatifs à l'analyse de la performance, à la gestion du temps, à la communication artistique, et à l'évaluation des performances physiques et mentales. Ces séances permettent aux artistes d'acquérir une compréhension approfondie des concepts avant de passer à la pratique.</Text>
                <Text typo="paragraph">- Des ateliers pratiques sont mis en place pour permettre aux artistes d'appliquer les connaissances théoriques dans un contexte concret. Ces ateliers incluent des exercices d'observation, des simulations de performances artistiques, des séances de communication avec les partenaires et le public, ainsi que des séances d'entraînement physique et mental. Cette approche pratique permet aux artistes de développer leurs compétences de manière interactive et expérientielle.</Text>
                <Text typo="paragraph">- Des séances de travail individuel sont proposées pour permettre aux artistes de réfléchir de manière approfondie sur leur propre performance, d'identifier leurs forces et leurs faiblesses, et de définir des objectifs personnels pour leur développement. Ces séances individuelles offrent un espace sécurisé pour l'auto-exploration et l'auto-amélioration, avec le soutien et les conseils du formateur.</Text>
                <Text typo="paragraph">- Des séances de feedback et d'évaluation sont régulièrement organisées pour permettre aux artistes de recevoir des retours constructifs sur leur performance, tant de la part du formateur que de leurs pairs. Ces séances favorisent un environnement d'apprentissage collaboratif où les artistes peuvent partager leurs expériences, s'inspirer mutuellement et progresser ensemble vers l'excellence artistique.</Text>*/}
            </div>
            <div className={classes.textModule}>
                <Text className={classes.heading2} typo="heading2">Modules de formation :</Text>
                <div className={classes.textModule}>
                    <Text className={classes.heading2} typo="heading3">Module 1 : Analyse et diagnostic des besoins artistiques (C.1, C.2)</Text>
                    <Text typo="heading4" className={classes.heading2}>Durée : 50 heures</Text>
                    <Text typo="heading4" className={classes.heading2}>Objectifs: </Text>
                    <ul>
                        <li><Text typo="paragraph">Identifier les besoins individuels des artistes (capacities physiques, mentales, techniques).</Text></li>
                        <li><Text typo="paragraph">Initier les bases de l’anatomie fonctionnelle.</Text></li>
                        <li><Text typo="paragraph">Comprendre et utiliser leur corps de manière optimale.</Text></li>
                    </ul>
                    <Text typo="heading4" className={classes.heading2}>Lien avec la formation :</Text>
                    <Text typo="paragraph">Acquisition de compétences pour concevoir des programmes adaptés.</Text>
                </div>
                <div className={classes.textModule}>
                    <Text className={classes.heading2} typo="heading3">Module 2 : Maîtrise des émotions et optimisation des performances (C.3, C.6)</Text>
                    <Text typo="heading4" className={classes.heading2}>Durée : 60 heures</Text>
                    <Text typo="heading4" className={classes.heading2}>Objectifs: </Text>
                    <ul>
                        <li><Text typo="paragraph">Enseigner la relaxation, respiration, méditation.</Text></li>
                        <li><Text typo="paragraph">Améliorer la qualité des performances.</Text></li>
                        <li><Text typo="paragraph">Renforcer l’assurance et la résilience.</Text></li>
                    </ul>
                    <Text typo="heading4" className={classes.heading2}>Lien avec la formation :</Text>
                    <Text typo="paragraph">Techniques de gestion émotionnelle et mentale essentielles.</Text>
                </div>
                <div className={classes.textModule}>
                    <Text className={classes.heading2} typo="heading3">Module 3 : Techniques d’ergonomie et prévention des blessures (C.4, C.5)</Text>
                    <Text typo="heading4" className={classes.heading2}>Durée : 70 heures</Text>
                    <Text typo="heading4" className={classes.heading2}>Objectifs: </Text>
                    <ul>
                        <li><Text typo="paragraph">Ajuster les gestes artistiques pour optimiser l’ergonomie.</Text></li>
                        <li><Text typo="paragraph">Sensibiliser aux erreurs pédagogiques courantes.</Text></li>
                        <li><Text typo="paragraph">Garantir une pratique artistique saine et durable.</Text></li>
                    </ul>
                    <Text typo="heading4" className={classes.heading2}>Lien avec la formation :</Text>
                    <Text typo="paragraph">Intégration des principes d'ergonomie.</Text>
                </div>
                <div className={classes.textModule}>
                    <Text className={classes.heading2} typo="heading3">Module 4 : Application et innovation pédagogique (C.7)</Text>
                    <Text typo="heading4" className={classes.heading2}>Durée : 40 heures</Text>
                    <Text typo="heading4" className={classes.heading2}>Objectifs: </Text>
                    <ul>
                        <li><Text typo="paragraph">Expérimenter et adapter les outils pédagogiques.</Text></li>
                        <li><Text typo="paragraph">Créer des outils innovants.</Text></li>
                    </ul>
                    <Text typo="heading4" className={classes.heading2}>Lien avec la formation :</Text>
                    <Text typo="paragraph">Favorise des formations adaptées et évolutives.</Text>
                </div>
                <div className={classes.textModule}>
                    <Text className={classes.heading2} typo="heading3">Module 5 : Planification et gestion du temps (C.3)</Text>
                    <Text typo="heading4" className={classes.heading2}>Durée : 40 heures</Text>
                    <Text typo="heading4" className={classes.heading2}>Objectifs: </Text>
                    <ul>
                        <li><Text typo="paragraph">Optimiser le temps dans la préparation artistique.</Text></li>
                        <li><Text typo="paragraph">Élaborer un plan d’action détaillé</Text></li>
                    </ul>
                    <Text typo="heading4" className={classes.heading2}>Lien avec la formation :</Text>
                    <Text typo="paragraph">Structuration efficace des contenus.</Text>
                </div>
                <div className={classes.textModule}>
                    <Text className={classes.heading2} typo="heading3">Module 6 : Évaluation finale et certification</Text>
                    <Text typo="heading4" className={classes.heading2}>Durée : 6 heures</Text>
                    <Text typo="heading4" className={classes.heading2}>Objectifs: </Text>
                    <ul>
                        <li><Text typo="paragraph">Évaluer les compétences acquises par étude de cas pratique.</Text></li>
                        <li><Text typo="paragraph">Valider la capacité à concevoir et animer des formations.</Text></li>
                    </ul>
                </div>
            </div>

            <div className={classes.textModule}>
                <Text className={classes.heading2} typo="heading2">Modalités d’évaluations</Text>
                <Text className={classes.heading2} typo="heading3">Les participants seront évalués sur :</Text>
                <ul>
                    <li><Text typo="paragraph">Application des concepts d’anatomie fonctionnelle.</Text></li>
                    <li><Text typo="paragraph">Compréhension des techniques de relaxation et gestion des émotions.</Text></li>
                    <li><Text typo="paragraph">Capacité à élaborer un programme adapté de préparation physique et mentale.</Text></li>
                </ul>
            </div>


            <div className={classes.textModule}>
                <Text className={classes.heading2} typo="heading2">Tarifs</Text>
                <Text className={classes.price} typo="heading1">15,120 HT €</Text>
            </div>


            <div className={classes.textModule}>
                <Text className={classes.heading2} typo="heading2">Accessibilité aux personnes handicapées</Text>
                <Text typo="paragraph">- Conditions d'accueil adaptées : Les locaux sont aménagés pour permettre un accueil inclusif des personnes en situation de handicap, avec des entrées accessibles, des espaces suffisamment larges pour les fauteuils roulants et des installations sanitaires adaptées.</Text>
                <Text typo="paragraph">- Conditions d'accès facilitées : Les moyens d'accès à la formation sont adaptés pour assurer une accessibilité totale aux personnes handicapées, incluant des rampes d'accès, des ascenseurs adaptés, et des places de stationnement réservées à proximité.</Text>
                <Text typo="paragraph">- Sécurisation des parcours de formation : Des mesures de sécurité spécifiques sont mises en place pour garantir la sûreté des participants handicapés, comme des itinéraires évacuation adaptés, des dispositifs d'alerte visuels ou sonores, et une formation du personnel à la gestion des situations d'urgence.</Text>
            </div>


        </div>

    </div>
})

const useStyles = tss.create(({ theme }) => {
    return ({
        "root": {
            ...(theme.windowInnerWidth > breakpointValues.sm ? {
                "paddingLeft": 300,
                "paddingRight": 300,
                "paddingTop": 300,
                "paddingBottom": 200,

            } : {
                "paddingLeft": 30,
                "paddingRight": 30,
                "paddingBottom": 150,
                "paddingTop": 100,
            }),
        },
        "titleWrapper": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center"


        },
        "title": {
            "maxWidth": 1100,
            "textAlign": "center",
            "marginTop": 60,
            "marginBottom": 100

        },
        "textModule": {
            ...(() => {
                const value = theme.windowInnerWidth < breakpointValues.sm ? 50 : 70;
                return {
                    "marginTop": value,
                    "marginBottom": value
                }
            })(),
            "& p": {
                "color": theme.colors.darkGray
            }

        },
        "heading2": {
            "marginBottom": 40
        },
        "subModule": {
            "marginBottom": 30
        },
        "price": {
            "color": theme.colors.linden
        }
    })
})