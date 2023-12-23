<template>
  <div class="styled-toggle-container">
    <div class="styled-input-container">
      <label class="styled-toggle-label">
        <input
          type="checkbox"
          v-model="isToggled"
          @change="handleToggleChange"
          :class="{ 'styled-error-input': styledErrorInput }"
          class="custom-styled-toggle"
        />
        <span class="styled-toggle-slider"></span>
      </label>
      <div class="styled-error" :class="{ 'styled-error-visible': styledErrorVisible }">
        {{ styledErrorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToggled: false,
      styledErrorMessage: 'Toggle must be switched on.',
      styledErrorVisible: false,
      styledErrorInput: false,
    };
  },
  methods: {
    validateStyledToggle() {
      return this.isToggled;
    },
    handleToggleChange() {
      this.styledErrorVisible = this.styledErrorInput = !this.validateStyledToggle();
    },
  },
};
</script>

<style scoped>
.styled-toggle-container {
  max-width: 300px;
  margin: 20px auto;
}

.styled-input-container {
  position: relative;
}

.styled-toggle-label {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.custom-styled-toggle {
  opacity: 0;
  width: 0;
  height: 0;
}

.styled-toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  transition: 0.4s;
}

.custom-styled-toggle:checked + .styled-toggle-slider {
  background-color: #2196f3;
}

.styled-toggle-slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

.custom-styled-toggle:checked + .styled-toggle-slider:before {
  transform: translateX(26px);
}

.styled-error {
  color: #e53935;
  font-weight: bold;
  font-size: 13px;
  position: absolute;
  top: 100%;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.styled-error-visible {
  opacity: 1;
}

.styled-error-input {
  color: #e53935;
}
</style>
