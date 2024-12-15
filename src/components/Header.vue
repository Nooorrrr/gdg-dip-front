<template>
    <div class="relative flex flex-1">
      <!-- Background layer for color -->
      <div class="absolute inset-0 bg-primary-blue "></div>

      <!-- Main content layer -->
       <div class="relative flex flex-1 rounded-tl-xl bg-white ">
        <div class="flex flex-1 items-center justify-between mx-4 my-2 ">
        <img :src="gdgLogo" alt="GDGLogo" class="w-40 hidden md:block">
        <img :src="gdgLogo2" alt="gdg" class="sm:block md:hidden w-12">
        <div class="flex items-center justify-center gap-4 ">
            <WhiteBtn action="Log out" :onClick="()=>{}"/>
            <!-- avec !user <WhiteBtn action="Login" :onClick="()=>{}"/>
            <BlueBtn action="Register" :onClick="()=>{}" /> -->
        </div>
    </div>
       </div>
      
    </div>
</template>

<script setup>
import gdgLogo from '../assets/GDGLogo.svg';
import gdgLogo2 from '../assets/GDG.svg';
import BlueBtn from './BlueBtn.vue';
import WhiteBtn from './WhiteBtn.vue';
</script>