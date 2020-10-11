<template>
  <Content v-if="pageKey" :page-key="pageKey" />
</template>

<script>
export default {
  props: {
    src: String,
  },
  computed: {
    pageKey() {
      let src = this.src

      // Add .md extension if missing
      if (!src.endsWith('.md')) src += '.md'

      // Check if the src is the current page
      if (src === this.$page.relativePath) {
        console.warn('<ContentPart /> cannot display a page within itself')
        return
      }

      // Find the page within the site and extract the key
      const { key } =
        this.$site.pages.find(({ relativePath }) => src === relativePath) || {}

      // Return page key or not found warning
      return key || console.warn(src + ' not found')
    },
  },
}
</script>
