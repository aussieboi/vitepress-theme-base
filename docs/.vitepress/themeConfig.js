module.exports = {
  logo: 'v-logo.svg',
  nav: [
    { text: 'Blog', link: '/blog.html' },
    { text: 'About', link: '/about.html' },
    { text: 'Contact', link: '/contact.html' },
    {
      text: 'GitHub',
      link: 'https://github.com/petedavisdev/vuepress-theme-base/',
    },
  ],
  tags: [
    { text: 'A tag', link: '/tag/a-tag/' },
    { text: 'Another tag', link: '/tag/another-tag/' },
    { text: 'Taggy McTagface', link: '/tag/taggy-mctagface/' },
  ],
  collections: [
    {
      directory: 'blog',
      layout: 'Post',
    },
  ],
  owner: 'Pete Davis',
}
