<template>
  <div class="custom-accordion-container">
    <div v-for="(item, index) in customAccordionItems" :key="index" class="custom-accordion-item">
      <div @click="toggleCustomAccordion(index)" class="custom-accordion-title">
        {{ item.title }}
        <span :class="{ 'rotate-arrow': activeCustomIndex === index }">&#9658;</span>
      </div>
      <div v-show="activeCustomIndex === index" class="custom-accordion-content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCustomIndex: null,
      customAccordionItems: [
        { title: 'Accordion ', content: 'Content' },
        { title: 'Accordion ', content: 'Content' },
        { title: 'Accordion ', content: 'Content' },
      ],
    };
  },
  methods: {
    toggleCustomAccordion(index) {
      this.activeCustomIndex = this.activeCustomIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>
.custom-accordion-container {
  max-width: 600px;
  margin: 20px auto;
}

.custom-accordion-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 10px;
}

.custom-accordion-title {
  background-color: #f1f1f1;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rotate-arrow {
  transform: rotate(90deg);
  transition: transform 0.3s ease-out;
}

.custom-accordion-content {
  padding: 10px;
}
</style>
