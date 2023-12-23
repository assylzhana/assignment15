<template>
    <div class="image-container">
      <img src="../../assets/image2.jpg"  :src="source" :alt="altText" class="image" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      source: {
        type: String,
        required: true,
      },
      altText: {
        type: String,
        default: 'Image',
      },
    },
  };
  </script>
  
  <style scoped>
  .image-container {
    max-width: 30%;
    overflow: hidden;
  }
  
  .image {
    margin-top: 20px;
    width: 100%;
    height: auto;
    display: block;
  }
  </style>
  