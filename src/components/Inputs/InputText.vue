<template>
  <div class="custom-input-container">
    <div class="input-container">
      <label :for="inputId" class="input-label">Text:</label>
      <div class="input-wrapper">
        <input :type="type" :id="inputId" v-model="inputValue" @input="handleInput" :class="{ 'error-input': errorInput }"/>
      </div>
      <div class="error" :class="{ 'error-visible': errorVisible }">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    inputId: {
      type: String,
      default: 'inputText'
    }
  },
  data() {
    return {
      inputValue: '',
      errorMessage: 'Required.',
      errorVisible: false,
      errorInput: false
    };
  },
  methods: {
    validateInput() {
      return !!this.inputValue.trim();
    },
    handleInput() {
      this.errorVisible = this.errorInput = this.inputValue === '';
    }
  }
};
</script>
