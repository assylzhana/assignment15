<template>
  <div class="custom-page-container">
    <div class="custom-page-sidebar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
    <div class="custom-page-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.custom-page-container {
  display: flex;
}

.custom-page-sidebar {
  width: 250px;
  background-color: #000000;
  color: #ffffff;
  padding: 30px;
  transition: width 0.3s ease-in-out;
}


.custom-page-sidebar ul {
  list-style: none;
  padding: 0;
}

.custom-page-sidebar li {
  margin-bottom: 15px;
  transition: background-color 0.3s ease-in-out;
}

.custom-page-sidebar li:hover {
  background-color: #eee;
}

.custom-page-sidebar a {
  text-decoration: none;
  color: #000;
  font-size: 18px;
  transition: color 0.3s ease-in-out;
}

.custom-page-sidebar a:hover {
  color: #333;
}

.custom-page-content {
  flex: 1;
  padding: 30px;
  font-size: 18px;
}
</style>
