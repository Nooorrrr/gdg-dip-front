<template>
    <router-link :to="link">
        <div class="flex flex-col items-center justify-center gap-4 cursor-pointer  transition-all duration-300 group-hover:px-1.5 ">
            <font-awesome-icon :icon="icon" class=" w-8 h-8 text-white text-3xl " />
            <h6 class="text-xs hidden hover:font-medium group-hover:block ">{{ text }}</h6>
        </div>
    </router-link>
    
</template>

<script setup>
defineProps(['icon','text','link'])
</script>