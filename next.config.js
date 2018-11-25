// next.config.js
const withPlugins = require('next-compose-plugins');

/* For now use next-images, since next-optimized-images 1.4.1 has a problematic dependencies on tunnel-agent (moderate severity vulnerability) 
and gulp-util (which is a deprecated). Swap packages when fixed. */
const withImages = require('next-images'); 

// Customizing webpack configuration:
/* See https://github.com/cyrilwanner/next-compose-plugins#nextconfiguration, https://github.com/webpack-contrib/file-loader#getting-started, 
and https://nextjs.org/docs/#customizing-webpack-config. */
// - Adapt webpack configuration in order to use 'import' with image files */

const webpackConfig = {
  distDir: 'build',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|PNG|jpg|JPG|gif|GIF|)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'file-loader',
          options: '' 
        }
      ]
    });

    return config;
  },
};

// Next.js environment configuration
// See: https://zeit.co/blog/next5-1#environment-configuration

// Use dotenv to read .env vars into Node
require('dotenv').config();

const environmentConfig = {
  serverRuntimeConfig: { // Will only be available on the server side
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY,
    MAILCHIMP_DATA_CENTER: process.env.MAILCHIMP_DATA_CENTER,
    MAILCHIMP_API_VERSION: process.env.MAILCHIMP_API_VERSION,
    MAILCHIMP_MEMBERS_LIST_ID: process.env.MAILCHIMP_MEMBERS_LIST_ID,
  },
  publicRuntimeConfig: { // Will be available on both server and client
    
  }
};

// Merge configurations
const nextConfig = Object.assign({}, webpackConfig, environmentConfig);

/* See https://github.com/cyrilwanner/next-compose-plugins#nextconfiguration */
module.exports = withPlugins(
  [
    [withImages, {
      /* config for next-images */
    }],
  
    // your other plugins here

  ], nextConfig
);