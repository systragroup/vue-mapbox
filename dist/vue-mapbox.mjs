import { computed as f, openBlock as c, createElementBlock as p, setBlockTracking as y, createElementVNode as $, renderSlot as u, createCommentVNode as g } from "vue";
const i = {
  methods: {
    /**
     * Emit Vue event with additional data
     *
     * @param {string} name EventName
     * @param {Object} [data={}] Additional data
     */
    $_emitEvent(e, t = {}) {
      this.$emit(e, {
        map: this.map,
        component: this,
        ...t
      });
    },
    /**
     * Emit Vue event with Mapbox event as additional data
     *
     * @param {Object} event
     */
    $_emitMapEvent(e, t = {}) {
      this.$_emitEvent(e.type, { mapboxEvent: e, ...t }), e.originalEvent && e.originalEvent.stopPropagation();
    }
  }
}, v = {
  resize: { name: "resize" },
  webglcontextlost: { name: "webglcontextlost" },
  webglcontextrestored: { name: "webglcontextrestored" },
  remove: { name: "remove" },
  movestart: { name: "movestart" },
  load: { name: "load" },
  contextmenu: { name: "contextmenu" },
  dblclick: { name: "dblclick" },
  click: { name: "click" },
  touchcancel: { name: "touchcancel" },
  touchmove: { name: "touchmove" },
  touchend: { name: "touchend" },
  touchstart: { name: "touchstart" },
  dataloading: { name: "dataloading" },
  mousemove: { name: "mousemove" },
  mouseup: { name: "mouseup" },
  mousedown: { name: "mousedown" },
  sourcedataloading: { name: "sourcedataloading" },
  error: { name: "error" },
  data: { name: "data" },
  styledata: { name: "styledata" },
  sourcedata: { name: "sourcedata" },
  mouseout: { name: "mouseout" },
  styledataloading: { name: "styledataloading" },
  moveend: { name: "moveend" },
  move: { name: "move" },
  render: { name: "render" },
  zoom: { name: "zoom" },
  zoomstart: { name: "zoomstart" },
  zoomend: { name: "zoomend" },
  boxzoomstart: { name: "boxzoomstart" },
  boxzoomcancel: { name: "boxzoomcancel" },
  boxzoomend: { name: "boxzoomend" },
  rotate: { name: "rotate" },
  rotatestart: { name: "rotatestart" },
  rotateend: { name: "rotateend" },
  dragend: { name: "dragend" },
  drag: { name: "drag" },
  dragstart: { name: "dragstart" },
  pitch: { name: "pitch" },
  idle: { name: "idle" }
}, _ = {
  container: {
    type: [String, HTMLElement],
    default() {
      return `map-${("" + Math.random()).split(".")[1]}`;
    }
  },
  accessToken: {
    type: String,
    default: void 0
  },
  minZoom: {
    type: Number,
    default: 0
  },
  maxZoom: {
    type: Number,
    default: 22
  },
  mapStyle: {
    type: [String, Object],
    required: !0
  },
  hash: {
    type: [Boolean, String],
    default: !1
  },
  interactive: {
    type: Boolean,
    default: !0
  },
  bearingSnap: {
    type: Number,
    default: 7
  },
  pitchWithRotate: {
    type: Boolean,
    default: !0
  },
  clickTolerance: {
    type: Number,
    default: 3
  },
  // classes: {
  //   type: Array,
  //   default() {
  //     return []
  //   }
  // },
  attributionControl: {
    type: Boolean,
    default: !0
  },
  customAttribution: {
    type: [String, Array],
    default: null
  },
  logoPosition: {
    type: String,
    default: "bottom-left",
    validator: (e) => ["top-left", "top-right", "bottom-left", "bottom-right"].includes(e)
  },
  failIfMajorPerformanceCaveat: {
    type: Boolean,
    default: !1
  },
  preserveDrawingBuffer: {
    type: Boolean,
    default: !1
  },
  refreshExpiredTiles: {
    type: Boolean,
    default: !0
  },
  maxBounds: {
    type: Array,
    default() {
    }
  },
  scrollZoom: {
    type: [Boolean, Object],
    default() {
      return !0;
    }
  },
  boxZoom: {
    type: Boolean,
    default: !0
  },
  dragRotate: {
    type: Boolean,
    default: !0
  },
  dragPan: {
    type: Boolean,
    default: !0
  },
  keyboard: {
    type: Boolean,
    default: !0
  },
  doubleClickZoom: {
    type: Boolean,
    default: !0
  },
  touchZoomRotate: {
    type: [Boolean, Object],
    default() {
      return !0;
    }
  },
  trackResize: {
    type: Boolean,
    default: !0
  },
  center: {
    type: [Object, Array],
    default: void 0
  },
  zoom: {
    type: Number,
    default: 0
  },
  bearing: {
    type: Number,
    default: 0
  },
  pitch: {
    type: Number,
    default: 0
  },
  bounds: {
    type: [Object, Array],
    default: void 0
  },
  fitBoundsOptions: {
    type: Object,
    default: void 0
  },
  renderWorldCopies: {
    type: Boolean,
    default: !0
  },
  RTLTextPluginUrl: {
    type: String,
    default: void 0
  },
  light: {
    type: Object,
    default: void 0
  },
  tileBoundaries: {
    type: Boolean,
    default: !1
  },
  collisionBoxes: {
    type: Boolean,
    default: !1
  },
  repaint: {
    type: Boolean,
    default: !1
  },
  transformRequest: {
    type: Function,
    default: null
  },
  maxTileCacheSize: {
    type: Number,
    default: null
  },
  localIdeographFontFamily: {
    type: String,
    default: null
  },
  collectResourceTiming: {
    type: Boolean,
    default: !1
  },
  fadeDuration: {
    type: Number,
    default: 300
  },
  crossSourceCollisions: {
    type: Boolean,
    default: !0
  }
}, b = {
  maxBounds(e) {
    this.map.setMaxBounds(e);
  },
  minZoom(e) {
    this.map.setMinZoom(e);
  },
  maxZoom(e) {
    this.map.setMaxZoom(e);
  },
  mapStyle(e) {
    this.map.setStyle(e);
  },
  // TODO: make 'bounds' synced prop
  // bounds (next) { this.map.fitBounds(next, { linear: true, duration: 0 }) },
  collisionBoxes(e) {
    this.map.showCollisionBoxes = e;
  },
  tileBoundaries(e) {
    this.map.showTileBoundaries = e;
  },
  repaint(e) {
    this.map.repaint = e;
  },
  zoom(e) {
    this.map.setZoom(e);
  },
  center(e) {
    this.map.setCenter(e);
  },
  bearing(e) {
    this.map.setBearing(e);
  },
  pitch(e) {
    this.map.setPitch(e);
  },
  light(e) {
    this.map.setLigh(e);
  }
};
function S(e, t, r, a) {
  this.initial || (this.$attrs[`onUpdate:${e}`] ? (this.propsIsUpdating[e] ? (this._watcher.active = !1, this.$nextTick(() => {
    this._watcher.active = !0;
  })) : (this._watcher.active = !0, t(r, a)), this.propsIsUpdating[e] = !1) : t(r, a));
}
function I() {
  const e = {};
  return Object.entries(b).forEach((t) => {
    e[t[0]] = function(r, a) {
      return S.call(this, t[0], t[1].bind(this), r, a);
    };
  }), e;
}
const L = {
  watch: I()
}, E = {
  methods: {
    $_updateSyncedPropsFabric(e, t) {
      return () => {
        this.propsIsUpdating[e] = !0;
        const r = typeof t == "function" ? t() : t;
        return this.$emit(`update:${e}`, r);
      };
    },
    $_bindPropsUpdateEvents() {
      [
        {
          events: ["moveend"],
          prop: "center",
          getter: this.map.getCenter.bind(this.map)
        },
        {
          events: ["zoomend"],
          prop: "zoom",
          getter: this.map.getZoom.bind(this.map)
        },
        {
          events: ["rotate"],
          prop: "bearing",
          getter: this.map.getBearing.bind(this.map)
        },
        {
          events: ["pitch"],
          prop: "pitch",
          getter: this.map.getPitch.bind(this.map)
        },
        {
          events: ["moveend", "zoomend", "rotate", "pitch"],
          prop: "bounds",
          getter: () => {
            let t = this.map.getBounds();
            return this.$props.bounds instanceof Array && (t = t.toArray()), t;
          }
        }
      ].forEach(({ events: t, prop: r, getter: a }) => {
        t.forEach((s) => {
          this.$attrs[`onUpdate:${r}`] && this.map.on(s, this.$_updateSyncedPropsFabric(r, a));
        });
      });
    },
    $_loadMap() {
      return this.mapboxPromise.then((e) => (this.mapbox = e.default ? e.default : e, new Promise((t) => {
        this.accessToken && (this.mapbox.accessToken = this.accessToken);
        const r = new this.mapbox.Map({
          ...this.$props,
          container: this.$refs.container,
          style: this.mapStyle
        });
        r.on("load", () => t(r));
      })));
    },
    $_RTLTextPluginError(e) {
      this.$emit("rtl-plugin-error", { map: this.map, error: e });
    },
    $_bindMapEvents(e) {
      let t = Object.keys(this.$attrs).filter((r) => r.startsWith("on"));
      t = t.map((r) => r.slice(2).toLowerCase()), t.forEach((r) => {
        e.includes(r) && this.map.on(r, this.$_emitMapEvent);
      });
    },
    $_unbindEvents(e) {
      e.forEach((t) => {
        this.map.off(t, this.$_emitMapEvent);
      });
    }
  }
};
const m = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of t)
    r[a] = s;
  return r;
}, x = {
  name: "GlMap",
  mixins: [L, E, i],
  provide() {
    return {
      map: f(() => this.map),
      mapbox: f(() => this.mapbox)
    };
  },
  props: {
    mapboxGl: {
      type: Object,
      default: null
    },
    ..._
  },
  data() {
    return {
      initial: !0,
      initialized: !1
    };
  },
  computed: {
    loaded() {
      return this.map ? this.map.loaded() : !1;
    },
    version() {
      return this.map ? this.map.version : null;
    },
    isStyleLoaded() {
      return this.map ? this.map.isStyleLoaded() : !1;
    },
    areTilesLoaded() {
      return this.map ? this.map.areTilesLoaded() : !1;
    },
    isMoving() {
      return this.map ? this.map.isMoving() : !1;
    },
    canvas() {
      return this.map ? this.map.getCanvas() : null;
    },
    canvasContainer() {
      return this.map ? this.map.getCanvasContainer() : null;
    },
    images() {
      return this.map ? this.map.listImages() : null;
    }
  },
  created() {
    this.map = null, this.propsIsUpdating = {}, this.mapboxPromise = this.mapboxGl ? Promise.resolve(this.mapboxGl) : import("mapbox-gl");
  },
  mounted() {
    this.$_loadMap().then((e) => {
      this.map = e, this.RTLTextPluginUrl !== void 0 && this.mapbox.getRTLTextPluginStatus() !== "loaded" && this.mapbox.setRTLTextPlugin(
        this.RTLTextPluginUrl,
        this.$_RTLTextPluginError
      );
      const t = Object.keys(v);
      this.$_bindMapEvents(t), this.$_bindPropsUpdateEvents(), this.initial = !1, this.initialized = !0, this.$emit("load", { map: e, component: this });
    });
  },
  beforeDestroy() {
    this.$nextTick(() => {
      this.map && this.map.remove();
    });
  }
}, w = { class: "mgl-map-wrapper" };
function k(e, t, r, a, s, h) {
  return c(), p("div", w, [
    t[0] || (y(-1), t[0] = $("div", {
      id: e.container,
      ref: "container"
    }, null, 8, ["id"]), y(1), t[0]),
    s.initialized ? u(e.$slots, "default", { key: 0 }) : g("", !0)
  ]);
}
const M = /* @__PURE__ */ m(x, [["render", k]]), d = {
  methods: {
    $_emitSelfEvent(e, t = {}) {
      this.$_emitMapEvent(e, { control: this.control, ...t });
    },
    /** Bind events for markers, popups and controls.
     * MapboxGL JS emits this events on popup or marker object,
     * so we treat them as 'self' events of these objects
     */
    $_bindSelfEvents(e, t) {
      let r = Object.keys(this.$attrs).filter((a) => a.startsWith("on"));
      r = r.map((a) => a.slice(2).toLowerCase()), r.forEach((a) => {
        e.includes(a) && t.on(a, this.$_emitSelfEvent);
      });
    },
    $_unbindSelfEvents(e, t) {
      e.length !== 0 && t && e.forEach((r) => {
        t.off(r, this.$_emitSelfEvent);
      });
    }
  }
}, n = {
  mixins: [i, d],
  inject: ["mapbox", "map"],
  props: {
    position: {
      type: String,
      default: "top-right"
    }
  },
  beforeDestroy() {
    this.map && this.control && this.map.removeControl(this.control);
  },
  methods: {
    $_addControl() {
      try {
        this.map.addControl(this.control, this.position);
      } catch (e) {
        this.$_emitEvent("error", { error: e });
        return;
      }
      this.$_emitEvent("added", { control: this.control });
    }
  },
  render() {
  }
}, C = {
  name: "NavigationControl",
  mixins: [n],
  props: {
    showCompass: {
      type: Boolean,
      default: !0
    },
    showZoom: {
      type: Boolean,
      default: !0
    }
  },
  created() {
    this.control = new this.mapbox.NavigationControl(this.$props), this.$_addControl();
  }
}, B = {
  trackuserlocationstart: "trackuserlocationstart",
  trackuserlocationend: "trackuserlocationend",
  geolocate: "geolocate",
  error: "error"
}, P = {
  name: "GeolocateControl",
  mixins: [i, d, n],
  props: {
    positionOptions: {
      type: Object,
      default() {
        return {
          enableHighAccuracy: !1,
          timeout: 6e3
        };
      }
    },
    fitBoundsOptions: {
      type: Object,
      default: () => ({ maxZoom: 15 })
    },
    trackUserLocation: {
      type: Boolean,
      default: !1
    },
    showUserLocation: {
      type: Boolean,
      default: !0
    }
  },
  created() {
    const e = this.mapbox.GeolocateControl;
    this.control = new e(this.$props), this.$_addControl(), this.$_bindSelfEvents(Object.keys(B), this.control);
  },
  methods: {
    trigger() {
      if (this.control)
        return this.control.trigger();
    }
  }
}, O = {
  name: "FullscreenControl",
  mixins: [n],
  props: {
    container: {
      type: HTMLElement,
      default: void 0
    }
  },
  created() {
    this.control = new this.mapbox.FullscreenControl(this.$props), this.$_addControl();
  }
}, j = {
  name: "AttributionControl",
  mixins: [n],
  props: {
    compact: {
      type: Boolean,
      default: !0
    },
    customAttribution: {
      type: [String, Array],
      deafault: void 0
    }
  },
  created() {
    this.control = new this.mapbox.AttributionControl(this.$props), this.$_addControl();
  }
}, T = {
  name: "ScaleControl",
  mixins: [n],
  props: {
    maxWidth: {
      type: Number,
      default: 150
    },
    unit: {
      type: String,
      default: "metric",
      validator(e) {
        return ["imperial", "metric", "nautical"].includes(e);
      }
    }
  },
  watch: {
    unit(e, t) {
      this.control && e !== t && this.control.setUnit(e);
    }
  },
  created() {
    this.control = new this.mapbox.ScaleControl(this.$props), this.$_addControl();
  }
}, z = {
  drag: "drag",
  dragstart: "dragstart",
  dragend: "dragend"
}, F = {
  click: "click",
  mouseenter: "mouseenter",
  mouseleave: "mouseleave"
}, R = {
  name: "MapMarker",
  mixins: [i, d],
  inject: ["mapbox", "map"],
  provide() {
    const e = this;
    return {
      get marker() {
        return e.marker;
      }
    };
  },
  props: {
    // mapbox marker options
    offset: {
      type: [Object, Array],
      default: () => [0, 0]
    },
    coordinates: {
      type: Array,
      required: !0
    },
    color: {
      type: String
    },
    anchor: {
      type: String,
      default: "center"
    },
    draggable: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      initial: !0,
      marker: void 0
    };
  },
  watch: {
    coordinates(e) {
      this.initial || this.marker.setLngLat(e);
    },
    draggable(e) {
      this.initial || this.marker.setDraggable(e);
    }
  },
  mounted() {
    const e = {
      ...this.$props
    };
    this.$slots.marker && (e.element = this.$slots.marker[0].elm), this.marker = new this.mapbox.Marker(e), this.$attrs["onUpdate:coordinates"] && this.marker.on("dragend", (r) => {
      let a;
      this.coordinates instanceof Array ? a = [r.target._lngLat.lng, r.target._lngLat.lat] : a = r.target._lngLat, this.$emit("update:coordinates", a);
    });
    const t = Object.keys(z);
    this.$_bindSelfEvents(t, this.marker), this.initial = !1, this.$_addMarker();
  },
  beforeDestroy() {
    this.map !== void 0 && this.marker !== void 0 && this.marker.remove();
  },
  methods: {
    $_addMarker() {
      this.marker.setLngLat(this.coordinates).addTo(this.map), this.$_bindMarkerDOMEvents(), this.$_emitEvent("added", { marker: this.marker });
    },
    $_emitSelfEvent(e) {
      this.$_emitMapEvent(e, { marker: this.marker });
    },
    $_bindMarkerDOMEvents() {
      let e = Object.keys(this.$attrs).filter((t) => t.startsWith("on"));
      e = e.map((t) => t.slice(2).toLowerCase()), e.forEach((t) => {
        Object.values(F).includes(t) && this.marker._element.addEventListener(t, (r) => {
          this.$_emitSelfEvent(r);
        });
      });
    },
    remove() {
      this.marker.remove(), this.$_emitEvent("removed");
    },
    togglePopup() {
      return this.marker.togglePopup();
    }
  }
}, A = { style: { display: "none" } };
function Z(e, t, r, a, s, h) {
  return c(), p("div", A, [
    u(e.$slots, "marker"),
    s.marker ? u(e.$slots, "default", { key: 0 }) : g("", !0)
  ]);
}
const N = /* @__PURE__ */ m(R, [["render", Z]]), U = {
  open: "open",
  close: "close"
}, D = {
  name: "Popup",
  mixins: [i, d],
  inject: {
    mapbox: {
      default: null
    },
    map: {
      default: null
    },
    marker: {
      default: null
    }
  },
  props: {
    /**
     * If `true`, a close button will appear in the top right corner of the popup.
     * Mapbox GL popup option.
     */
    closeButton: {
      type: Boolean,
      default: !0
    },
    /**
     * Mapbox GL popup option.
     * If `true`, the popup will closed when the map is clicked. .
     */
    closeOnClick: {
      type: Boolean,
      default: !0
    },
    /**
     * Mapbox GL popup option.
     * A string indicating the popup's location relative to the coordinate set.
     * If unset the anchor will be dynamically set to ensure the popup falls within the map container with a preference for 'bottom' .
     *  'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'
     */
    anchor: {
      validator(e) {
        return typeof e == "string" && [
          "top",
          "bottom",
          "left",
          "right",
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right"
        ].includes(e);
      },
      default: void 0
    },
    /**
     * Mapbox GL popup option.
     * A pixel offset applied to the popup's location
     * a single number specifying a distance from the popup's location
     * a PointLike specifying a constant offset
     * an object of Points specifing an offset for each anchor position Negative offsets indicate left and up.
     */
    offset: {
      type: [Number, Object, Array],
      default: () => [0, 0]
    },
    coordinates: {
      type: Array
    },
    /**
     * Component option.
     * If `true`, popup treats data in deafult slot as plain text
     */
    onlyText: {
      type: Boolean,
      default: !1
    },
    showed: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      initial: !0,
      popup: void 0
    };
  },
  computed: {
    open: {
      get() {
        return this.popup !== void 0 ? this.popup.isOpen() : !1;
      },
      set(e) {
        this.map && this.popup && (e ? this.popup.addTo(this.map) : this.popup.remove());
      }
    }
  },
  watch: {
    coordinates(e) {
      this.initial || this.popup.setLngLat(e);
    },
    showed(e, t) {
      e !== t && (this.open = e, this.marker && this.marker.togglePopup());
    }
  },
  mounted() {
    this.popup = new this.mapbox.Popup(this.$props), this.$_addPopup(), this.initial = !1;
  },
  beforeDestroy() {
    this.map && (this.popup.remove(), this.$_emitEvent("removed"));
  },
  methods: {
    $_addPopup() {
      if (this.popup = new this.mapbox.Popup(this.$props), this.coordinates !== void 0 && this.popup.setLngLat(this.coordinates), this.$slots.default() !== void 0) {
        const e = this.$refs.content;
        this.popup.setDOMContent(e);
      }
      this.$_bindSelfEvents(Object.keys(U), this.popup), this.$_emitEvent("added", { popup: this.popup }), this.marker && this.marker.setPopup(this.popup), this.showed && (this.open = !0, this.marker && this.marker.togglePopup());
    },
    $_emitSelfEvent(e) {
      this.$_emitMapEvent(e, { popup: this.popup });
    },
    remove() {
      this.popup.remove(), this.$_emitEvent("remove", { popup: this.popup });
    }
  }
}, G = ["id"];
function q(e, t, r, a, s, h) {
  return c(), p("section", {
    id: `popup-${Date.now()}`,
    ref: "content"
  }, [
    u(e.$slots, "default")
  ], 8, G);
}
const V = /* @__PURE__ */ m(D, [["render", q]]), l = [
  "mousedown",
  "mouseup",
  "click",
  "dblclick",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "contextmenu",
  "touchstart",
  "touchend",
  "touchcancel"
], W = {
  sourceId: {
    type: String,
    required: !0
  },
  source: {
    type: [Object, String],
    default: void 0
  }
}, H = {
  layerId: {
    type: String,
    required: !0
  },
  layer: {
    type: Object,
    required: !0
  },
  before: {
    type: String,
    default: void 0
  }
}, J = {
  clearSource: {
    type: Boolean,
    default: !0
  },
  replaceSource: {
    type: Boolean,
    default: !1
  },
  replace: {
    type: Boolean,
    default: !1
  }
}, o = {
  mixins: [i],
  props: {
    ...W,
    ...H,
    ...J
  },
  inject: ["mapbox", "map"],
  data() {
    return {
      initial: !0
    };
  },
  computed: {
    sourceLoaded() {
      return this.map ? this.map.isSourceLoaded(this.sourceId) : !1;
    },
    mapLayer() {
      return this.map ? this.map.getLayer(this.layerId) : null;
    },
    mapSource() {
      return this.map ? this.map.getSource(this.sourceId) : null;
    }
  },
  created() {
    this.layer.minzoom && this.$watch("layer.minzoom", function(e) {
      this.initial || this.map.setLayerZoomRange(this.layerId, e, this.layer.maxzoom);
    }), this.layer.maxzoom && this.$watch("layer.maxzoom", function(e) {
      this.initial || this.map.setLayerZoomRange(this.layerId, this.layer.minzoom, e);
    }), this.layer.paint && this.$watch(
      "layer.paint",
      function(e) {
        if (!this.initial && e)
          for (const t of Object.keys(e))
            this.map.setPaintProperty(this.layerId, t, e[t]);
      },
      { deep: !0 }
    ), this.layer.layout && this.$watch(
      "layer.layout",
      function(e) {
        if (!this.initial && e)
          for (const t of Object.keys(e))
            this.map.setLayoutProperty(this.layerId, t, e[t]);
      },
      { deep: !0 }
    ), this.layer.filter && this.$watch(
      "layer.filter",
      function(e) {
        this.initial || this.map.setFilter(this.layerId, e);
      },
      { deep: !0 }
    );
  },
  beforeDestroy() {
    if (this.map && this.map.loaded()) {
      try {
        this.map.removeLayer(this.layerId);
      } catch (e) {
        this.$_emitEvent("layer-does-not-exist", {
          layerId: this.sourceId,
          error: e
        });
      }
      if (this.clearSource)
        try {
          this.map.removeSource(this.sourceId);
        } catch (e) {
          this.$_emitEvent("source-does-not-exist", {
            sourceId: this.sourceId,
            error: e
          });
        }
    }
  },
  methods: {
    $_emitLayerMapEvent(e) {
      return this.$_emitMapEvent(e, { layerId: this.layerId });
    },
    $_bindLayerEvents(e) {
      let t = Object.keys(this.$attrs).filter((r) => r.startsWith("on"));
      t = t.map((r) => r.slice(2).toLowerCase()), t.forEach((r) => {
        e.includes(r) && this.map.on(r, this.layerId, this.$_emitLayerMapEvent);
      });
    },
    $_unbindEvents(e) {
      this.map && e.forEach((t) => {
        this.map.off(t, this.layerId, this.$_emitLayerMapEvent);
      });
    },
    $_watchSourceLoading(e) {
      e.dataType === "source" && e.sourceId === this.sourceId && (this.$_emitEvent("layer-source-loading", { sourceId: this.sourceId }), this.map.off("dataloading", this.$_watchSourceLoading));
    },
    move(e) {
      this.map.moveLayer(this.layerId, e), this.$_emitEvent("layer-moved", {
        layerId: this.layerId,
        beforeId: e
      });
    },
    remove() {
      this.map.removeLayer(this.layerId), this.map.removeSource(this.sourceId), this.$_emitEvent("layer-removed", { layerId: this.layerId }), this.$destroy();
    }
  },
  render() {
  }
}, K = {
  name: "GeojsonLayer",
  mixins: [o],
  computed: {
    getSourceFeatures() {
      return (e) => this.map ? this.map.querySourceFeatures(this.sourceId, { filter: e }) : null;
    },
    getRenderedFeatures() {
      return (e, t) => this.map ? this.map.queryRenderedFeatures(e, {
        layers: [this.layerId],
        filter: t
      }) : null;
    },
    getClusterExpansionZoom() {
      return (e) => new Promise((t, r) => {
        if (this.mapSource)
          this.mapSource.getClusterExpansionZoom(e, (a, s) => a ? r(a) : t(s));
        else
          return r(
            new Error(`Map source with id ${this.sourceId} not found.`)
          );
      });
    },
    getClusterChildren() {
      return (e) => new Promise((t, r) => {
        const a = this.mapSource;
        if (a)
          a.getClusterChildren(e, (s, h) => s ? r(s) : t(h));
        else
          return r(
            new Error(`Map source with id ${this.sourceId} not found.`)
          );
      });
    },
    getClusterLeaves() {
      return (...e) => new Promise((t, r) => {
        if (this.mapSource)
          this.mapSource.getClusterLeaves(...e, (a, s) => a ? r(a) : t(s));
        else
          return r(
            new Error(`Map source with id ${this.sourceId} not found.`)
          );
      });
    }
  },
  created() {
    this.source && this.$watch(
      "source.data",
      function(e) {
        this.initial || this.mapSource.setData(e);
      },
      { deep: !0 }
    ), this.$_deferredMount();
  },
  methods: {
    $_deferredMount() {
      if (this.map.on("dataloading", this.$_watchSourceLoading), this.source) {
        const e = {
          type: "geojson",
          ...this.source
        };
        try {
          this.map.addSource(this.sourceId, e);
        } catch {
          this.replaceSource && (this.map.removeSource(this.sourceId), this.map.addSource(this.sourceId, e));
        }
      }
      this.$_addLayer(), this.$_bindLayerEvents(l), this.map.off("dataloading", this.$_watchSourceLoading), this.initial = !1;
    },
    $_addLayer() {
      const e = this.map.getLayer(this.layerId);
      if (e)
        if (this.replace)
          this.map.removeLayer(this.layerId);
        else
          return this.$_emitEvent("layer-exists", { layerId: this.layerId }), e;
      const t = {
        id: this.layerId,
        source: this.sourceId,
        ...this.layer
      };
      this.map.addLayer(t, this.before), this.$_emitEvent("added", { layerId: this.layerId });
    },
    setFeatureState(e, t) {
      if (this.map) {
        const r = { id: e, source: this.source };
        return this.map.setFeatureState(r, t);
      }
    },
    getFeatureState(e) {
      if (this.map) {
        const t = { id: e, source: this.source };
        return this.map.getFeatureState(t);
      }
    },
    removeFeatureState(e, t, r) {
      if (this.map) {
        const a = {
          id: e,
          source: this.source,
          sourceLayer: t
        };
        return this.map.removeFeatureState(a, r);
      }
    }
  }
}, Q = {
  name: "ImageLayer",
  mixins: [o],
  created() {
    this.source && (this.source.coordinates && this.$watch(
      "source.coordinates",
      function(e) {
        this.initial || e && this.mapSource.setCoordinates(e);
      },
      { deep: !0 }
    ), this.source.url && this.$watch(
      "source.url",
      function(e) {
        this.initial || e && this.mapSource.updateImage({
          url: e,
          coordinates: this.source.coordinates
        });
      },
      { deep: !0 }
    )), this.$_deferredMount();
  },
  methods: {
    $_deferredMount() {
      const e = {
        type: "image",
        ...this.source
      };
      this.map.on("dataloading", this.$_watchSourceLoading);
      try {
        this.map.addSource(this.sourceId, e);
      } catch {
        this.replaceSource && (this.map.removeSource(this.sourceId), this.map.addSource(this.sourceId, e));
      }
      this.$_addLayer(), this.$_bindLayerEvents(l), this.initial = !1;
    },
    $_addLayer() {
      const e = this.map.getLayer(this.layerId);
      if (e)
        if (this.replace)
          this.map.removeLayer(this.layerId);
        else
          return this.$_emitEvent("layer-exists", { layerId: this.layerId }), e;
      const t = {
        id: this.layerId,
        source: this.sourceId,
        type: "raster",
        ...this.layer
      };
      this.map.addLayer(t, this.before), this.$_emitEvent("added", { layerId: this.layerId });
    }
  }
}, X = {
  name: "CanvasLayer",
  mixins: [o],
  inject: ["mapbox", "map"],
  props: {
    source: {
      type: Object,
      required: !0
    },
    layer: {
      type: Object,
      default: null
    }
  },
  computed: {
    canvasElement() {
      return this.mapSource ? this.mapSource.getCanvas() : null;
    }
  },
  watch: {
    coordinates(e) {
      this.initial || this.mapSource.setCoordinates(e);
    }
  },
  created() {
    this.$_deferredMount();
  },
  methods: {
    $_deferredMount() {
      const e = {
        type: "canvas",
        ...this.source
      };
      this.map.on("dataloading", this.$_watchSourceLoading);
      try {
        this.map.addSource(this.sourceId, e);
      } catch {
        this.replaceSource && (this.map.removeSource(this.sourceId), this.map.addSource(this.sourceId, e));
      }
      this.$_addLayer(), this.$_bindLayerEvents(l), this.initial = !1;
    },
    $_addLayer() {
      let e = this.map.getLayer(this.layerId);
      if (e)
        if (this.replace)
          this.map.removeLayer(this.layerId);
        else
          return this.$_emitEvent("layer-exists", { layerId: this.layerId }), e;
      let t = {
        id: this.layerId,
        source: this.sourceId,
        type: "raster",
        ...this.layer
      };
      this.map.addLayer(t, this.before), this.$_emitEvent("added", {
        layerId: this.layerId,
        canvas: this.canvasElement
      });
    }
  }
}, Y = {
  name: "VideoLayer",
  mixins: [o],
  computed: {
    video() {
      return this.map.getSource(this.sourceId).getVideo();
    }
  },
  created() {
    this.source && this.source.coordinates && this.$watch("source.coordinates", function(e) {
      this.initial || this.mapSource.setCoordinates(e);
    }), this.$_deferredMount();
  },
  methods: {
    $_deferredMount() {
      const e = {
        type: "video",
        ...this.source
      };
      this.map.on("dataloading", this.$_watchSourceLoading);
      try {
        this.map.addSource(this.sourceId, e);
      } catch {
        this.replaceSource && (this.map.removeSource(this.sourceId), this.map.addSource(this.sourceId, e));
      }
      this.$_addLayer(), this.$_bindLayerEvents(l), this.initial = !1;
    },
    $_addLayer() {
      let e = this.map.getLayer(this.layerId);
      if (e)
        if (this.replace)
          this.map.removeLayer(this.layerId);
        else
          return this.$_emitEvent("layer-exists", { layerId: this.layerId }), e;
      let t = {
        id: this.layerId,
        source: this.sourceId,
        type: "background",
        ...this.layer
      };
      this.map.addLayer(t, this.before), this.$_emitEvent("added", { layerId: this.layerId });
    }
  }
}, ee = {
  name: "VectorLayer",
  mixins: [o],
  computed: {
    getSourceFeatures() {
      return (e) => this.map ? this.map.querySourceFeatures(this.sourceId, {
        sourceLayer: this.layer["source-layer"],
        filter: e
      }) : null;
    },
    getRenderedFeatures() {
      return (e, t) => this.map ? this.map.queryRenderedFeatures(e, {
        layers: [this.layerId],
        filter: t
      }) : null;
    }
  },
  watch: {
    filter(e) {
      this.initial || this.map.setFilter(this.layerId, e);
    }
  },
  created() {
    this.$_deferredMount();
  },
  methods: {
    $_deferredMount() {
      let e = {
        type: "vector",
        ...this.source
      };
      this.map.on("dataloading", this.$_watchSourceLoading);
      try {
        this.map.addSource(this.sourceId, e);
      } catch {
        this.replaceSource && (this.map.removeSource(this.sourceId), this.map.addSource(this.sourceId, e));
      }
      this.$_addLayer(), this.$_bindLayerEvents(l), this.map.off("dataloading", this.$_watchSourceLoading), this.initial = !1;
    },
    $_addLayer() {
      let e = this.map.getLayer(this.layerId);
      if (e)
        if (this.replace)
          this.map.removeLayer(this.layerId);
        else
          return this.$_emitEvent("layer-exists", { layerId: this.layerId }), e;
      let t = {
        id: this.layerId,
        source: this.sourceId,
        ...this.layer
      };
      this.map.addLayer(t, this.before), this.$_emitEvent("added", { layerId: this.layerId });
    },
    setFeatureState(e, t) {
      if (this.map) {
        const r = {
          id: e,
          source: this.sourceId,
          "source-layer": this.layer["source-layer"]
        };
        return this.map.setFeatureState(r, t);
      }
    },
    getFeatureState(e) {
      if (this.map) {
        const t = {
          id: e,
          source: this.source,
          "source-layer": this.layer["source-layer"]
        };
        return this.map.getFeatureState(t);
      }
    }
  }
}, te = {
  name: "RasterLayer",
  mixins: [o],
  created() {
    this.$_deferredMount();
  },
  methods: {
    $_deferredMount() {
      let e = {
        type: "raster",
        ...this.source
      };
      this.map.on("dataloading", this.$_watchSourceLoading);
      try {
        this.map.addSource(this.sourceId, e);
      } catch {
        this.replaceSource && (this.map.removeSource(this.sourceId), this.map.addSource(this.sourceId, e));
      }
      this.$_addLayer(), this.$_bindLayerEvents(l), this.map.off("dataloading", this.$_watchSourceLoading), this.initial = !1;
    },
    $_addLayer() {
      let e = this.map.getLayer(this.layerId);
      if (e)
        if (this.replace)
          this.map.removeLayer(this.layerId);
        else
          return this.$_emitEvent("layer-exists", { layerId: this.layerId }), e;
      let t = {
        id: this.layerId,
        type: "raster",
        source: this.sourceId,
        ...this.layer
      };
      this.map.addLayer(t, this.before), this.$_emitEvent("added", { layerId: this.layerId });
    }
  }
}, ae = i, se = d, ie = n, oe = o, ne = {
  withEvents: i,
  withSelfEvents: d,
  asControl: n,
  asLayer: o
}, de = M, le = C, he = P, ue = O, ce = j, pe = T, me = K, fe = Q, ye = X, ge = Y, $e = ee, ve = te, _e = N, be = V;
export {
  ne as $helpers,
  ce as MglAttributionControl,
  ye as MglCanvasLayer,
  ue as MglFullscreenControl,
  me as MglGeojsonLayer,
  he as MglGeolocateControl,
  fe as MglImageLayer,
  de as MglMap,
  _e as MglMarker,
  le as MglNavigationControl,
  be as MglPopup,
  ve as MglRasterLayer,
  pe as MglScaleControl,
  $e as MglVectorLayer,
  ge as MglVideoLayer,
  ie as asControl,
  oe as asLayer,
  M as default,
  ae as withEvents,
  se as withSelfEvents
};
