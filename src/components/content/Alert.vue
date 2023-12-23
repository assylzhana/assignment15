<template>
  <div v-if="isVisible" class="notification">
    <div class="notification-content">
      <p>{{ message }}</p>
      <button @click="closeNotification">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      message: '',
    };
  },
  methods: {
    showNotification(message) {
      this.message = message;
      this.isVisible = true;
    },
    closeNotification() {
      this.isVisible = false;
    },
  },
};
</script>

<style scoped>
.notification {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  color: white;
  padding: 15px;
  text-align: center;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.notification-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notification button {
  background-color: white;
  color: black;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
}

.notification button:hover {
  background-color: #eee;
}
</style>
