import { useFetch } from '@vueuse/core';

export const messageService = {
  async getMessage() {
      const { data, error} = await useFetch('/api/message').get().json();
      if (error.value) {
        throw error.value;
      }
      return data.value;
  }
}; 