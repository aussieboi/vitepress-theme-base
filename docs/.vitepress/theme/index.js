import Layout from "./Layout.vue";
import ContentPart from "./global-components/ContentPart.vue";
import DateTime from "./global-components/DateTime.vue";
import PostList from "./global-components/PostList.vue";
import TagList from "./global-components/TagList.vue";
import SlotTest from "./global-components/SlotTest.vue";

export default {
	Layout,
	NotFound: () => "custom 404", // <- this is a Vue 3 functional component
	enhanceApp({ app, router, siteData }) {
		// app is the Vue 3 app instance from createApp()
		app.component("ContentPart", ContentPart);
		app.component("DateTime", DateTime);
		app.component("PostList", PostList);
		app.component("TagList", TagList);
		app.component("SlotTest", SlotTest);

		// router is VitePress' custom router (see `lib/app/router.js`)
		// siteData is a ref of current site-level metadata.
	},
};
