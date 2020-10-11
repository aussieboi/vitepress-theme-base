<template>
	<ul class="LinkList">
		<li v-for="item in $attrs.links" :key="item.text">
			<a v-if="item.link.startsWith('/')" :href="item.link">
				{{ item.text }}
			</a>

			<a v-else :href="item.link">
				{{ item.text }}
			</a>
		</li>
	</ul>
</template>
