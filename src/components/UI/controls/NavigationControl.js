import controlMixin from "./controlMixin";

export default {
  name: "NavigationControl",
  mixins: [controlMixin],

  props: {
    showCompass: {
      type: Boolean,
      default: true
    },
    showZoom: {
      type: Boolean,
      default: true
    },
    visualizePitch: {
      type: Boolean,
      default: false
    }
  },

  created() {
    this.control = new this.mapbox.NavigationControl(this.$props);
    this.$_addControl();
  }
};
