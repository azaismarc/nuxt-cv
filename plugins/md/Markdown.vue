<template>
    <div v-if="md" v-html="render(md)"/>
</template>

<script setup lang="ts">
import type { markdown } from '../strapi/types'
import render from './showdown';

interface Props {
  md?: markdown
}

defineProps<Props>();
</script>