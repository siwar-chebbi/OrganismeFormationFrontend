import { Lieu } from "./lieu";

export interface Bilan {
        id: number;
        absence: number;
        numeroSessionEval: number;
        prerequis: number;
        accueil: number;
        environnement: number;
        contenu: number;
        pedagogie: number;
        maitrise: number;
        disponibilite: number;
        reponse: number;
        animation: number;
        souhaitFormation: number;
        recommandation: number;
        satisfaction: number;
        // participant: {
        //     id: number;
        //     civilite: number;
        //     nom: string;
        //     prenom: string;
        //     dateNaissance: Date;
        //     entreprise: number;
        //     coordonnee: {
        //         id: number;
        //         numeroVoie: number;
        //         typeVoie: string;
        //         ville: string;
        //         codePostal: string;
        //         pays: string;
        //         mail: string;
        //         telephone: string;
        //         entreprise: number;
        //     }
        // },
        // session: {
        //     id: number;
        //     numero: number;
        //     type: number;
        //     prixHT: number;
        //     personalisee: number;
        //     duree: 10;
        //     validation: null;
        //     dateDebut: null;
        //     dateFin: null;
        //     formation: {
        //         id: number;
        //         numero: number;
        //         titre: string;
        //         contenu: string;
        //         logiciel: string;
        //         support: string;
        //         responsable: {
        //             id: number;
        //             nom: string;
        //             prenom: string;
        //             role: number;
        //             mail: string;
        //             telephone: string;
        //             hibernateLazyInitializer: {};
        //         },
        //         themes: [];
        //         hibernateLazyInitializer: {};
        //     },
            // lieu:Lieu;
        // }
}