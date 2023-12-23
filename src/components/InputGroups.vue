<template>
  <div class="input-wrap">
    <div class="input-group">
      <div class="input-addon">
        <span class="addon-symbol">@</span>
      </div>
      <input
        type="text"
        v-model="username"
        @input="handleUsernameInput"
        :class="{ 'error-input': errors.username }"
        class="custom-input"
        placeholder="Username"
      />
      <button @click="handleButtonClick" class="action-btn">Go</button>
      <div class="error-msg" v-if="errors.username">{{ errors.username }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      errors: {},
    };
  },
  methods: {
    handleUsernameInput() {
      this.errors.username = ''; 
    },
    handleButtonClick() {
      if (!this.username.trim()) {
        this.errors.username = 'Username is required';
      } else {
        console.log('Button clicked with username:', this.username);
      }
    },
  },
};
</script>

<style scoped>
.input-wrap {
  max-width: 300px;
  margin: 20px auto;
}

.input-group {
  display: flex;
}

.input-addon {
  background-color: white;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  display: flex;
  align-items: center;
}

.addon-symbol {
  font-size: 16px;
  color: black;
}

.custom-input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 0 5px 5px 0;
  transition: border-color 0.3s ease-out;
  color: black;
}

.action-btn {
  background-color: black;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
}

.action-btn:hover {
  background-color: #333;
}

.error-msg {
  color: rgb(255, 47, 47);
  font-weight: bold;
  font-size: 13px;
  margin-top: 5px;
}

.error-input {
  border-color: rgb(255, 47, 47);
}
</style>
