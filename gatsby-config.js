module.exports = {
  siteMetadata: {
    title: "Unique Recipes",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "7uqVZ-syg7Wl9Wf3PA77qXFALpF_HLVxfV1KibMI04k",
        spaceId: "",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "123456",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
