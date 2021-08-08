module.exports = {
  siteMetadata: {
    title: `Ken's Blog`,
    description: `Programming blog created with Gatsby`,
    author: `Ken Cheung`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyA8Nv1n-y_I4twumwIMNEi1wVb7kebt2y4",
          authDomain: "personal-blog-7bf0b.firebaseapp.com",
          projectId: "personal-blog-7bf0b",
          storageBucket: "personal-blog-7bf0b.appspot.com",
          messagingSenderId: "214552775085",
          appId: "1:214552775085:web:83d0866cc55f8af9dab924",
          measurementId: "G-HC9V7THJZL",
        },
      },
    },
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/content/blogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    // include our netlify cms assets
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    // set up *.md files processing
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          // prepare images for gatsby
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
            },
          },
          // display embedded content (f.e. youtube videos)
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // display embedded code fragments
          {
            resolve: `gatsby-remark-vscode`,
          },
          // copy files (i.e. images) to public folder during build process
          // for production
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          // improve syntax
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ken's Blog`,
        short_name: `ken`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `es`, `de`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://example.com/`,
        // you can pass any i18next options
        // pass following options to allow message content as a key
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: ".",
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["es"],
          },
          {
            matchPath: "/preview",
            languages: ["en"],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
