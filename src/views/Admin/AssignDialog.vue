<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-4">Assign Challenge</h2>

      <form @submit.prevent="handleSubmit">
        <!-- Challenge Dropdown -->
        <div class="mb-4">
          <label for="challenge" class="block text-sm font-medium text-gray-700">
            Challenge
          </label>
          <select
            v-model="selectedChallenge"
            id="challenge"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          >
            <option v-for="challenge in challenges" :key="challenge.id" :value="challenge.id">
              {{ challenge.title }}
            </option>
          </select>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ease-in-out duration-200"
        >
          Assign
        </button>
      </form>

      <!-- Close Button -->
      <button @click="closeDialog" class="mt-4 text-red-500">Cancel</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const isVisible = ref(false); // Default to hidden
const challenges = ref([]); // Holds the fetched challenges
const selectedChallenge = ref(null); // Stores the selected challenge ID

// Fetch challenges from the API when the component is mounted
onMounted(async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("No auth token found. Please log in.");
      return;
    }

    // Fetch challenges from API
    const response = await axios.get("http://localhost:8000/challenges/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    // Map the response to challenges
    challenges.value = response.data; // Response: Array of challenges [{ id, title }]
    console.log("Fetched challenges:", challenges.value);
  } catch (error) {
    console.error("Error fetching challenges:", error.response?.data || error.message);
  }
});

// Handle form submission
const handleSubmit = async () => {
  if (!selectedChallenge.value) {
    console.error("No challenge selected.");
    return;
  }

  try {
    const token = localStorage.getItem("authToken");
    await axios.post(
      "http://localhost:8000/challenges/assign/",
      { challenge_id: selectedChallenge.value }, 
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    console.log("Challenge assigned successfully:", selectedChallenge.value);
    closeDialog(); // Close dialog on success
  } catch (error) {
    console.error("Error assigning challenge:", error.response?.data || error.message);
  }
};

// Open the dialog
const openDialog = () => {
  isVisible.value = true;
};

// Close the dialog
const closeDialog = () => {
  isVisible.value = false;
};
</script>
