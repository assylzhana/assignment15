<template>
  <div class="custom-tooltip-container">
    <div @mouseover="showTooltip" @mouseleave="hideTooltip" class="custom-tooltip-target">
      Tooltip
    </div>
    <div v-if="isTooltipVisible" class="custom-tooltip">
      {{ tooltipText }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTooltipVisible: false,
      tooltipText: 'This is a custom tooltip',
    };
  },
  methods: {
    showTooltip() {
      this.isTooltipVisible = true;
    },
    hideTooltip() {
      this.isTooltipVisible = false;
    },
  },
};
</script>

<style scoped>
.custom-tooltip-container {
  max-width: 400px;
  margin: 20px auto;
  position: relative;
}

.custom-tooltip-target {
  background-color: #333;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.custom-tooltip {
  position: absolute;
  background-color: #fff;
  color: #333;
  padding: 5px;
  border-radius: 3px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  white-space: nowrap;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
