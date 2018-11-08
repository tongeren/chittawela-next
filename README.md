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

install, and manually update tunnel-agent's versions to 0.6.0 in package.lock.json after each pacakge addition
```
$ npm i tunnel-agent
```
in order to remove 9 moderate security vulnerabilities: https://nodesecurity.io/advisories/598.

```
$ touch next.config.js
```

```
// next.config.js
const withPlugins = require('next-compose-plugins');
const css = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [css, {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: "[module]__[local]__[hash:base64:5]",
        },   
    }],
    [optimizedImages, {
       // https://github.com/cyrilwanner/next-optimized-images#configuration    
    }],    
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