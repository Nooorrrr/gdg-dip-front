<template>
    <button @click="onClick"  class="px-4 py-1 md:px-8 md:py-1.5  font-poppins rounded-lg bg-primary-blue text-white font-normal hover:bg-secondary-blue transition ease 0.2s">{{ action }}</button>
</template>
<script setup>
defineProps(['action','onClick']);

</script>