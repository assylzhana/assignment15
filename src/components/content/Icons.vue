<template><i :class="['fas', `fa-${name}`, additionalClasses]"></i></template>
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
      additionalClasses: {
        type: String,
        default: '',
      },
    },
  };
  </script>
  

  