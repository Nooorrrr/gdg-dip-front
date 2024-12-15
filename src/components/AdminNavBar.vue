<template>
    <div class="group text-white bg-primary-blue row-span-2 flex items-center justify-center  ">
        <ul class="flex flex-col gap-12 items-center justify-center px-2">
            <!-- <li><NavIcon icon="user" text="My Profile" link="/Profile" ></NavIcon></li> -->
            <li><NavIcon icon="people-group" text="Teams" link="/EditTeams"  ></NavIcon></li>
            <li><NavIcon icon="bullseye" text="Challenges" link="/EditChallenges"></NavIcon></li>
            <li><NavIcon icon="user" text="Users" link="/EditUsers"></NavIcon></li>
        </ul>
    </div>
</template>

<script setup>
import NavIcon from './NavIcon.vue';

</script>