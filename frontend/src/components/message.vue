<script setup lang="js">
import { onMounted, ref } from 'vue';
import { messageService } from '../services/messageService';

const message = ref({id: 0, message: 'Hello Tailwind CSS 4.1!'});

onMounted(async () => {
  await changeMessage();
});

async function changeMessage() {
  try {
    const data = await messageService.getMessage();
    message.value = data;
    console.log(message.value);
  } catch (error) {
    console.error('Error in component:', error);
    message.value = 'Error fetching message' + error;
  }
}


</script>


<template>
    <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div class="text-lg font-medium text-gray-900 mb-4">
            {{ message.id + " - " + message.message }}
        </div>
        <button 
            @click="changeMessage"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        >
            Changer le message
        </button>
    </div>
</template>

<style scoped>

</style>