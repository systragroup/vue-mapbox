---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VueMapbox" 
  text: "Mapbox for Vue.js 3 "
  tagline: <a href="https://github.com/soal/vue-mapbox">A fork of vue-mapbox by Soal</a>
  image:
    src: /logo.svg
    alt: VueMapbox
  actions:
    - theme: brand
      text: Get Started
      link: /guide/README
    - theme: alt
      text: API
      link: /api/README

features:
  - title: Easy migration to Vue 3
    details: Bare minimum was changed to work with Vue 3. Every component are the same as before for a easy migration
  - title: Declarative style
    details: You can use map elements like layers, markers, popups as Vue components and control them via synchronized props
  - title: Vuefied
    details: Map elements declared as components respect Vue lifecycle, emit map events like Vue events and can be used in OOP-style
  - title: Promisified async actions
    details: You can do async map operations and get results in Promise without messing with map events and figuring out what action cause it

footer:
  message: MIT Licensed
---

