<template>
	<div class="Layout">
		<slot name="headerBefore" />

		<header id="header">
			<slot name="headerStart" />
			<HomeLink />
			<SkipLink />
			<NavPrimary />
			<slot name="headerEnd" />
		</header>

		<slot name="headerAfter" />

		<main id="main">
			<slot name="mainStart" />
			<Content />
			<slot name="mainEnd" />
		</main>

		<slot name="footerBefore" />

		<footer id="footer">
			<slot name="footerStart" />
			<EndCredit />
			<slot name="footerEnd" />
		</footer>

		<slot name="footerAfter" />
	</div>
</template>

<script>
import HomeLink from "./components/HomeLink.vue";
import EndCredit from "./components/EndCredit.vue";
import NavPrimary from "./components/NavPrimary.vue";
import SkipLink from "./components/SkipLink.vue";
import TagList from "./global-components/TagList.vue";

export default {
	components: {
		HomeLink,
		EndCredit,
		NavPrimary,
		SkipLink,
	},
};
</script>
