import { memo } from "react";
import { Text } from "@/theme/Text";
import { breakpointValues, tss } from "@/theme";


export const Teachings = memo(() => {
    const { classes } = useStyles();
    return <div className={classes.root}>
        <div className={classes.titleWrapper}>
            <Text typo="sectionPageOrButton">FORMATIONS</Text>
            <Text className={classes.title} typo="heading1">“Optimiser la performance physique et mentale de l’artiste”</Text>
        </div>
        <div>
            <div className={classes.textModule}>
                <Text className={classes.heading2} typo="heading2">Prérequis</Text>
                <Text typo="paragraph">Minimum de deux années de pratique artistique en tant que professionnel.</Text>
            </div>
            <div className={classes.textModule}>
                <Text className={classes.heading2} typo="heading2">Objectifs</Text>
                <Text typo="paragraph">Mettre en place une démarche d’accompagnement structurée de l’artiste en proposant des outils et une méthodologie complète pour permettre toute l’expression de son potentiel et atteindre son meilleur niveau de performance. Cela passe par l’apprentissage et l’acquisition de plusieurs facultés notamment le mental, l'émotionnel, la pulsation, l'auditif, le kinesthésique, et le visuel/organisation :</Text>
                <ul>
                    <li><Text typo="paragraph">Mental : Utiliser des techniques et des outils pour améliorer la concentration, la gestion du stress et l'état d'esprit, essentiels à une performance artistique.</Text></li>
                    <li><Text typo="paragraph">Émotionnel : Maitriser des stratégies pour la gestion émotionnelle afin de maximiser la qualité de la performance, en dépit des facteurs de pression ou d'incertitude.</Text></li>
                    <li><Text typo="paragraph">Pulsation : Maîtriser le sens du rythme et de la pulsation, éléments centraux à toute performance artistique, que ce soit en musique, en danse, en théâtre et peinture et sculpture.</Text></li>
                    <li><Text typo="paragraph">Auditif : Maitriser des compétences d'écoute active et d'analyse sonore, afin de perfectionner l'interprétation et la présence scénique.</Text></li>
                    <li><Text typo="paragraph">Kinesthésique : Adopter une posture physique et des mouvements adaptés aux exigences spécifiques de l'artiste, pour réduire la fatigue et minimiser les risques de blessures ou d'accidents.</Text></li>
                    <li><Text typo="paragraph">Visuel/Organisation : Établir des objectifs de performance clairs et organiser de façon optimale son environnement et ses ressources, pour atteindre ces objectifs plus efficacement.</Text></li>

                </ul>
                <Text typo="paragraph">Cette formation propose une approche holistique qui couvre ces différentes facettes, permettant à l'artiste d'atteindre un niveau de performance élevé tout en préservant son bien-être physique et mental.</Text>
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
                <Text typo="paragraph">- Des séances d'enseignement théorique sont organisées pour présenter les concepts clés et les principes fondamentaux relatifs à l'analyse de la performance, à la gestion du temps, à la communication artistique, et à l'évaluation des performances physiques et mentales. Ces séances permettent aux artistes d'acquérir une compréhension approfondie des concepts avant de passer à la pratique.</Text>
                <Text typo="paragraph">- Des ateliers pratiques sont mis en place pour permettre aux artistes d'appliquer les connaissances théoriques dans un contexte concret. Ces ateliers incluent des exercices d'observation, des simulations de performances artistiques, des séances de communication avec les partenaires et le public, ainsi que des séances d'entraînement physique et mental. Cette approche pratique permet aux artistes de développer leurs compétences de manière interactive et expérientielle.</Text>
                <Text typo="paragraph">- Des séances de travail individuel sont proposées pour permettre aux artistes de réfléchir de manière approfondie sur leur propre performance, d'identifier leurs forces et leurs faiblesses, et de définir des objectifs personnels pour leur développement. Ces séances individuelles offrent un espace sécurisé pour l'auto-exploration et l'auto-amélioration, avec le soutien et les conseils du formateur.</Text>
                <Text typo="paragraph">- Des séances de feedback et d'évaluation sont régulièrement organisées pour permettre aux artistes de recevoir des retours constructifs sur leur performance, tant de la part du formateur que de leurs pairs. Ces séances favorisent un environnement d'apprentissage collaboratif où les artistes peuvent partager leurs expériences, s'inspirer mutuellement et progresser ensemble vers l'excellence artistique.</Text>
            </div>
            <div className={classes.textModule}>
                <Text className={classes.heading2} typo="heading2">Contenu de la formation</Text>
                <div className={classes.subModule}>
                    <Text typo="paragraph">Module 1 : Analyse, planification et gestion du temps : 70 heures</Text>
                    <Text typo="paragraph">Présentation des concepts clés de l'analyse de la performance artistique</Text>
                    <Text typo="paragraph">Exemples pratiques d'analyse de performances artistiques</Text>
                    <Text typo="paragraph">Exercices d'observation et de critique constructive</Text>
                    <Text typo="paragraph">Identification des étapes nécessaires à la préparation de la performance</Text>
                    <Text typo="paragraph">Exercices de planification et de gestion des ressources</Text>
                    <Text typo="paragraph">Établissement d'un calendrier détaillé avec des échéances spécifiques</Text>
                    <Text typo="paragraph">Évaluation du temps disponible et priorisation des tâches</Text>
                    <Text typo="paragraph">Méthodes de gestion du temps pour éviter les retards et minimiser le stress</Text>
                    <Text typo="paragraph">Exercices pratiques de gestion du temps dans un contexte artistique</Text>
                    <Text typo="paragraph">Encouragement à voir chaque erreur comme une opportunité d'apprentissage</Text>
                    <Text typo="paragraph">Réflexion sur les moyens d'améliorer la performance à partir des erreurs</Text>
                    <Text typo="paragraph">Exercices de développement personnel pour cultiver une perspective positive et constructive</Text>
                </div>
                <div className={classes.subModule}>
                    <Text typo="paragraph">Module 2 : Préparation physique et mentale : 80 heures</Text>
                    <Text typo="paragraph">Introduction aux principes de l’alternance d’états physiques dans la performance artistique</Text>
                    <Text typo="paragraph">Exercices pratiques pour favoriser un changement d'état physique</Text>
                    <Text typo="paragraph">Exploration de différentes techniques pour créer une palette de nuances physiques</Text>
                    <Text typo="paragraph">Techniques de conscience corporelle pour augmenter la concentration</Text>
                    <Text typo="paragraph">Pratique régulière d'exercices mentaux, y compris la visualisation</Text>
                    <Text typo="paragraph">Renforcement de la confiance artistique par des exercices de concentration</Text>
                    <Text typo="paragraph">Exploration de différentes techniques de respiration pour équilibrer les émotions</Text>
                    <Text typo="paragraph">Stratégies pour gérer le stress avant et pendant la performance</Text>
                    <Text typo="paragraph">Exercices de respiration pour favoriser la relaxation et la concentration</Text>
                    <Text typo="paragraph">Principes de conception d'exercices d'échauffement adaptés à la discipline artistique</Text>
                    <Text typo="paragraph">Exercices pratiques pour développer des routines d'échauffement efficaces</Text>
                    <Text typo="paragraph">Importance de la préparation physique pour minimiser les risques de blessures</Text>
                </div>
                <div className={classes.subModule}>
                    <Text typo="paragraph">Module 3 : Communication et interactions artistiques : 60 heures</Text>
                    <Text typo="paragraph">Stratégies pour adapter le style de communication en fonction du contexte et des partenaires</Text>
                    <Text typo="paragraph">Pratique de la communication artistique et émotionnelle avec les partenaires et le public</Text>
                    <Text typo="paragraph">Réflexion sur l'importance des échanges directs avant, pendant et après la performance</Text>
                    <Text typo="paragraph">Méthodes pour faciliter la réflexion sur la performance individuelle et collective</Text>
                    <Text typo="paragraph">Reconnaissance des réussites et identification des pistes d'amélioration</Text>
                    <Text typo="paragraph">Exercices de groupe pour encourager l'apprentissage continu et le développement artistique</Text>

                </div>
                <div className={classes.subModule}>
                    <Text typo="paragraph">Module 4 : Suivi et évaluation continus : 70 heures</Text>
                    <Text typo="paragraph">Introduction aux outils d'évaluation des performances physiques et mentales</Text>
                    <Text typo="paragraph">Planification et mise en œuvre d'évaluations régulières pour mesurer les progrès</Text>
                    <Text typo="paragraph">Adaptation du plan d'optimisation en fonction des résultats des évaluations</Text>
                    <Text typo="paragraph">Élaboration de plans d'entraînement et de développement pour atteindre des objectifs spécifiques</Text>
                    <Text typo="paragraph">Stratégies pour adapter les approches en fonction des objectifs identifiés</Text>
                    <Text typo="paragraph">Importance de l'établissement d'une vision à long terme pour l'amélioration continue</Text>


                </div>
            </div>
            <div className={classes.textModule}>
                <Text className={classes.heading2} typo="heading2">Modalités d’évaluations</Text>
                <Text typo="paragraph">Les épreuves utilisées pour évaluer la formation englobent une variété de formats conçus pour mesurer et développer les compétences cruciales de l'artiste. Celles-ci comprennent des analyses approfondies des défis spécifiques, la définition d'objectifs SMART, la planification détaillée des étapes de préparation, des exercices pratiques de gestion du temps, des simulations de communication, des auto-évaluations équilibrées, des évaluations physiques et mentales, ainsi que l'élaboration de plans d'action à court et long terme.</Text>
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