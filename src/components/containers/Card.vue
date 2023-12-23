<template>
  <div class="custom-card-container">
    <div class="custom-card">
      <div class="custom-card-header">
        <h2 class="custom-card-title">{{ title }}</h2>
      </div>
      <div class="custom-card-body">
        <img :src="imageSrc" alt="Card Image" class="custom-card-image" />
        <p class="custom-card-content">{{ content }}</p>
      </div>
      <div class="custom-card-footer">
        <button v-if="showButton" @click="handleButtonClick" class="custom-card-btn">Click</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    showButton: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handleButtonClick() {
      console.log('Button clicked!');
    },
  },
};
</script>

<style scoped>
.custom-card-container {
  max-width: 400px;
  margin: 20px auto;
}

.custom-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  transition: box-shadow 0.3s ease-out;
}

.custom-card:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.custom-card-header {
  background-color: #000000;
  padding: 15px;
  color: white;
}

.custom-card-title {
  margin: 0;
  font-size: 20px;
}

.custom-card-body {
  padding: 20px;
}

.custom-card-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 15px;
}

.custom-card-content {
  margin: 0;
  font-size: 16px;
}

.custom-card-footer {
  padding: 15px;
  text-align: right;
}

.custom-card-btn {
  background-color: #000000;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
}

</style>
