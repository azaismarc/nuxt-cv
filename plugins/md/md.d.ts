import md from "./Markdown.vue"

declare module 'vue' {
  export interface GlobalComponents {
    Markdown: typeof md
  }
}