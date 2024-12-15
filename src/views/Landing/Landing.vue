<template>
  <Header></Header>
  <section
    class="flex items-center justify-between min-h-screen px-24 bg-white"
  >
    <div class="max-w-lg">
      <h1 class="text-4xl font-bold text-gray-800 leading-snug">
        Unleash Your Potential. <br />
        Conquer Challenges Together.
      </h1>
      <p class="mt-4 text-gray-600">
        Our platform is designed for programming competitions and hackathons,
        providing a seamless way for participants to manage challenges, submit
        projects, and collaborate efficiently.
      </p>
      <router-link to="/register">
        <button
          class="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Join now!
        </button>
      </router-link>
    </div>

    <div class="hidden lg:block">
      <img src="../../assets/GDG.svg" alt="Logo" class="w-64 h-auto" />
    </div>
  </section>
</template>

<script setup>
import Header from "../../components/HeaderLanding.vue";
</script>
