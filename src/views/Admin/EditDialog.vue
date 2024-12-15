<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-4">Edit Challenge</h2>

      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700"
            >Title</label
          >
          <input
            type="text"
            v-model="challenge.title"
            id="title"
            placeholder="Enter title"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div class="mb-4">
          <label for="category" class="block text-sm font-medium text-gray-700"
            >Category</label
          >
          <input
            type="text"
            v-model="challenge.category"
            id="category"
            placeholder="Enter category"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div class="mb-4">
          <label
            for="description"
            class="block text-sm font-medium text-gray-700"
            >Description</label
          >
          <input
            type="text"
            v-model="challenge.description"
            id="recources"
            placeholder="Enter recources here"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div class="mb-4">
          <label for="info" class="block text-sm font-medium text-gray-700"
            >Recources</label
          >
          <input
            type="text"
            v-model="challenge.resources"
            id="recources"
            placeholder="Enter recources"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <!-- Submit Button -->
        <button 
          type="submit"
          class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ease-in-out duration-200"
        >
          Update
        </button>
      </form>

      <!-- Close Button -->

      <button @click="refreshPage" class="mt-4 text-red-500">Cancel</button>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs } from "vue";

const props = defineProps({
  isVisible: Boolean,
  challenge: Object,
  onSubmit: Function,
  onClose: Function,
});

const { isVisible, challenge } = toRefs(props);

const handleSubmit = () => {
  props.onSubmit();
};

const refreshPage = () => {
  window.location.reload();
};
</script>
