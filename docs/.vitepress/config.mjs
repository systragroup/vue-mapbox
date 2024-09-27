import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VueMapbox 3",
  description: "A Vue3 mapbox wrapper",
  base:"/vue-mapbox/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/README' },
      { text: 'API', link: '/api/README' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Quickstart', link: '/guide/README' },
          { text: 'Base map', link: '/guide/basemap' },
          { text: 'Composition', link: '/guide/composition' },
          { text: 'Controls', link: '/guide/controls' },
          { text: 'Markers and popups', link: '/guide/markers&popups' },
          { text: 'Layers and sources', link: '/guide/layers&sources' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'GlMap', link: '/api/README' },
          { text: 'Controls', link: '/api/controls' },
          { text: 'MapMarker', link: '/api/marker' },
          { text: 'Popup', link: '/api/popup' },
          { text: 'Layer commons', link: '/api/Layers/README' },
          { text: 'Geojson Layer', link: '/api/Layers/geojsonlayer' },
          { text: 'Vector Layer', link: '/api/Layers/vectorlayer' },
          { text: 'Raster Layer', link: '/api/Layers/rasterlayer' },
          { text: 'Image Layer', link: '/api/Layers/imagelayer' },
          { text: 'Symbol Layer', link: '/api/Layers/symbollayer' },
          { text: 'Video Layer', link: '/api/Layers/videolayer' },
          { text: 'Canvas Layer', link: '/api/Layers/canvaslayer' },
        ]
      },
      {
        text: 'Plugin components',
        items: [
          { text: 'Using plugin components', link: '/plugin_components/README' },
          { text: 'Create a plugin component', link: '/plugin_components/plugin_components_development' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/systragroup/vue-mapbox' }
    ],
    footer:{message: 'Released under the MIT License.'}
  }
})
