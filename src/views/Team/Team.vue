<template>
    <div class="flex items-center justify-center min-h-screen pt-2 bg-white gap-8">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 class="text-2xl font-semibold text-center mb-6">Join an existing team</h2>
        <router-link to="/teamJoin" class="flex items-center justify-center gap-4">
            <button class="px-4 py-1 md:px-8 md:py-1.5 font-poppins rounded-lg bg-primary-blue text-white border border-primary-blue font-normal hover:bg-primary-blue hover:text-white transition ease-in-out duration-200 text-center">
                Join
            </button>
        </router-link>
      </div>

      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 class="text-2xl font-semibold text-center mb-6">Create a team</h2>
        <router-link to="/teamCreate" class="flex items-center justify-center gap-4">
            <button class="px-4 py-1 md:px-8 md:py-1.5 font-poppins rounded-lg bg-primary-blue text-white border border-primary-blue font-normal hover:bg-primary-blue hover:text-white transition ease-in-out duration-200 text-center">
                Create
            </button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>