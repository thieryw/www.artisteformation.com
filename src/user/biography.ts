import type { Language } from "@/i18n";
import fondateurJpg from "@/assets/jpg/a-propos/le-fondateur.jpeg";

export const biography: Record<Language, {
    surtitle: string;
    title: string;
}> & {
    paragraphs: Record<Language, string>[]
    imageUrl: string;
    mobileDeviceTabs: Record<Language, {
        title: string;
        paragraphs: string[];
    }>[]
} = {
    "fr": {
        "surtitle": "LE FONDATEUR",
        "title": "César Guigue"
    },
    "imageUrl": fondateurJpg,
    "paragraphs": [
        {
            "fr": "L' histoire de César Guigue commence dans une famille de mélomanes, en 1983. Dès l'âge de 5 ans, il saisit un violon et ne le lâchera plus. À 14 ans, il obtient déjà plusieurs diplômes au Conservatoire de Bourgoin-Jallieu : violon, musique de chambre, piano et théorie musicale. Cette formation solide le propulse vers des réussites remarquables, notamment le Concours centralisé du Conservatoire de la Ville de Paris pour n’en citer qu’une."
        },
        {
            "fr": "Son parcours a été jalonné de succès : de ses études au Royal College of Music de Londres à l’enseignement à échelle européenne, en passant par l’orchestre philharmonique de Strasbourg et la création du Quatuor Sempre, lauréat de prix prestigieux."

        },
        {
            "fr": "Plus qu'un musicien talentueux, César est aussi un innovateur. Fasciné par l'union de la musique et de la technologie, il est l'un des pionniers du e.teaching, une fusion entre l'art et le numérique. Mais peu à peu, César Guigue va faire une observation cruciale : l'offre de formation existante n'est pas suffisamment adaptée aux besoins spécifiques des artistes, en particulier ceux du domaine du spectacle vivant et de l'audiovisuel. Il se met alors en tête de créer une alternative. Inspiré par sa propre expérience et impatient de relever ce nouveau défi, César Guigue se lance : rassemblant autour de lui un cercle de techniciens, d'artistes divers, de professionnels de la santé, de la communication et bien d'autres disciplines, il se fixe une mission : créer des opportunités de développement professionnel adaptées à la singularité de chaque parcours artistique. Dès lors, César pose les bases de ce qui deviendra dès 2018 l'une des plus grosses opportunités pour tout intermittent, et révèlera de nombreuses carrières."
        }

    ],
    "mobileDeviceTabs": [
        {
            "fr": {
                "title": "01. / PARCOURS MUSICAL",
                "paragraphs": [
                    "L' histoire de César Guigue commence dans une famille de mélomanes, en 1983. Dès l'âge de 5 ans, il saisit un violon et ne le lâchera plus. À 14 ans, il obtient déjà plusieurs diplômes au Conservatoire de Bourgoin-Jallieu : violon, musique de chambre, piano et théorie musicale. Cette formation solide le propulse vers des réussites remarquables, notamment le Concours centralisé du Conservatoire de la Ville de Paris pour n’en citer qu’une.",
                    "Son parcours a été jalonné de succès : de ses études au Royal College of Music de Londres à l’enseignement à échelle européenne, en passant par l’orchestre philharmonique de Strasbourg et la création du Quatuor Sempre, lauréat de prix prestigieux."
                ]
            }
        },
        {
            "fr": {
                "title": "02. / ARTISTE FORMATION",
                "paragraphs": [
                    "Plus qu'un musicien talentueux, César est aussi un innovateur. Fasciné par l'union de la musique et de la technologie, il est l'un des pionniers du e.teaching, une fusion entre l'art et le numérique. Mais peu à peu, César Guigue va faire une observation cruciale : l'offre de formation existante n'est pas suffisamment adaptée aux besoins spécifiques des artistes, en particulier ceux du domaine du spectacle vivant et de l'audiovisuel. Il se met alors en tête de créer une alternative. Inspiré par sa propre expérience et impatient de relever ce nouveau défi, César Guigue se lance : rassemblant autour de lui un cercle de techniciens, d'artistes divers, de professionnels de la santé, de la communication et bien d'autres disciplines, il se fixe une mission : créer des opportunités de développement professionnel adaptées à la singularité de chaque parcours artistique. Dès lors, César pose les bases de ce qui deviendra dès 2018 l'une des plus grosses opportunités pour tout intermittent, et révèlera de nombreuses carrières."
                ]
            }
        }
    ]
}