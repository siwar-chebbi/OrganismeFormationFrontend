export interface Session {
    // id:number;
    // dateDebut:Date;
    // datefin:Date;
    // duree:number;
    // numero:number;
    // personnalisee:number;
    // prix:number;
    // type:number;
    // validation:number;
    // formationId:number;
    // lieuId:number;
    
    id: number;
    numero: number;
    type: number;
    prixHT: number;
    personalisee: number;
    duree: number;
    validation: number;
    dateDebut: Date;
    dateFin: Date;
    formation: {
        id: number;
        numero: number;
        titre: string;
        contenu: string;
        logiciel: string;
        support: string;
        responsable: {
            id: number;
            nom: string;
            prenom: string;
            role: string;
            mail: string;
            telephone: string;
            hibernateLazyInitializer: {};
        },
        themes: [];
        hibernateLazyInitializer: {};
    },
    lieu: {
        id: number;
        nom: string;
        salle: number;
        disponibilite: false;
        hibernateLazyInitializer: {};
    }
}
