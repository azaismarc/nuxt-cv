import MarkdownVue from './md/Markdown.vue';

export default defineNuxtPlugin((nuxt) => {
    nuxt.vueApp.component('Markdown', MarkdownVue);
});