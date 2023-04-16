<template>
    <section>
        <h1>Expérience</h1>
        <template v-for="{ id, attributes } of $profil.experiences.data" :key="id">
            <CvArticle
                :titre="attributes.poste"
                :soustitre="attributes.employeur"
                :description="attributes.description"
                :date_debut="attributes.date_debut"
                :date_fin="attributes.date_fin"
                :ville="attributes.ville"/>
        </template>
    </section>
</template>