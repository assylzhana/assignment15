<template>
  <div class="navigation-container">
    <div class="navbar">
      <button @click="toggleDrawer" class="menu-button">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div v-if="isDrawerOpen" class="drawer">
        <a href="#" @click="toggleDrawer">Home</a>
        <a href="#" @click="toggleDrawer">About</a>
        <a href="#" @click="toggleDrawer">Services</a>
        <a href="#" @click="toggleDrawer">Contact</a>
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
.navbar {
  background-color: #333;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
}

.menu-button span {
  background-color: white;
  height: 3px;
  width: 30px;
  display: block;
}

.drawer {
  display: flex;
  flex-direction: column;
  background-color: #333;
  position: absolute;
  top: 50px;
  right: 10px;
  border-radius: 5px;
  padding: 10px;
  z-index: 1;
}

.drawer a {
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer;
}

</style>
