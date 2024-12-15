<template>
    <button @click="onClick"  class=" px-4 py-1 md:px-8 md:py-1.5   font-poppins rounded-lg bg-white text-primary-blue border border-primary-blue font-normal hover:bg-primary-blue hover:text-white transition ease 0.2s text-center ">{{ action }}</button>
</template>
<script setup>
defineProps(['action'])
</script>