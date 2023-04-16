export type markdown = string;

interface Media {
    url: string,
}

interface Formation {
    intitule: string,
    organisme: string,
    description?: markdown,
    date_debut?: string,
    date_fin?: string,
    ville: string,
}

interface Experience {
    poste: string,
    employeur: string,
    description: markdown,
    date_debut: string,
    date_fin?: string,
    ville: string,
}


interface Competence {
    titre: string,
    description?: markdown,
}

interface Certification {
    titre: string,
    organisme: string,
    date: string,
    ville: string,
}

interface Reference {
    nom: string,
    prenom: string,
    poste: string,
    entreprise: string,
    contact: string,
    telephone?: string,
    relation: string,
    ville: string,
}

interface Hobby {
    titre: string,
}

interface Profile {
    prenom: string,
    nom: string,
    age?: number
    titre: string,
    description: markdown,
    telephone: string,
    mail: string,
    code_postal: string,
    ville: string,
    linkedIn: string,
    github: string,
    photo: Strapi<Media>,
    formations: StrapiArray<Formation>,
    experiences: StrapiArray<Experience>,
    competences: StrapiArray<Competence>,
    softskills: StrapiArray<Competence>,
    certifications: StrapiArray<Certification>,
    references: StrapiArray<Reference>,
    hobbies: StrapiArray<Hobby>,
}

interface Strapi<T> {
    data: {
        id: number,
        attributes: T
    }
}

interface StrapiArray<T> {
    data: {
        id: number,
        attributes: T
    }[]
}

export interface StrapiCompetence extends StrapiArray<Competence> {}

export default interface StrapiProfile extends Strapi<Profile> {}