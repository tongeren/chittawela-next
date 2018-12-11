// next.config.js
const withPlugins = require('next-compose-plugins');

// For now use next-images, since next-optimized-images 1.4.1 has a problematic dependencies on tunnel-agent (moderate severity vulnerability) 
// and gulp-util (which is a deprecated). Swap packages when fixed. 
const withImages = require('next-images'); 

/* Make import of .sass or .scss files in Next.js possible */
const withSass = require('@zeit/next-sass');

// Customizing webpack configuration:
// See https://github.com/cyrilwanner/next-compose-plugins#nextconfiguration, https://github.com/webpack-contrib/file-loader#getting-started, 
// and https://nextjs.org/docs/#customizing-webpack-config. 

// - Adapt webpack configuration in order to use 'import' with image files 

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

    // See https://github.com/nuxt-community/dotenv-module/issues/11
    config.node = {fs: "empty"};

    return config;
  },
};

/* See https://github.com/cyrilwanner/next-compose-plugins#nextconfiguration */
module.exports = withPlugins(
  [
    [withImages, {
      /* config for next-images */
    }],
  
    [withSass, {
      /* config for next-sass */
    }],

    // your other plugins here

  ], webpackConfig
);