<template>
  <Header></Header>
  <div class="flex items-center justify-center min-h-screen pt-2 bg-white">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
      <h2 class="text-2xl font-semibold text-center mb-6">Register</h2>
      <div class="register-container">
        <form @submit.prevent="registerUser">
          <!-- Name -->
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="type here"
              class="w-full px-4 py-1 mt-1 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <!-- Phone number -->
          <div class="mb-4">
            <label for="number" class="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              type="text"
              id="number"
              v-model="phoneNumber"
              placeholder="type here"
              class="w-full px-4 py-1 mt-1 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <!-- Email -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="type here"
              class="w-full px-4 py-1 mt-1 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
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
              class="w-full px-4 py-1 mt-1 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <!-- Confirm Password -->
          <div class="mb-4">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              placeholder="type here"
              class="w-full px-4 py-1 mt-1 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div class="flex items-center justify-center gap-4">
            <BlueBtn action="Register"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BlueBtn from "../../components/BlueBtn.vue";
import Header from "../../components/HeaderLanding.vue";
import axios from 'axios';

const router = useRouter();

// Reactive variables
const username = ref('');
const phoneNumber = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

// Method to register the user
const registerUser = async () => {
  try {
    const response = await axios.post('http://localhost:8000/signup/', {
      username: username.value,
      phone_number: phoneNumber.value,
      email: email.value,
      password: password.value,
      confirm_password: confirmPassword.value
    });
    console.log(response.data); 
    
    alert("user creation successful!");

    router.push('/Profile');
  } catch (error) {
    if (error.response) {
     
      console.error('Error response:', error.response.data);
    } else if (error.request) {
      
      console.error('No response received:', error.request);
    } else {
     
      console.error('Request setup error:', error.message);
    }
  }
};

</script>
