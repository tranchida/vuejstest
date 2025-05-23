<script setup>
  import Message from "./components/message.vue";
  import MessageList from "./components/messagelist.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Mon Application</h1>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white rounded-lg shadow p-6 space-y-6">
          <Message />
          <MessageList />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>
