import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/website';
import ReactGA from 'react-ga';

import MetaImage from '../images/meta-image.png'
import Favicon from '../../static/favicons/favicon.png'

import PageHeader from "../components/PageHeader";

function InitializeGA () {
  ReactGA.initialize('UA-129015704-1');
  ReactGA.pageview('/');
}

const BuildFromHTML = () => { 
  return (`
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-129015704-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-129015704-1');
    </script>
  `
  )
}

const SEO = () => {
  const title = config.siteTitle;
  const description = config.siteDescription;
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
  const image = config.siteUrl + realPrefix + config.siteLogo;
  const blogURL = config.siteUrl + config.pathPrefix;
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ];
  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>Hack Arizona | The largest hackathon in the Southwest</title>
      <meta name="description" content='Hack Arizona is the largest hackathon in the Southwest. January 18-20, 2019. Learn more and register now!' />
      <link rel="icon" type="image/png" sizes="32x32" href={Favicon} />
      <link rel="icon" type="image/png" sizes='16x16' href={Favicon} />
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content='Hack Arizona' />
      <meta property="og:image" content={MetaImage} />
      <meta property="og:title" content="Hack Arizona | The largest hackathon in the Southwest"></meta>
      <meta property="og:description" content='Hack Arizona is the largest hackathon in the Southwest. January 18-20, 2019. Learn more and register now!' />
      <meta property="og:image" content={MetaImage}  />
      <meta property="og:url" content="https://hackarizona.org" />
      <meta name="twitter:title" content="Hack Arizona | The largest hackathon in the Southwest "></meta>
      <meta name="twitter:description" content='Hack Arizona is the largest hackathon in the Southwest. January 18-20, 2019. Learn more and register now!'/>
      <meta name="twitter:image" content={MetaImage} />
      <meta name="twitter:card" content={MetaImage}  />
      <div _dangerouslySetInnerHTML={{__html: BuildFromHTML()}}/>
      {/* 
      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content={config.backgroundColor} />
      <meta name="msapplication-config" content="browserconfig.xml" />
      <meta name="description" content={description} />
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      */}
    </Helmet>
  );
};

export default SEO;
