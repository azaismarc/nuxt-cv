<template>
    <section>
        <h1>Références</h1>
        <div class="flex flex-row justify-start">
            <div v-for="{ id, attributes } of $profil.references.data" :key="id">
                {{ attributes.prenom }} {{ attributes.nom }} <br>
                {{ attributes.relation }} <br>
                {{ attributes.poste }} <br>
                {{ attributes.entreprise }} <br>
                {{ attributes.ville }} <br>
                {{ attributes.telephone }} <br>
                {{ attributes.contact }} <br>
            </div>
        </div>
    </section>
</template>