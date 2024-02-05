import type { Language } from "@/i18n";
import jpg1 from "@/assets/jpg/a-propos/nos-petites-mains/1-cecile-garcia.jpeg"
import jpg2 from "@/assets/jpg/a-propos/nos-petites-mains/2-elisabeth-knnablian.jpeg"


export type Employee = Record<Language, {
    name: string;
    profession: string;
}> & {
    portraitUrl: string;
}

export const employees: Employee[] = [
    {
        "fr": {
            "name": "Cécile Garcia",
            "profession": "Gestion administrative"
        },
        "portraitUrl": jpg1
    },
    {
        "fr": {
            "name": "Elisabeth Knnablian",
            "profession": "Gestion financière"
        },
        "portraitUrl": jpg2
    }

]