<template>
    <section>
        <h1>Centre d'interêts</h1>
        <div class="mb-2" v-for="{ id, attributes } in $profil.hobbies.data" :key="id">
            <h3>{{ attributes.titre }}</h3>
        </div>
    </section>
</template>