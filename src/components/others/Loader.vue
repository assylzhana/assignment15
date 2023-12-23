<template>
  <div class="custom-spin-loader">
    <div class="custom-spinner"></div>
  </div>
</template>

<style scoped>
.custom-spin-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.custom-spinner {
  border: 6px solid rgba(255, 255, 255, 0.1);
  border-top: 6px solid #000000;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
