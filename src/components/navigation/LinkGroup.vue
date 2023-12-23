<template>
  <div class="link-groups">
    <div class="link-group" v-for="(group, index) in linkGroups" :key="index">
      <h3 class="group-title">{{ group.title }}</h3>
      <router-link
        v-for="(link, linkIndex) in group.links"
        :key="linkIndex"
        :to="link.to"
        class="nav-link"
        :exact="link.exact"
      >
        {{ link.text }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkGroups: [
        {
          title: 'Group 1',
          links: [
            { text: 'Link 1', to: '/group1/link1', exact: true },
            { text: 'Link 2', to: '/group1/link2', exact: true },
            { text: 'Link 3', to: '/group1/link3', exact: true },
          ],
        },
        {
          title: 'Group 2',
          links: [
            { text: 'Link 1', to: '/group2/link1', exact: true },
            { text: 'Link 2', to: '/group2/link2', exact: true },
            { text: 'Link 3', to: '/group2/link3', exact: true },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.link-groups {
  display: flex;
  justify-content: space-between;
}

.link-group {
  width: 48%;
}

.group-title {
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
}

.nav-link {
  display: block;
  text-decoration: none;
  color: #333;
  padding: 8px;
  transition: background-color 0.3s ease-out, color 0.3s ease-out;
}

.nav-link:hover {
  background-color: #eee;
  color: #555;
}

.nav-link.active {
  background-color: #ddd;
  color: #555;
}
</style>
