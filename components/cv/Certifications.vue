<template>
    <section>
        <h1>Certifications</h1>
        <template v-for="{ id, attributes } of $profil.certifications.data" :key="id">
            <CvArticle
                :titre="attributes.titre"
                :soustitre="attributes.organisme"
                :date_debut="attributes.date"
                :ville="attributes.ville"/>
        </template>
    </section>
</template>