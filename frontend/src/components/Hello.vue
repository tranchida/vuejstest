<script setup lang="js">
import { ref } from 'vue';
import axios from 'axios';

const message = ref('Hello Tailwind CSS 4.1!');
const count = ref(0);

function changeMessage() {
  axios.get('/api/message')
    .then(response => {
      message.value = response.data.message;
    })
    .catch(error => {
      message.value = 'Error fetching message' + error;
      console.error('Error fetching message:', error);
    });
  //message.value = 'Hello Vue 3!';
  increment();
}

function increment() {
  count.value++;
}

</script>


<template>
  <div class="text-center p-4 bg-blue-500 text-white">
    {{ message }} - {{ count }}
    <button @click="changeMessage" class="mt-4 px-4 py-2 bg-blue-700 text-white rounded">
      Change Message
    </button>
  </div>
</template>

<style scoped>

</style>