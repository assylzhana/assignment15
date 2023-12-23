<template>
  <div class="custom-table-container">
    <table class="custom-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'email', email: 'email@gmail.com' },
        { id: 2, name: 'email', email: 'email@gmail.com' },
        { id: 3, name: 'email', email: 'email@gmail.com' },
      ],
    };
  },
};
</script>

<style scoped>
.custom-table-container {
  max-width: 600px;
  margin: 20px auto;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.custom-table th,
.custom-table td {
  border: 1px solid #333;
  padding: 10px;
  text-align: left;
}

.custom-table th {
  background-color: #000;
  color: #fff;
}

.custom-table tbody tr:nth-child(even) {
  background-color: #f8f8f8;
}

.custom-table tbody tr:hover {
  background-color: #ddd;
}
</style>
