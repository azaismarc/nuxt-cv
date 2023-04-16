<template>
    <div class="mb-3" v-for="{ id, attributes } of competence.data" :key="id">
        <h2>{{ attributes.titre }}</h2>
        <Markdown :md="attributes.description" />
    </div>
</template>

<script setup lang="ts">
import type { StrapiCompetence } from '~/plugins/strapi/types';

defineProps<{
    competence: StrapiCompetence
}>();
</script>