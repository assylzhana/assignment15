<template>
  <div>
    <div v-if="loading" class="loading">Loading...</div>

    <ul class="item-list">
      <li v-for="item in paginatedItems" :key="item.id">{{ item.name }}</li>
    </ul>

    <div v-if="items.length === 0 && !loading" class="no-items">No items found.</div>

    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1" class="pagination-btn">Previous</button>
      <span class="pagination-info">{{ startItem }} - {{ endItem }} of {{ totalItems }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-btn">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      itemsPerPage: 5,
      currentPage: 1,
      loading: false,
    };
  },
  computed: {
    totalItems() {
      return this.items.length;
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.items.slice(start, end);
    },
    startItem() {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    endItem() {
      const end = this.currentPage * this.itemsPerPage;
      return end > this.totalItems ? this.totalItems : end;
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>

<style scoped>

.loading {
  margin-top: 20px;
  text-align: center;
}

.no-items {
  margin-top: 20px;
  text-align: center;
  color: #555;
}

.pagination-info {
  margin: 0 10px;
  font-size: 16px;
}

</style>
