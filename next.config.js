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


/*
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

const webpackConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(localEnv)
    )
    if (!isServer) {
      config.externals.push(fs);
    }

    return config;
  }
};
*/

/* See https://github.com/cyrilwanner/next-compose-plugins#nextconfiguration */
module.exports = withPlugins(
  [
    [withImages, {
      /* config for next-images */
    }],
  
    // your other plugins here

  ], webpackConfig
);