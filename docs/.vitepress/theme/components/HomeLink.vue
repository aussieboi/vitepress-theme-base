<template>
	<a class="HomeLink" href="/" title="Go to homepage">
		<img
			v-if="$site.themeConfig.logo"
			:src="$site.themeConfig.logo"
			:alt="$site.title"
		/>
		<span>{{ $site.title }}</span>
	</a>
</template>
