<template>
  <div class="user-profile">
    <img :src="profileImage" :alt="altText" class="profile-image" />
    <h3 class="user-name">{{ userName }}</h3>
    <p class="user-description">{{ userDescription }}</p>
  </div>
</template>

<script>
export default {
  props: {
    profileImage: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: 'User Profile Image',
    },
    userName: {
      type: String,
      required: true,
    },
    userDescription: {
      type: String,
      default: 'No description available.',
    },
  },
};
</script>

<style scoped>
.user-profile {
  text-align: center;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.user-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #000; 
}

.user-description {
  color: #666;
  font-size: 12px;
}
</style>
