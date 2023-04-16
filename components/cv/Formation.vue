<template>
    <section>
        <h1>Formation</h1>
        <template v-for="{ id, attributes } of $profil.formations.data" :key="id">
            <CvArticle
                :titre="attributes.intitule"
                :soustitre="attributes.organisme"
                :description="attributes.description"
                :date_debut="attributes.date_debut"
                :date_fin="attributes.date_fin"
                :ville="attributes.ville"/>
        </template>
    </section>
</template>