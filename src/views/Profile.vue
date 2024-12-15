<template>
    <div class="m-2 ml-8 mt-20 flex-1 flex justify-center">
        <li class="grid md:grid-cols-3  w-fit h-fit border-primary-yellow border p-4 rounded list-none ">
            <h1 class="mt-2 mb-4 font-medium">My Informations</h1>
            <div class="flex flex-col md:gap-2">
                <li><span class="font-medium">User-id </span> user0101</li>
                <li><span class="font-medium">Name </span> Belaid Meriem</li>
                <li><span class="font-medium">Team name </span> team7</li>
            </div>
            <div class="flex flex-col md:gap-2">
                <li><span class="font-medium">Email </span> mm_belaid@esi.dz</li>
                <li><span class="font-medium">Phone number </span> 0793707921</li>
                <div class="flex flex-1 items-end justify-end cursor-pointer">
                <font-awesome-icon @click="openForm" icon="gear" class="text-primary-yellow hover:text-secondary-yellow transition-all duration-150" />
            </div>
            </div>
        </li>

    </div>
</template>
<script setup>
    const openForm = () => {
        console.log('Form opened');
    }
</script>