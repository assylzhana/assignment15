<template>
  <div style="max-width: 400px; margin: 20px auto;" class="list-container">
    <ul style="list-style: none; padding: 0;" class="custom-list">
      <li
        v-for="item in items"
        :key="item.id"
        style="
          background-color: #f8f8f8;
          border: 1px solid #ddd;
          padding: 15px;
          margin-bottom: 8px;
          border-radius: 5px;
          transition: background-color 0.3s ease-out;
        "
        @mouseover="handleMouseOver(item)"
        @mouseout="handleMouseOut(item)"
        class="list-item"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
    };
  },
  methods: {
    handleMouseOver(item) {
      item.isHovered = true;
    },
    handleMouseOut(item) {
      item.isHovered = false;
    },
  },
};
</script>
