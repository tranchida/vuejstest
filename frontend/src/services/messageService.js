import { useFetch } from '@vueuse/core';

export const messageService = {

  async getMessage() {
      const { data, error} = await useFetch('/api/message').get().json();
      if (error.value) {
        throw error.value;
      }
      return data.value;
  },

  async getMessages() {
    const { data, error} = await useFetch('/api/messages').get().json();
    if (error.value) {
      throw error.value;
    }
    return data.value;
  }

}; 