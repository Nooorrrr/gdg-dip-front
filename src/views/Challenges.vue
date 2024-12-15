<template>
    <div class="flex flex-col gap-4 flex-1 items-center">
        <h1 class="font-kronaOne">Available Challenges</h1>
        <div class="grid lg:grid-cols-3 gap-3 m-2 md:grid-cols-2 sm:grid-cols-1">
            <Challenge v-for="challenge in challenges" :key="challenge.id" :challenge="challenge" ></Challenge>
        </div>
    </div>
</template>
<script setup>

import challenges from '../Controllers/Challenges.controller'
import Challenge from '../components/Challenge.vue';
</script>
<!-- <Challenge v-for="challenge in challenges" :key="challenge.id" :challenge="challenge" /> -->