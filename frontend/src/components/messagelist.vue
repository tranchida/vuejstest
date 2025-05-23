<script setup lang="js">
    import { ref } from 'vue';
    import { onMounted } from 'vue';
    import { messageService } from '../services/messageService';

const messages = ref([]);

onMounted(async () => {
    await showMessages();
});

async function showMessages() {
    const data = await messageService.getMessages();
    messages.value = data;
}

function clearMessages() {
    messages.value = [];
}

</script>
<template>
    <div class="space-y-6">
        <h1 class="text-2xl font-bold text-gray-900">Liste des Messages</h1>
        <div class="flex space-x-4">
            <button 
                @click="showMessages"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            >
                Afficher les messages
            </button>
            <button 
                @click="clearMessages"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            >
                Masquer les messages
            </button>
        </div>
        <ul class="divide-y divide-gray-200">
            <li 
                v-for="message in messages" 
                :key="message.id"
                class="py-4 px-4 hover:bg-gray-50 transition-colors duration-200"
            >
                <div class="flex items-center space-x-3">
                    <span class="text-sm font-medium text-indigo-600">#{{ message.id }}</span>
                    <span class="text-gray-900">{{ message.message }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
</style>