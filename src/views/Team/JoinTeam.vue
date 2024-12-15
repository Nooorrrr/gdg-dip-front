<template>
    <div class="flex items-center justify-center min-h-screen pt-2 bg-white">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 class="text-2xl font-semibold text-center mb-6">Join a team</h2>
        <form>
          <!-- name -->
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Team Name
            </label>
            <input
              type="name"
              id="name"
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
              placeholder="type here"
              class="w-full px-4 py-2 mt-1 border rounded-lg bg-blue-50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
  
          <!-- Submit Button -->
           <div class="flex items-center justify-center gap-4">
            <BlueBtn action="Join" :onClick="()=>{}" />
           </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import BlueBtn from '../../components/BlueBtn.vue';
  </script>