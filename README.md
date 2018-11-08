# Chittawela

```
$ mkdir chittawela-next
$ cd chittawela-next
$ npm init -y
$ npm i react react-dom next
$ mkdir pages
```

```
$ npm i cloudinary-react
```

```
$ npm i @zeit/next-css
```

https://github.com/cyrilwanner/next-compose-plugins
```
$ npm i next-compose-plugins
```

```
$ touch next.config.js
```

```
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
```

```
$ mkdir layouts 
```

```
$ npm i next-assets-import
```

```
$ npm i styled-jsx
```

Next, add styled-jsx/babel to plugins in your .babelrc:
```
{
  "plugins": [
    "styled-jsx/babel"
  ]
}
```