<template>
    <section class="PostList">
        <PostListItem
            v-for="post in shownPosts"
            :key="post.id"
            ref="item"
            :post="post"
        />
        <p v-if="!posts.length" class="PostList-empty">No posts found</p>
        <button
            v-if="currentLength < posts.length"
            class="PostList-more"
            type="button"
            @click="showMore"
        >
            Show more
        </button>
    </section>
</template>

<script>
import PostListItem from "./../components/PostListItem.vue";

export default {
    components: {
        PostListItem,
    },
    props: {
        directory: String,
        length: String,
        tag: String,
    },
    data() {
        return {
            currentLength: +this.length || 10,
        };
    },
    computed: {
        posts() {
            const directoryPosts = this.filterByDirectory(this.$site.pages);
            const tagPosts = this.filterByTag(directoryPosts);
            const sortedPosts = this.sortByDateDesc(tagPosts);
            return sortedPosts;
        },
        shownPosts() {
            return this.posts.slice(0, this.currentLength);
        },
    },
    methods: {
        filterByDirectory(posts) {
            if (this.directory) {
                return posts.filter((post) => {
                    if (
                        post.title &&
                        post.frontmatter.date &&
                        post.relativePath.startsWith(this.directory + "/")
                    ) {
                        return posts;
                    }
                });
            }

            return posts;
        },
        filterByTag(posts) {
            const tag = this.tag && this.tag.toLowerCase();

            if (tag) {
                return posts.filter((post) => {
                    const postTags =
                        post.frontmatter.tags &&
                        post.frontmatter.tags.map((tag) => tag.toLowerCase());

                    if (postTags && postTags.includes(tag)) {
                        return posts;
                    }
                });
            }

            return posts;
        },
        sortByDateDesc(posts) {
            return posts.sort((a, b) => {
                const x = a.frontmatter.date.toLowerCase();
                const y = b.frontmatter.date.toLowerCase();
                if (x < y) {
                    return 1;
                }
                if (x > y) {
                    return -1;
                }
                return 0;
            });
        },
        showMore() {
            // retain focus position within the items
            this.$refs.item[this.currentLength - 1].$el
                .querySelector("a")
                .focus();

            // double the number of items displayed
            this.currentLength += this.currentLength;
        },
    },
};
</script>
