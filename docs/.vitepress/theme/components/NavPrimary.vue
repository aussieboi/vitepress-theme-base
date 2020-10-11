<template>
	<nav class="NavPrimary">
		<LinkList :links="$site.themeConfig.nav" />
	</nav>
</template>

<script>
import LinkList from "./LinkList.vue";

export default {
	components: {
		LinkList,
	},
};
</script>
