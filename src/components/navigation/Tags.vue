<template>
    <div class="tags-container">
      <div v-for="(tag, index) in tags" :key="index" class="tag">
        {{ tag }}
        <button @click="removeTag(index)" class="remove-btn">×</button>
      </div>
      <input v-model.trim="newTag" @keydown.enter="addTag" placeholder="Add a tag" class="tag-input" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tags: ['JavaScript', 'Vue.js', 'CSS'], 
        newTag: '',
      };
    },
    methods: {
      addTag() {
        if (this.newTag && !this.tags.includes(this.newTag)) {
          this.tags.push(this.newTag);
          this.newTag = '';
        }
      },
      removeTag(index) {
        this.tags.splice(index, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .tag {
    background-color: #000000;
    color: #fff;
    padding: 8px;
    border-radius: 4px;
    display: flex;
    align-items: center;
  }
  
  .remove-btn {
    background-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-left: 4px;
    font-weight: bold;
    font-size: 14px;
  }
  

  .tag-input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 8px;
  }
  </style>
  