# Quickstart

## Using as ES module

### Installation

You can install vue-mapbox via npm. Take note that you need to install mapbox-gl and map-promisified as peer dependency:

```bash
npm i vue-mapbox mapbox-gl
npm i map-promisified
npm i mapbox-gl
```

in your vite.config.js add:

```js
  optimizeDeps: {
    include: ['map-promisified'],
  }
```



Add mapbox JS and CSS files to the files where you need them:

```js
import "mapbox-gl/dist/mapbox-gl.css";
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";
```

