<template>
  <div class="custom-group-button-container">
    <div class="custom-input-container">
      <div class="custom-group-buttons">
        <button
          v-for="button in customButtons"
          :key="button.id"
          @click="handleCustomButtonClick(button.id)"
          :class="{ 'active': selectedCustomButton === button.id }"
          class="group-button"
        >
          {{ button.label }}
        </button>
      </div>
      <div class="custom-error" :class="{ 'error-visible': errorVisible }">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customButtons: [
        { id: 1, label: 'Button 1' },
        { id: 2, label: 'Button 2' },
        { id: 3, label: 'Button 3' },
      ],
      selectedCustomButton: null,
      errorMessage: 'Please select a button.',
      errorVisible: false,
    };
  },
  methods: {
    handleCustomButtonClick(buttonId) {
      this.selectedCustomButton = buttonId;
      this.errorVisible = false;
    },
    validateCustomGroupButton() {
      return this.selectedCustomButton !== null;
    },
  },
};
</script>

<style scoped>
.custom-group-button-container {
  max-width: 300px;
  margin: 20px auto;
}

.custom-input-container {
  position: relative;
}

.group-button {
  padding: 10px;
  font-size: 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
}

.group-button:hover {
  background-color: #333;
}

.custom-group-buttons {
  display: flex;
}

.group-button + .group-button {
  margin-left: 5px;
}

.active {
  background-color: #333;
}

.active:hover {
  background-color: #555;
}

.custom-error {
  color: rgb(255, 47, 47);
  font-weight: bold;
  font-size: 13px;
  margin-top: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.error-visible {
  opacity: 1;
}
</style>
