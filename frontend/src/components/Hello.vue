<script setup lang="js">
import { ref } from 'vue';
import { messageService } from '../services/messageService';

const message = ref('Hello Tailwind CSS 4.1!');
const count = ref(0);

async function changeMessage() {
  try {
    const data = await messageService.getMessage();
    message.value = data.message;
  } catch (error) {
    console.error('Error in component:', error);
    message.value = 'Error fetching message' + error;
  }
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