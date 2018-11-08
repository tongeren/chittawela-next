// next.config.js
const withPlugins = require('next-compose-plugins');
/* For now use next-images, since next-optimized-images 1.4.1 has a problematic dependencies on tunnel-agent (moderate severity vulnerability) 
and gulp-util (which is a deprecated). Swap packages when fixed. */
const withImages = require('next-images'); 

module.exports = withPlugins([
  [withImages, {
    /* config for next-images */
  }],

  // your other plugins here

]);