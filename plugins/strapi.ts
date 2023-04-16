import StrapiProfile from "./strapi/types";

const url = 'http://localhost:1337/api';

const populates: string[] = [
    'photo',
    'formations',
    'experiences',
    'competences',
    'softskills',
    'certifications',
    'references',
    'hobbies'
];

export default defineNuxtPlugin(async () => {
    const request = await useFetch<StrapiProfile>(`${url}/profil?${populates.map((p, index) => `populate[${index}]=${p}`).join('&')}`);
    const strapi = request.data.value;
    
    if (!strapi) {
        throw new Error('No data found');
    }

    const profil = strapi.data.attributes;

    return {
        provide: {
            profil
        }
    }
});