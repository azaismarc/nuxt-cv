<template>
    <article class="grid grid-cols-12 my-2">
        <div class="col-span-3">
          <template v-if="date_debut"><span>{{ date_debut }}</span><br/></template>
          <template v-if="date_fin"><span>{{ date_fin }}</span><br/></template>
            <span class="text-gray">{{ ville }}</span>
        </div>
        <div>
          <div class="dot"/>
          <div class="line"/>
        </div>
        <div class="col-span-8">
            <h2>{{ titre }}</h2>
            <h3 class="mb-1">{{ soustitre }}</h3>
            <Markdown :md="description"/>
        </div>
      </article>
</template>

<script setup lang="ts">
import { markdown } from '~/plugins/strapi/types';

const props = defineProps<{
  titre: string
  soustitre: string
  description?: markdown
  date_debut?: string
  date_fin?: string
  ville: string
}>();
</script>