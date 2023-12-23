<template>
  <div v-if="isVisible" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #fff; border: 1px solid #ccc; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); padding: 20px; text-align: center; z-index: 999;" class="message-box">
    <div style="margin-bottom: 10px;" class="message-box-content">
      <p>{{ message }}</p>
      <button @click="closeMessageBox" style="background-color: #cee05a; color: white; padding: 10px 15px; font-size: 16px; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.3s ease-out;">Close</button>
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
    showMessage(message) {
      this.message = message;
      this.isVisible = true;
    },
    closeMessageBox() {
      this.isVisible = false;
    },
  },
};
</script>
