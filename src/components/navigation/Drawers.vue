<template>
  <div style="margin-top: 20px;">
    <button @click="toggleDrawer" class="toggle-drawer-btn">
      {{ isDrawerOpen ? 'Close Drawer' : 'Open Drawer' }}
    </button>

    <div v-if="isDrawerOpen" class="drawer">
      <div class="drawer-content">
        <p>This is a drawer.</p>
        <button @click="toggleDrawer" class="toggle-drawer-btn">
          Close Drawer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDrawerOpen: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
  },
};
</script>

<style scoped>
.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.drawer.active {
  opacity: 1;
}

.drawer-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  max-width: 80%;
  overflow: auto;
}

.toggle-drawer-btn {
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
}

.toggle-drawer-btn:hover {
  background-color: #000000;
}

.close-drawer-btn {
  background-color: #e74c3c;
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease-out;
}

.close-drawer-btn:hover {
  background-color: #c0392b;
}
</style>
