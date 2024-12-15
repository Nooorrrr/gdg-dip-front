<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-4">Add Challenge</h2>

      <form @submit.prevent="handleSubmit">
        <!-- Title Input -->
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            v-model="challenge.title"
            id="title"
            placeholder="Enter title"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <!-- Category Input -->
        <div class="mb-4">
          <label for="category" class="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            v-model="challenge.category"
            id="category"
            placeholder="Enter category"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <!-- Description Input -->
        <div class="mb-4">
          <label
            for="description"
            class="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            v-model="challenge.description"
            id="description"
            placeholder="Enter description"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <!-- Resources Input -->
        <div class="mb-4">
          <label
            for="resources"
            class="block text-sm font-medium text-gray-700"
          >
            Resources
          </label>
          <input
            type="text"
            v-model="challenge.resources"
            id="resources"
            placeholder="Enter resources"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <!-- Difficulty Input -->
        <div class="mb-4">
          <label
            for="difficulty"
            class="block text-sm font-medium text-gray-700"
          >
            Difficulty
          </label>
          <select
            v-model="challenge.difficulty"
            id="difficulty"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ease-in-out duration-200"
        >
          Add
        </button>
      </form>

      <!-- Close Button -->
      <button @click="refreshPage" class="mt-4 text-red-500">Cancel</button>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs } from "vue";
import axios from "axios";

const props = defineProps({
  isVisible: Boolean,
});

const challenge = ref({
  title: "",
  category: "",
  description: "",
  resources: "",
  difficulty: "Easy",
});

const handleSubmit = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const response = await axios.post(
      "http://localhost:8000/challenges/add/",
      challenge.value,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    console.log("Challenge added successfully:", response.data);
    alert("Challenge added successfully!");
    refreshPage();
  } catch (error) {
    console.error(
      "Error adding challenge:",
      error.response?.data || error.message
    );
    alert("Failed to add challenge. Please try again.");
  }
};

const refreshPage = () => {
  window.location.reload();
};
</script>
