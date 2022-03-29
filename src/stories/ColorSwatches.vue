<template>
  <div
    class="color-container"
    v-for="(colorSpace, colorGroup) in colors"
    :key="Object.keys(colorSpace)[0]"
  >
    <h2 class="color-title">{{ colorGroup }}</h2>
    <slot :name="colorGroup.toLowerCase()"></slot>
    <ul class="color-list">
      <li
        class="color-list__item"
        v-for="(color, swatch) in colorSpace"
        :key="color.value"
        :style="{ '--color': color.value }"
      >
        <div class="color-info">
          <h3 class="color-subtitle">{{ this.toNormalCase(swatch) }}</h3>
          <p class="color-text">{{ this.toSassCase(swatch) }}</p>
          <p class="color-text">{{ color.value }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>

<script>
import './colors.scss';

export default {
  name: 'color-swatches',
  data() {
    return {
      colors: {}
    }
  },

  computed: {
    flatColors() {
      return this.colors
    }
  },
  
  methods: {
    toNormalCase(color) {
      return color
        .replace(/([A-Z])(?<=[a-z]\1|[A-Za-z]\1(?=[a-z]))/g, " $1")
    },
    toSassCase(color) {
      return `$color-${this.toNormalCase(color)
          .toLowerCase()
          .split(' ')
          .join('-')}`
    }
  },
  beforeCreate() {
    fetch('https://figma-style-dictionary.herokuapp.com/')
      .then(data => data.json())
      .then(colors => this.colors = colors.color)
  }
};
</script>
