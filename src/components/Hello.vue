<script setup lang="js">
import { ref } from 'vue';

const message = ref('Hello Tailwind CSS 4.1!');


function changeMessage() {
  message.value = 'Hello Vue 3!';
}

</script>


<template>
  <div class="text-center p-4 bg-blue-500 text-white">
    {{ message }}
    <button @click="changeMessage" class="mt-4 px-4 py-2 bg-blue-700 text-white rounded">
      Change Message
    </button>
  </div>
</template>

<style scoped>

</style>