<template>
  <div class="navigation-container">
    <div class="search-bar">
      <input
        type="text"
        placeholder="Search...">

      <button aria-label="Submit Search">Search</button>
    </div>
  </div>
</template>



<style scoped>
.navigation-container {
  max-width: 800px;
  margin: 20px auto;
}

.search-bar {
  display: flex;
  margin-bottom: 20px;
}

.search-bar input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  transition: border-color 0.3s ease-out, box-shadow 0.3s ease-out;
}

.search-bar input:focus {
  border-color: #333;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.search-bar button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
}

.search-bar button:hover {
  background-color: #555;
}
</style>
