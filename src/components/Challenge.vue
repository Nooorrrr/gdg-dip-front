<template>
    <div class="border-primary-blue border rounded-md flex flex-col gap-8 p-2 hover:shadow transition-all duration-100  ">
        <div class="flex items-center justify-end">
            <p class="text-primary-green bg-secondary-green p-1 rounded font-medium text-sm w-fit items-end " >{{ challenge.category }}</p>
        </div>
        <h3 class="font-semibold text-center">{{ challenge.title }}</h3>
        <p class=" text-center ">{{ challenge.description }}</p>
        <WhiteBtn action="View ressources" class="mx-16 mb-2"></WhiteBtn>
    </div>
</template>

<script setup>
    import WhiteBtn from './WhiteBtn.vue'
    defineProps(['challenge'])
</script>