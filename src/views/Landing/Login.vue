<template>
  <Header></Header>
  <div class="flex items-center justify-center min-h-screen pt-2 bg-white">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-semibold text-center mb-6">Log in</h2>
      <form @submit.prevent="loginUser">
        <!-- Username -->
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="type here"
            class="w-full px-4 py-2 mt-1 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <!-- Password -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="type here"
            class="w-full px-4 py-2 mt-1 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <!-- Submit Button -->
        <div class="flex items-center justify-center gap-4">
          <BlueBtn action="Log in" />
        </div>

        <!-- Error Message -->
        <p v-if="errorMessage" class="text-red-500 text-center mt-4">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from "axios";
import BlueBtn from "../../components/BlueBtn.vue";
import Header from "../../components/HeaderLanding.vue";

const router = useRouter();

// Reactive state
const username = ref("");
const password = ref("");
const errorMessage = ref("");

// Method to log in the user
const loginUser = async () => {
  try {
    const response = await axios.post("http://localhost:8000/login/", {
      username: username.value,
      password: password.value,
    });
    console.log("Login successful:", response.data);

    router.push('/Profile');
    alert("Login successful!");
    
  } catch (error) {
    console.error("Error logging in:", error.response?.data || error.message);
    errorMessage.value =
      error.response?.data?.error || "An error occurred during login.";
  }
};
</script>
