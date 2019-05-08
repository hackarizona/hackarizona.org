const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', 
  siteTitle: 'Hack Arizona',
  siteTitleAlt: 'hackarizona',
  siteUrl: 'https://hackarizona.org',
  siteLanguage: 'en',
  siteLogo: '../../static/favicons/HackArizona-icon.png', // Used for SEO and manifest
  siteDescription: 'Hack Arizona is a hackathon Jan. 17-19, 2020, at the University of Arizona',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@hack_arizona', // Twitter Username
  ogSiteName: 'hackarizona', // Facebook Usernameame
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
