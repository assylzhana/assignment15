<template>
  <span :style="labelStyle">
    {{ labelText }}
  </span>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    labelStyle() {
      return {
        display: 'inline-block',
        padding: '5px 10px',
        borderRadius: '3px',
        fontSize: '14px',
        backgroundColor: this.getBackgroundColor(),
        color: this.getTextColor(),
      };
    },
  },
  methods: {
    getBackgroundColor() {
      switch (this.color) {
        case 'default':
          return '#ccc';
        case 'primary':
          return '#2196f3';
        case 'success':
          return '#4caf50';
        case 'warning':
          return '#ff9800';
        case 'danger':
          return '#f44336';
        default:
          return '#ccc';
      }
    },
    getTextColor() {
      return this.color === 'default' ? '#333' : 'white';
    },
  },
};
</script>
