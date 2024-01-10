import type { Language } from "@/i18n";
import jpg1 from "@/assets/jpg/formateurs/Galerie formateurs/1-jerome-viollet.jpeg";
import jpg2 from "@/assets/jpg/formateurs/Galerie formateurs/2-cesar-guigue.jpeg";
import jpg3 from "@/assets/jpg/formateurs/Galerie formateurs/3-lucas-ciavatta.jpeg";
import jpg4 from "@/assets/jpg/formateurs/Galerie formateurs/4-laurence-paillot.jpeg";
import jpg5 from "@/assets/jpg/formateurs/Galerie formateurs/5-veronique-papillon.jpeg";
import jpg6 from "@/assets/jpg/formateurs/Galerie formateurs/6-mathieu-herzog.jpeg";
import jpg7 from "@/assets/jpg/formateurs/Galerie formateurs/7-marc-papillon.jpeg";
import jpg8 from "@/assets/jpg/formateurs/Galerie formateurs/8-patrick-roger.jpeg";

export type Partner = Record<Language, {
    name: string;
    profession: string;
    description: string;
}> & {
    portraitUrl: string;
}

export const partners: Partner[] = [
    {
        "fr": {
            "name": "Jérôme Viollet",
            "profession": "Expert en musiques Afrocubaines",
            "description": "En tant que percussionniste, chanteur et compositeur, Jérôme Viollet ajoute une dimension rythmique et vocale unique à son enseignement, permettant aux musiciens de se connecter à la musique de manière incroyablement organique."
        },
        "portraitUrl": jpg1
    },
    {
        "fr": {
            "name": "César Guigue",
            "profession": "Violoniste, Chef d’orchestre & Entrepreneur",
            "description": "De par ses expériences professionnelles nombreuses et variées, César dispose d’une compréhension approfondie des défis auxquels les musiciens sont confrontés, et il innove constamment son enseignement en l’adaptant à ces enjeux."
        },
        "portraitUrl": jpg2
    },
    {
        "fr": {
            "name": "Lucas Ciavatta",
            "profession": "Musicien & Créateur de la méthode “O Passo”",
            "description": "Son approche pédagogique innovante permet aux musiciens une compré-hension plus profonde de la musique et du mouvement. Son travail a eu des retentissements à l’international, notamment en Amérique et en Europe."
        },
        "portraitUrl": jpg3
    },
    {
        "fr": {
            "name": "Laurence L. Paillot",
            "profession": "Experte en communication culturelle",
            "description": "Avec une carrière impressionnante dans la communication culturelle, Laurence apporte son regard expert sur l'industrie artistique et la gestion de projets culturels, enrichissant ainsi la palette d’outils des artistes."
        },
        "portraitUrl": jpg4
    },
    {
        "fr": {
            "name": "Véronique M. Papillon",
            "profession": "Violoniste & Pédagogue",
            "description": "Très expérimentée en communication et en événementiel, Véronique forme les musiciens sur les stratégies de marketing digital et la gestion des relations publiques, leur permettant de briller dans l'environnement numérique actuel."
        },
        "portraitUrl": jpg5
    },
    {
        "fr": {
            "name": "Mathieu Herzog",
            "profession": "Chef d'Orchestre & Chambriste de renom",
            "description": "En tant que chef d'orchestre, altiste, compositeur mais aussi membre fondateur du Quatuor Ebène, Mathieu apporte une sensibilité artistique unique, et une efficacité concrète dans le travail instrumental, conduisant ses élèves vers l'excellence."
        },
        "portraitUrl": jpg6
    },
    {
        "fr": {
            "name": "Marc Papillon",
            "profession": "Kinésithérapeute & Musicien",
            "description": "Spécialiste de l’anatomie musicale, Marc forme les musiciens à 360° en se con-centrant sur l'ergonomie du geste, la gestion des émotions et la prévention des blessures, aidant ainsi les artistes à réaliser leur plein potentiel."
        },
        "portraitUrl": jpg7
    },
    {
        "fr": {
            "name": "Patrick Roger",
            "profession": "Hautboïste émérite & Coach d’artistes",
            "description": "Enseignant en CNSM et Cor anglais solo de l’Opéra national de Lyon, Patrick a acquis une expertise en gestion du trac et une capacité à former d'autres formateurs. Il est un pédagogue et acteur incontour-nable du monde musical."
        },
        "portraitUrl": jpg8
    }
]