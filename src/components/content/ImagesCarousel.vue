<template>
    <div class="carousel">
      <div class="carousel-container">
        <div v-for="(image, index) in images" :key="index" :class="{ 'carousel-slide': true, 'active-slide': index === currentIndex }">
          <img :src="image" alt="Slide" class="carousel-image" />
        </div>
      </div>
      <button @click="prevSlide" class="carousel-control prev-button">Previous</button>
      <button @click="nextSlide" class="carousel-control next-button">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          
        ],
        currentIndex: 0,
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
    },
  };
  </script>
  
  

  <style scoped>
  .carousel {
    position: relative;
    width: 80%;
    margin: auto;
  }
  
  .carousel-container {
    display: flex;
    overflow: hidden;
  }
  
  .carousel-slide {
    flex: 0 0 100%;
    transition: transform 0.5s ease-in-out;
  }
  
  .active-slide {
    transform: translateX(-100%);
  }
  
  .prev-button{
    left: 10px;
  }
  
  .next-button{
    right: 10px;
  }
  </style>
  