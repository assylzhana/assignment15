<template>
    <div class="navigation-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </div>
  </template>

  <style scoped>
  .navigation-links {
    display: flex;
    background-color: #333;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  
  .nav-link {
    margin-right: 10px;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    padding: 8px 12px;
    border-radius: 5px;
    transition: background-color 0.3s ease-out, color 0.3s ease-out;
  }
  
  .nav-link:hover {
    background-color: #555;
    color: #ffd700;
  }
  
  .nav-link.active {
    background-color: #555;
    color: #ffd700;
  }
  </style>
  