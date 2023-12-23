<template>
  <div class="custom-modal-container">
    <button @click="toggleCustomModal" class="trigger-modal-button">Show Custom Modal</button>

    <div v-if="isCustomModalVisible" class="custom-modal-overlay">
      <div class="custom-modal-box">
        <span class="close-button" @click="closeCustomModal">&times;</span>
        <div class="modal-content">
          <h2> Modal </h2>
          <p> modal content.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCustomModalVisible: false,
    };
  },
  methods: {
    toggleCustomModal() {
      this.isCustomModalVisible = !this.isCustomModalVisible;
    },
    closeCustomModal() {
      this.isCustomModalVisible = false;
    },
  },
};
</script>

<style scoped>
.custom-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.custom-modal-box {
  background: #fff;
  color: #000;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  position: relative;
  max-width: 400px;
  width: 100%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: #000;
  cursor: pointer;
}

.modal-content {
  text-align: center;
}

.trigger-modal-button {
  background-color: #000;
  color: #fff;
  padding: 12px 18px;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
}

.trigger-modal-button:hover {
  background-color: #333;
}

.custom-modal-container {
  max-width: 400px;
  margin: 20px auto;
}
</style>
