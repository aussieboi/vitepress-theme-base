<template>
	<ul v-if="tagList" class="TagList">
		<li v-for="tag in tagList" :key="tag.id" class="TagList-item">
			<a v-if="typeof tag.link === 'string'" :href="tag.link">{{ tag.text }}</a>
			<a v-else-if="getTagLink(tag)" :href="getTagLink(tag)">{{ tag }}</a>
			<slot v-else>{{ tag }}</slot>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		tags: Array,
	},
	computed: {
		tagList() {
			return this.tags === undefined ? this.$site.themeConfig.tags : this.tags;
		},
	},
	methods: {
		getTagLink(tag) {
			if (this.$site.themeConfig.tags) {
				const { link } =
					this.$site.themeConfig.tags.find(
						({ text }) => text.toLowerCase() === tag.toLowerCase()
					) || {};

				return link;
			}
		},
	},
};
</script>
