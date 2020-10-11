<template>
	<article class="PostListItem">
		<h2 class="PostListItem-heading">
			<a class="PostListItem-link" :href="post.path">
				{{ post.title }}
			</a>
		</h2>
		<p v-if="post.frontmatter.description" class="PostListItem-description">
			{{ post.frontmatter.description }}
		</p>
		<DateTime :date="post.frontmatter.date" />
		<TagList :tags="post.frontmatter.tags || null" />
		<img
			v-if="post.frontmatter.image"
			class="PostListItem-image"
			:src="post.frontmatter.image"
			alt
		/>
	</article>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	computed: {
		formattedDate() {
			const date = new Date(this.post.frontmatter.date);
			return date.toLocaleString("en-GB", {
				month: "long",
				year: "numeric",
				day: "numeric",
			});
		},
	},
	methods: {
		getTagLink(tag) {
			if (this.$site.themeConfig.tags) {
				const { link } =
					this.$site.themeConfig.tags.find(({ text }) => text === tag) || {};

				return link;
			}
		},
	},
};
</script>
