const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Stefan Kovac - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Stefan Kovac', // Alternative Site title for SEO
  siteTitleShort: 'Stefan', // short_name for manifest
  siteHeadline: 'Full Stack Developer and Designer', // Headline for schema.org JSONLD
  siteUrl: 'stefankovac.ca', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: `If you want to know more about Stefan Kovac's work then you're in the right place!`,
  author: 'Stefan Kovac', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '', // Twitter Username
  ogSiteName: '', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
