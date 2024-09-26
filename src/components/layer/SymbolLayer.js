import mixin from "./layerMixin";
import layerEvents from "../../lib/layerEvents";

export default {
  name: "SymbolLayer",
  mixins: [mixin],

  created() {
    this.$_deferredMount();
  },

  methods: {
    $_deferredMount() {
      const source = {
        type: "symbol",
        ...this.source
      };

      this.map.on("dataloading", this.$_watchSourceLoading);
      try {
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        }
      }
      this.$_addLayer();
      this.$_bindLayerEvents(layerEvents);
      this.initial = false;
    },

    $_addLayer() {
      const existed = this.map.getLayer(this.layerId);
      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$_emitEvent("layer-exists", { layerId: this.layerId });
          return existed;
        }
      }
      const layer = {
        id: this.layerId,
        source: this.sourceId,
        type: "symbol",
        ...this.layer
      };

      this.map.addLayer(layer, this.before);
      this.$_emitEvent("added", { layerId: this.layerId });
    }
  }
};
